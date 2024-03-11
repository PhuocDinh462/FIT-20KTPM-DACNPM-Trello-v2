import { UniqueIdentifier } from '@dnd-kit/core'
import { ListsComponentProps } from '../type'
import { ListComponent } from './index'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { createListAPI } from '~/api/List'
import { useState } from 'react'


export default function ListsComponent({ lists, setOpenCardSetting }: ListsComponentProps) {

  return (
    <SortableContext items={lists?.map((l) => l._id) as (UniqueIdentifier | { id: UniqueIdentifier })[]} strategy={horizontalListSortingStrategy}>
      <div className='relative z-30 my-10 ml-10 flex flex-row'>
        {lists && lists.map((list) => (
          <ListComponent key={list._id} list={list} setOpenCardSetting={setOpenCardSetting} />
        ))}
       
      </div>
    </SortableContext>
  );
}