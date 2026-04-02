import React, { useEffect, useMemo, useState } from "react";

type ToastTone = "info" | "success" | "error";

type ToastInput = {
    message: string;
    tone?: ToastTone;
    duration?: number;
};

type Toast = {
    id: string;
    message: string;
    tone: ToastTone;
    duration: number;
};

const TOAST_EVENT = "app:toast";
let toastCounter = 0;

function normalizeToast(input: string | ToastInput): Toast {
    const payload = typeof input === "string" ? { message: input } : input;
    toastCounter += 1;

    return {
        id: `toast-${toastCounter}`,
        message: payload.message,
        tone: payload.tone ?? "info",
        duration: payload.duration ?? 3000,
    };
}

export function toast(input: string | ToastInput): string {
    const nextToast = normalizeToast(input);
    if (typeof window !== "undefined") {
        window.dispatchEvent(
            new CustomEvent<Toast>(TOAST_EVENT, { detail: nextToast }),
        );
    }
    return nextToast.id;
}

export default function Toaster() {
    const [queue, setQueue] = useState<Toast[]>([]);
    const [activeToast, setActiveToast] = useState<Toast | null>(null);
    const [isLeaving, setIsLeaving] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") return;
        const onToast = (event: Event) => {
            const detail = (event as CustomEvent<Toast>).detail;
            if (!detail) return;
            setQueue((prev) => [...prev, detail]);
        };

        window.addEventListener(TOAST_EVENT, onToast);
        return () => window.removeEventListener(TOAST_EVENT, onToast);
    }, []);

    useEffect(() => {
        if (activeToast || queue.length === 0) {
            return;
        }

        const [nextToast, ...rest] = queue;
        setActiveToast(nextToast);
        setQueue(rest);
    }, [activeToast, queue]);

    useEffect(() => {
        if (!activeToast) {
            return;
        }

        setIsLeaving(false);
        const exitDuration = 200;
        const exitTimer = window.setTimeout(() => {
            setIsLeaving(true);
        }, activeToast.duration);
        const clearTimer = window.setTimeout(() => {
            setActiveToast(null);
            setIsLeaving(false);
        }, activeToast.duration + exitDuration);

        return () => {
            window.clearTimeout(exitTimer);
            window.clearTimeout(clearTimer);
        };
    }, [activeToast]);

    if (!activeToast) {
        return null;
    }

    return (
        <div
            className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-start"
            aria-live="polite"
        >
            <div
                role="status"
                className={`relative flex min-w-60 max-w-90 items-start justify-between gap-4 overflow-hidden rounded-md border px-4 py-3 shadow-lg bg-black text-white`}
                style={{
                    animation: isLeaving
                        ? "toast-slide-out 200ms cubic-bezier(0.22, 1, 0.36, 1) both"
                        : "toast-slide-in 260ms cubic-bezier(0.22, 1, 0.36, 1) both",
                }}
            >
                <p className="text-sm font-medium leading-snug">{activeToast.message}</p>
                <span
                    className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-full origin-left bg-white/70"
                    style={{
                        animation: `toast-progress ${activeToast.duration}ms linear forwards`,
                    }}
                />
            </div>
            <style>{`
                @keyframes toast-slide-in {
                    from {
                        opacity: 0;
                        transform: translateY(-12px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes toast-slide-out {
                    from {
                        opacity: 1;
                        transform: translateY(0);
                    }
                    to {
                        opacity: 0;
                        transform: translateY(-12px);
                    }
                }
                @keyframes toast-progress {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }
            `}</style>
        </div>
    );
}
