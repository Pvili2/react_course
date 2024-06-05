import { forwardRef, useImperativeHandle, useRef } from "react"

export const ResultModal = forwardRef(function ResultModal({ result, targetTime, remainingTime }, ref) {

    const dialog = useRef();
    const userLost = remainingTime <= 0
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })
    return (
        <dialog ref={dialog} className="result-modal">
            {userLost && <h2>You lost!</h2>}
            <p>The target time was <strong>{targetTime} seconds</strong></p>
            <p>You stopped the timer with <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong></p>
            <form method="dialog">
                <button>Close</button>
            </form>
        </dialog>
    )
})