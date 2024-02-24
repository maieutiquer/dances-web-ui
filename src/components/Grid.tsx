import { ColDef } from 'ag-grid-community'

import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'
import PuffLoader from 'react-spinners/PuffLoader'

const Loader = () => <PuffLoader color="#e8ca01" loading size={100} />

export const Grid = ({ rowData, colDefs }: { rowData: Array<{ id: string; name: string }>; colDefs: ColDef[] }) => (
  <div className="ag-theme-quartz-auto-dark" style={{ height: '100%' }}>
    <AgGridReact
      {...{
        rowData,
        columnDefs: colDefs,
        pagination: false,
        sideBar: {
          toolPanels: ['columns', 'filters'],
          defaultToolPanel: '',
          hiddenByDefault: false,
        },
        enableCharts: true,
        enableRangeSelection: true,
        enableCellChangeFlash: true,
        enableFillHandle: true,
        paginationAutoPageSize: true,
        animateRows: true,
        groupIncludeFooter: true,
        groupSelectsChildren: true,
        groupRowsSticky: true,
        suppressAggFuncInHeader: true,
        rowSelection: 'multiple',
        suppressRowClickSelection: true,
        rowGroupPanelShow: 'always',
        pivotPanelShow: 'always',
        groupDisplayType: 'multipleColumns',
        groupDefaultExpanded: -1,
        defaultColDef: {
          enableValue: true,
          enablePivot: true,
          enableRowGroup: true,
          resizable: true,
          sortable: true,
          filter: true,
          aggFunc: 'count',
          headerCheckboxSelectionFilteredOnly: true,
        },
        statusBar: {
          statusPanels: [
            { statusPanel: 'agTotalAndFilteredRowCountComponent', align: 'left' },
            { statusPanel: 'agTotalRowCountComponent', align: 'center' },
            { statusPanel: 'agFilteredRowCountComponent' },
            { statusPanel: 'agSelectedRowCountComponent' },
            { statusPanel: 'agAggregationComponent' },
          ],
        },
        components: {
          customLoadingOverlay: Loader,
        },
        loadingOverlayComponent: 'customLoadingOverlay',
        getContextMenuItems: () => [
          'autoSizeAll',
          'expandAll',
          'contractAll',
          'cut',
          'copy',
          'copyWithHeaders',
          'copyWithGroupHeaders',
          'paste',
          'resetColumns',
          'export',
          'chartRange',
        ],
      }}
    />
  </div>
)
