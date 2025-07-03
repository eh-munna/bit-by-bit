// import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes';

// const filters = [
//   {
//     status: 'All',
//     colors: [],
//   },
// ];

// export const filterReducer = (state = filters, action) => {
//   switch (action.type) {
//     case STATUS_CHANGED: {
//       return [
//         {
//           ...state[0],
//           status: action.payload,
//         },
//       ];
//     }

//     case COLOR_CHANGED: {
//       const { changeType, color } = action.payload;
//       switch (changeType) {
//         case 'add': {
//           return [
//             {
//               ...state[0],
//               colors: state.colors.includes(color)
//                 ? state.colors
//                 : [...state.colors, color],
//             },
//           ];
//         }

//         case 'remove': {
//           return [
//             {
//               ...state[0],
//               colors: state[0].colors.filter((c) => c !== color),
//             },
//           ];
//         }

//         default:
//           return state;
//       }
//     }

//     default:
//       return state;
//   }
// };

import { COLOR_CHANGED, STATUS_CHANGED } from './actionTypes';

const initialFilter = {
  status: 'all',
  colors: [],
};

export const filterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case STATUS_CHANGED:
      return {
        ...state,
        status: action.payload,
      };

    case COLOR_CHANGED: {
      const { changeType, color } = action.payload;

      switch (changeType) {
        case 'add':
          return {
            ...state,
            colors: [...state.colors, color],
          };

        case 'remove':
          return {
            ...state,
            colors: state.colors.filter((c) => c !== color),
          };

        default:
          return state;
      }
    }

    default:
      return state;
  }
};
