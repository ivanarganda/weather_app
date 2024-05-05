import React from 'react'

export interface Events {
    
    onScroll: React.UIEvent<HTMLDivElement>
    onChange: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLOptionElement> | React.ChangeEvent<HTMLTableRowElement>
                | React.ChangeEvent<HTMLTableCellElement> | React.ChangeEvent<HTMLTableColElement> | React.ChangeEvent<HTMLDivElement>
    onMouse: React.MouseEvent<HTMLDivElement> | React.MouseEvent<HTMLElement>

}