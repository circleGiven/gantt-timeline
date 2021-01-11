import React, { useEffect, useRef } from "react";

export const TaskList = ({
                             headerHeight,
                             fontFamily,
                             fontSize,
                             rowWidth,
                             rowHeight,
                             scrollY,
                             tasks,
                             selectedTaskId,
                             setSelectedTask,
                             locale,
                             ganttHeight,
                             horizontalContainerClass,
                             TaskListHeader,
                             TaskListTable,
                         }) => {
    const horizontalContainerRef = useRef(null);
    useEffect(() => {
        if (horizontalContainerRef.current) {
            horizontalContainerRef.current.scrollTop = scrollY;
        }
    }, [scrollY]);

    const headerProps = {
        headerHeight,
        fontFamily,
        fontSize,
        rowWidth,
    };
    const tableProps = {
        rowHeight,
        rowWidth,
        fontFamily,
        fontSize,
        tasks,
        locale,
        selectedTaskId,
        setSelectedTask,
    };

    return (
        <div>
            <TaskListHeader {...headerProps} />
            <div
                ref={horizontalContainerRef}
                className={horizontalContainerClass}
                style={ganttHeight ? { height: ganttHeight } : {}}
            >
                <TaskListTable {...tableProps} />
            </div>
        </div>
    );
};