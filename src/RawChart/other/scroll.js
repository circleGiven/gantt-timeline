import React, { useRef, useEffect } from "react";
import styles from "./scroll.module.css";

export const Scroll = ({ scroll, ganttHeight, ganttFullHeight, headerHeight, onScroll }) => {
    const scrollRef = useRef(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scroll;
        }
    }, [scroll]);

    return (
        <div
            style={{ height: ganttHeight, marginTop: headerHeight }}
            className={styles.scroll}
            onScroll={onScroll}
            ref={scrollRef}
        >
            <div style={{ height: ganttFullHeight, width: 1 }} />
        </div>
    );
};