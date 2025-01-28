'use client'
import React from 'react';
import type { MenuProps } from 'antd';
import { Button, Dropdown, Space } from 'antd';

interface FilterTabProps{
    onGraphSelect : (key:string) => void;
}
const FilterTab: React.FC<FilterTabProps> = ({onGraphSelect}) => {
    const items: MenuProps['items'] = [
        {key: '1',label: 'Post Format', onClick:() => onGraphSelect('1')},
        {key: '2',label: 'Post Topic', onClick: () => onGraphSelect('2'),},
        {key: '3',label: 'Post Day', onClick: () => onGraphSelect('3'),},
    ];
    return(
    <Space direction="vertical">
        <Space wrap>
        <Dropdown menu={{ items }} placement="bottom">
            <Button>Influencer Insights on basis of : </Button>
        </Dropdown>
        </Space>
    </Space>
    )
};

export default FilterTab;