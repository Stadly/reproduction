let transition:
    | {
        duration?: number;
    }
    | undefined;

if (transition) {
    transition.duration = transition.duration ?? 1500;
}
