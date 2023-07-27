import styles from "@/styles/clicker-score.module.css"
import { useSelector } from "react-redux"
import { RootState } from "@/lib/store"

export default function ClickerScore() {
    const value = useSelector((state: RootState) => state.clicker.value)

    return (
        <div className={styles.score}>{ value }</div>
    )
}