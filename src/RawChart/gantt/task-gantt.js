import React, { useRef, useEffect } from "react";
import { Grid } from "../grid/grid";
import { Calendar } from "../calendar/calendar";
import { TaskGanttContent } from "./task-gantt-content";
import styles from "./gantt.module.css";

export const TaskGantt = ({
                                                        gridProps,
                                                        calendarProps,
                                                        barProps,
                                                        ganttHeight,
                                                        scrollY,
                                                        scrollX,
                                                        onScroll,
                                                    }) => {
    const ganttSVGRef = useRef(null);
    const horizontalContainerRef = useRef(null);
    const verticalContainerRef = useRef(null);
    const newBarProps = { ...barProps, svg: ganttSVGRef };

    useEffect(() => {
        if (horizontalContainerRef.current) {
            horizontalContainerRef.current.scrollTop = scrollY;
        }
    }, [scrollY]);

    useEffect(() => {
        if (verticalContainerRef.current) {
            verticalContainerRef.current.scrollLeft = scrollX;
        }
    }, [scrollX]);

    return (
        <div
            className={styles.ganttVerticalContainer}
            ref={verticalContainerRef}
            onScroll={onScroll}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={gridProps.gridWidth}
                height={calendarProps.headerHeight}
                fontFamily={barProps.fontFamily}
            >
                <Calendar {...calendarProps} />
            </svg>
            <div
                ref={horizontalContainerRef}
                className={styles.horizontalContainer}
                style={
                    ganttHeight
                        ? { height: ganttHeight, width: gridProps.gridWidth }
                        : { width: gridProps.gridWidth }
                }
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={gridProps.gridWidth}
                    height={barProps.rowHeight * barProps.tasks.length}
                    fontFamily={barProps.fontFamily}
                    ref={ganttSVGRef}
                >
                    <Grid {...gridProps} />
                    <TaskGanttContent {...newBarProps} />
                </svg>
            </div>
        </div>
    );
};