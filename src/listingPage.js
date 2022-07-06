import React, { useState} from 'react';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';


const DragHandle = SortableHandle(() => <span>::</span>); // This can be any component you want

const SortableItem = SortableElement(({value}) => {
    return (
        <li>
      <DragHandle />
      {value}
    </li>
  );
});

const SortableList = SortableContainer(({items}) => {
    return (
        <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});


export default function Listing(){
    const [itemstate, setItem] = useState({
        items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
      });

      const onSortEnd = ({oldIndex, newIndex}) => {
        const {items} = itemstate;
    
        setItem({
          items: arrayMove(items, oldIndex, newIndex),
        });
      };
        const {items} = itemstate;
    
        return <SortableList items={items} onSortEnd={onSortEnd ? onSortEnd : ''} useDragHandle={true} />;
  

}