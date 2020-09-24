import * as CSS from "jeddy/css/index";
declare const ExposedWidget: (params: {
    name: string;
    data: Array<{}>;
    display?: number;
    header: Array<{
        title: any;
        style?: {};
    }>;
    iterator: (row: {}, index: number) => {
        rowData: [];
        rowStyle?: CSS.Properties;
    };
    footer?: HTMLElement;
    actionItems?: Array<HTMLElement | Text>;
    searchable?: boolean;
    serverSide?: boolean;
}) => HTMLElement;
export default ExposedWidget;
