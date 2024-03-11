import { UniqueIdentifier } from '@dnd-kit/core'
import { ListsComponentProps } from '../type'
import { ListComponent } from './index'

import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'
import { createListAPI } from '~/api/List'

function createList(){
  const data = {     
    name: `List ${Math.floor(Math.random() * 100) + 1}`,  
  };
  const res = createListAPI
}
export default function ListsComponent({ lists, setOpenCardSetting }: ListsComponentProps) {
  return (
    <SortableContext items={lists?.map((l) => l._id) as (UniqueIdentifier | { id: UniqueIdentifier })[]} strategy={horizontalListSortingStrategy}>
      <div className=' relative z-30 my-10 ml-10 flex flex-row'>
        {lists.map((list) => (
          <ListComponent list={list} setOpenCardSetting={setOpenCardSetting} />

          //     <SortableContext items={lists} strategy={horizontalListSortingStrategy}>
          //       <div className='my-10 ml-4 flex flex-row '>
          //         {lists.map((list) => (
          //           <ListComponent list={list} listDraggingIn={listDraggingIn} />
          // >>>>>>> origin/dev/fe
        ))}
        <button className={`ml-5 rounded border h-[50px] bg-black bg-opacity-50 text-white`}>
          + Add List
        </button>
      </div>
    </SortableContext>
  )
}
