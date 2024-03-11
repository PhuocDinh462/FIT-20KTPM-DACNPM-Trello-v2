
import { v4 as uuidv4 } from 'uuid';
import { Card, List } from '../type';

const generateRandomDateOrNull = (): Date | null => {
  const randomBoolean = Math.random() < 0.5;
  return randomBoolean ? new Date() : null;
};

const generateRandomCard = (listId: string): Card => {
  return {
    _id: uuidv4(),
    name: `Card ${Math.floor(Math.random() * 100) + 1}`,
    index: Math.floor(Math.random() * 10) + 1,
    watcher_email: ['email1', 'email2'],
    archive_at: generateRandomDateOrNull(),
    activities: [
      {
        workspace_id: 'workspace1',
        content: 'Activity 1',
        board_id: 'board1',
        cardlist_id: listId,
        card_id: 'card1',
      },
    ],
    features: [
      {
        _id: uuidv4(),
        type: 'label',
        label_id: uuidv4(),
      },
    ],
    cover: 'cover1',
    description: 'Description 1',
    placeHolder: false,
    list_id: listId,
  };
};

const generateRandomList = (): List => {
  const listId = uuidv4();
  return {
    _id: listId,
    board_id: 'board1',
    index: Math.floor(Math.random() * 10) + 1,
    name: `List ${Math.floor(Math.random() * 100) + 1}`,
    cards: [generateRandomCard(listId)],
    watcher_email: ['email1', 'email2'],
    archive_at: generateRandomDateOrNull(),
  };
};

const generateListArray = (count: number): List[] => {
  const listArray: List[] = [];
  for (let i = 0; i < count; i++) {
    listArray.push(generateRandomList());
  }
  return listArray;
};

export const listTestDataArray: List[] = generateListArray(3); // Generate an array of 3 random lists

console.log(listTestDataArray);


// import faker from 'faker'
// const generateRandomDateOrNull = () => (faker.datatype.boolean() ? faker.date.past() : undefined)
// const generateRandomDate = (): Date => {
//   const startDate = new Date() // Current date and time
//   const endDate = new Date()
//   endDate.setDate(endDate.getDate() + 30) // Set the end date to be 30 days from now

//   const randomTimestamp = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
//   const randomDate = new Date(randomTimestamp)

//   return randomDate
// }
// export const lists = [
//   {
//     _id: 'list1',
//     name: 'todo',
//     board_id: 1,
//     index: 1,
//     data: [
//       {
//         _id: 'task1',
//         list_id: 'list1',
//         index: 1,
//         name: 'Task 1',
//         features: ['1', '2', '3'],
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         cover: '123',
//         description: '123',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: ['email1', 'email21231231232132']
//       },
//       {
//         _id: 'task2',
//         list_id: 'list1',
//         features: ['1', '2', '3'],
//         cover: '123',
//         description: '123',
//         index: 2,
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         name: 'Task 2',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: []
//       },
//       {
//         _id: 'task5',
//         list_id: 'list1',
//         features: ['1', '2', '3'],
//         cover: '123',
//         description: '123',
//         index: 2,
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         name: 'Task 5',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: []
//       },
//       {
//         _id: 'task6',
//         list_id: 'list1',
//         features: ['1', '2', '3'],
//         cover: '123',
//         description: '123',
//         index: 2,
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         name: 'Task 6',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: []
//       },
//       {
//         _id: 'task7',
//         list_id: 'list1',
//         features: ['1', '2', '3'],
//         cover: '123',
//         description: '123',
//         index: 2,
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         name: 'Task 7',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: []
//       },
//       {
//         _id: 'task8',
//         list_id: 'list1',
//         features: ['1', '2', '3'],
//         cover: '123',
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         description: '123',
//         index: 2,
//         name: 'Task 8',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: []
//       }
//     ]
//   },
//   {
//     _id: 'list2',
//     name: 'doing',
//     board_id: 1,
//     index: 2,
//     data: [
//       {
//         _id: 'task3',
//         list_id: 'list2',
//         features: ['1', '2', '3'],
//         cover: '123',
//         description: '123',
//         index: 1,
//         activities: [
//           {
//             workspace_id: 'workspace1',
//             content: 'Activity 1',
//             board_id: 'board1',
//             cardlist_id: 'list1',
//             card_id: 'task1'
//           }
//         ],
//         name: 'Task 3',
//         archive_at: generateRandomDateOrNull(),
//         watcher_email: []
//       }
//     ]
//   },
//   {
//     _id: 'list3',
//     name: 'done',
//     board_id: 1,
//     index: 3,
//     data: []
//   }
// ] // Import your date generation function
// import { v4 as uuidv4 } from 'uuid' // Import a UUID library or use another method to generate unique IDs
// import { Card, List } from '../type'

// const generateRandomCard = (): Card => {
//   return {
//     _id: uuidv4(),
//     list_id: 'list1',
//     name: `Card ${Math.floor(Math.random() * 100) + 1}`,
//     index: Math.floor(Math.random() * 10) + 1,
//     watcher_email: ['email1', 'email2'],
//     archive_at: generateRandomDateOrNull(),
//     activities: [
//       {
//         workspace_id: 'workspace1',
//         content: 'Activity 1',
//         board_id: 'board1',
//         cardlist_id: 'list1',
//         card_id: 'card1'
//       }
//     ],
//     features: [
//       // FeatureLabelSchema
//       {
//         _id: uuidv4(),
//         type: 'label',
//         label_id: uuidv4()
//       },
//       // FeatureChecklistSchema
//       {
//         _id: uuidv4(),
//         type: 'checklist',
//         items: [
//           { name: 'Item 1', is_check: false },
//           { name: 'Item 2', is_check: true }
//         ]
//       },
//       // FeatureDateSchema
//       {
//         _id: uuidv4(),
//         type: 'date',
//         start_date: generateRandomDateOrNull(),
//         due_date: generateRandomDate()
//       },
//       // FeatureAttachmentSchema
//       {
//         _id: uuidv4(),
//         type: 'attachment',
//         link: 'https://example.com/attachment'
//       }
//     ],
//     cover: 'cover1',
//     description: 'Description 1',
//     placeHolder: false
//   }
// }

// const generateCardArray = (count: number): Card[] => {
//   const cardArray: Card[] = []
//   for (let i = 0; i < count; i++) {
//     cardArray.push(generateRandomCard())
//   }
//   return cardArray
// }

// export const cardTestDataArray: Card[] = generateCardArray(5) // Generate an array of 5 random cards


// const generateRandomList = (): List => {
//   return {
//     _id: uuidv4(),
//     board_id: 'board1',
//     index: Math.floor(Math.random() * 10) + 1,
//     name: `List ${Math.floor(Math.random() * 100) + 1}`,
//     cards: generateCardArray(3), // Adjust the number of cards as needed
//     watcher_email: ['email1', 'email2'],
//     archive_at: generateRandomDateOrNull()
//   };
// };

// const generateListArray = (count: number): List[] => {
//   const listArray: List[] = [];
//   for (let i = 0; i < count; i++) {
//     listArray.push(generateRandomList());
//   }
//   return listArray;
// };

// export const listTestDataArray: List[] = generateListArray(3); // Generate an array of 3 random lists
