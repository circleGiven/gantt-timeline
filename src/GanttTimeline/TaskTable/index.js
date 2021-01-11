import React, { useEffect, useRef } from "react";
import {Header} from "./Header";
import {Table} from "./Table";

const TaskTable = ({
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
            <Header {...headerProps}/>
            <div
                ref={horizontalContainerRef}
                className={horizontalContainerClass}
                style={ganttHeight ? { height: ganttHeight } : {}}
            >
                <Table {...tableProps} />
            </div>
        </div>
    );
};
export default TaskTable;