import styles from "@/styles/clicker-controls.module.css"
import { deincrement, increment } from "@/utils/clicker"
import { FaPlus, FaMinus } from "react-icons/fa"
import { useDispatch } from "react-redux"

export default function ClickerControls() {
    const dispatch = useDispatch()

    return (
        <div className={styles.buttons}>
            <button onClick={() => dispatch(deincrement())}>
                <FaMinus />
            </button>
            <button onClick={() => dispatch(increment())}>
                <FaPlus />
            </button>
        </div>
    )
}