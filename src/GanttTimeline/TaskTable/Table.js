import React from "react";
import styles from "./table.css";
import map from "lodash/map";

export const Table = ({ rowHeight, rowWidth, tasks, fontFamily, fontSize, locale }) => {

    const dateTimeOptions = {
        weekday: "short",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return (
        <div
            className={styles.taskListWrapper}
            style={{
                fontFamily: fontFamily,
                fontSize: fontSize,
            }}
        >
            {map(tasks, t => {
                return (
                    <div
                        className={styles.taskListTableRow}
                        style={{ height: rowHeight }}
                        key={`${t.id}row`}
                    >
                        <div
                            className={styles.taskListCell}
                            style={{
                                minWidth: rowWidth,
                                maxWidth: rowWidth,
                            }}
                            title={t.name}
                        >
                            &nbsp;{t.name}
                        </div>
                        <div
                            className={styles.taskListCell}
                            style={{
                                minWidth: rowWidth,
                                maxWidth: rowWidth,
                            }}
                        >
                            &nbsp;{t.start.toLocaleDateString(locale, dateTimeOptions)}
                        </div>
                        <div
                            className={styles.taskListCell}
                            style={{
                                minWidth: rowWidth,
                                maxWidth: rowWidth,
                            }}
                        >
                            &nbsp;{t.end.toLocaleDateString(locale, dateTimeOptions)}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};