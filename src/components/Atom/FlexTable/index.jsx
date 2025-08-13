import React, { useMemo } from "react";
import { Table as AntTable, Tooltip } from "antd";
import './customTable.css';

export const FlexTable = ({
  onChange,
  columns,
  pagination,
  ...rest
}) => {
  const currentColumns = useMemo(() => {
    return columns?.map((item) => {
      let columnWidth = item.width;
      if (item.dataIndex === "no") {
        columnWidth = item.width || 60;
      }

      const renderContent = (text, record) => {
        const content = item.render ? item.render(text, record) : text;
        const cellContent = (
          <div
            style={{
              textAlign: item.align,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {content}
          </div>
        );

        return item.showTooltip ? (
          <Tooltip
            title={
              typeof text === "object" ? JSON.stringify(text) : String(text)
            }
          >
            {cellContent}
          </Tooltip>
        ) : (
          cellContent
        );
      };

      return {
        ...item,
        width: columnWidth,
        align: "left",
        ellipsis: true,
        sorter: item.sorter ? item.sorter : undefined,
        title: (
          <Tooltip title={item.title}>
            <span>{item.title}</span>
          </Tooltip>
        ),
        render: renderContent,
      };
    });
  }, [columns]);

  const handlerChangePagination = (page, size) => {
    if (pagination && pagination.onChange) {
      if (size !== pagination.pageSize) {
        pagination.onChange(0, size);
      } else {
        pagination.onChange(page - 1, size);
      }
    }
  };

  return (
    <div>
      <AntTable
        rowKey="id"
        size="small"
        sticky
        columns={currentColumns}
        {...rest}
        pagination={
          pagination && {
            showSizeChanger: true,
            ...pagination,
            current: (pagination.current || 0) + 1,
            onChange: handlerChangePagination,
            showQuickJumper: true,
          }
        }
      />
    </div>
  );
};
