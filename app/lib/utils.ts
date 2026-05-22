
export function moveToTargetTransform(sourceRef: React.RefObject<HTMLElement>, targetRef: React.RefObject<HTMLElement>) {
    const source = sourceRef.current.getBoundingClientRect();
    const target = targetRef.current.getBoundingClientRect();
    const dx = target.left - source.left;
    const dy = target.top - source.top;

    return `translate(${dx}px, ${dy}px)`;
}