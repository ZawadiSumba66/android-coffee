import React from 'react';
import {Svg, Path, Circle} from 'react-native-svg';
import {theme} from '../theme';

export const HomeIcon = ({size = 40, color = theme.colorAmber}) => {
  return (
    <Svg width={size} height={size} viewBox="0 1 511 511.999" fill={color}>
      <Path d="M498.7 222.695c-.016-.011-.028-.027-.04-.039L289.805 13.81C280.902 4.902 269.066 0 256.477 0c-12.59 0-24.426 4.902-33.332 13.809L14.398 222.55c-.07.07-.144.144-.21.215-18.282 18.386-18.25 48.218.09 66.558 8.378 8.383 19.44 13.235 31.273 13.746.484.047.969.07 1.457.07h8.32v153.696c0 30.418 24.75 55.164 55.168 55.164h81.711c8.285 0 15-6.719 15-15V376.5c0-13.879 11.293-25.168 25.172-25.168h48.195c13.88 0 25.168 11.29 25.168 25.168V497c0 8.281 6.715 15 15 15h81.711c30.422 0 55.168-24.746 55.168-55.164V303.14h7.719c12.586 0 24.422-4.903 33.332-13.813 18.36-18.367 18.367-48.254.027-66.633zm-21.243 45.422a17.03 17.03 0 01-12.117 5.024H442.62c-8.285 0-15 6.714-15 15v168.695c0 13.875-11.289 25.164-25.168 25.164h-66.71V376.5c0-30.418-24.747-55.168-55.169-55.168H232.38c-30.422 0-55.172 24.75-55.172 55.168V482h-66.71c-13.876 0-25.169-11.29-25.169-25.164V288.14c0-8.286-6.715-15-15-15H48a13.9 13.9 0 00-.703-.032c-4.469-.078-8.66-1.851-11.8-4.996-6.68-6.68-6.68-17.55 0-24.234.003 0 .003-.004.007-.008l.012-.012L244.363 35.02A17.003 17.003 0 01256.477 30c4.574 0 8.875 1.781 12.113 5.02l208.8 208.796.098.094c6.645 6.692 6.633 17.54-.031 24.207zm0 0" />
    </Svg>
  );
};

export const OrdersIcon = ({size = 40, color = theme.colorBlack}) => {
  return (
    <Svg width={size} height={size} viewBox="0 1 511 511.999" fill={color}>
      <Path
        d="M2083 4959c-71-14-109-58-122-137-6-37-19-65-54-108-76-97-101-164-102-264 0-107 21-171 86-256 83-110 85-121 36-186-77-101-87-121-87-174 0-88 65-154 153-154 57 0 91 23 159 108 94 118 113 166 113 287 0 116-18 165-101 274-62 82-63 110-8 177 77 94 114 182 114 273 0 106-88 181-187 160zM1370 4954c-41-17-80-69-91-123-9-38-26-75-57-116-81-108-97-155-97-275 0-95 3-111 28-162 15-31 48-81 72-111 63-75 61-102-10-196-30-39-57-87-61-106-23-126 112-228 224-167 38 20 134 136 168 203 33 66 46 159 33 237-12 76-40 135-103 216-61 77-60 98 6 184 62 81 87 135 98 212 11 78-1 126-44 168-31 31-42 36-93 39-32 1-65 0-73-3zM2696 4918c-36-36-45-52-51-93-5-37-18-64-51-107-24-31-56-80-71-110-26-48-28-63-28-163 0-99 3-115 27-165 15-31 48-82 73-114 60-78 60-105-1-182-78-99-89-146-54-219 36-75 136-107 207-67 32 18 112 110 151 173 38 63 53 120 53 205 0 103-24 170-97 266-69 91-70 112-9 189 63 80 94 144 103 214 11 84-1 135-43 175-31 30-43 35-100 38l-65 4-44-44zM187 3223c-15-2-45-21-66-41-46-44-60-96-91-339-113-867 104-1766 577-2394 89-118 215-254 257-277 29-16 118-17 1177-17h1145l35 24c46 33 184 187 264 295 295 401 481 888 561 1471 25 182 26 706 1 880-23 163-43 275-55 305-15 39-66 81-108 91-38 8-3640 10-3697 2zM4400 2891c-37-5-45-9-43-26 4-37 23-260 23-275 0-12 15-14 90-12 159 6 255-40 307-146 25-51 28-67 27-147-4-198-107-455-265-658-54-70-219-238-263-267-30-22-39-38-71-140-21-63-57-163-80-223-24-59-40-107-37-107 4 0 51 23 105 50 333 169 608 450 776 793 120 244 175 510 140 679-54 267-248 442-530 477-88 12-106 12-179 2z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  )
}


export const ProfileIcon = ({size = 100, color = theme.colorAmber}) => {
  return (
    <Svg width={size} height={size} viewBox="0 1 511 511.999" fill={color}>
      <Path
        d="M2375 5105c-143-20-258-56-392-124-445-224-706-724-655-1250 31-313 134-560 332-796 112-134 285-262 446-329 536-224 1123-36 1461 469 267 398 305 946 96 1369-236 478-741 737-1288 661zm413-391c227-57 432-221 536-431 73-148 98-261 97-438-2-276-101-525-281-706-84-85-136-123-236-173-215-106-473-106-688 0-100 50-152 88-236 173-378 381-377 1060 2 1396 211 186 511 253 806 179zM2360 2229c-764-32-1367-269-1727-679-277-315-426-713-452-1206-12-225 6-280 104-325C324 1 408 0 2560 0s2236 1 2275 19c98 45 116 100 104 325-58 1100-744 1753-1964 1870-202 19-404 24-615 15zm520-379c713-64 1173-287 1442-699 122-187 213-460 234-698l7-83H557l7 82c4 46 18 133 31 193 100 464 354 792 769 991 231 111 483 175 826 209 156 16 537 18 690 5z"
        transform="matrix(.1 0 0 -.1 0 512)"
      />
    </Svg>
  )
}

export const SplashIcon = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    x="0"
    y="0"
    enableBackground="new 0 0 296 296"
    version="1.1"
    viewBox="-125 0 500 296"
    xmlSpace="preserve"
  >
    <Path d="M227.667 68h-1.407l-.011-22.688c9.993-2.501 17.418-11.554 17.418-22.312 0-12.683-10.317-23-23-23h-187c-12.683 0-23 10.317-23 23 0 11.102 7.906 20.391 18.384 22.534.021 42.649.065 129.886.105 163.299.043 35.065 14.008 56.698 25.716 68.667 12.848 13.135 25.886 17.838 26.435 18.032a8.028 8.028 0 002.661.468h.01l87.626-.12a8.005 8.005 0 002.662-.474c.55-.195 13.61-4.928 26.462-18.09 4.692-4.806 9.741-11.168 14.109-19.316h12.83c31.981 0 57.667-26.007 57.667-57.975v-74C285.333 94.03 259.648 68 227.667 68zM85.508 279.973c-6.62-2.884-40.29-20.081-40.352-71.162-.04-33.286-.085-119.995-.106-162.811h165.198c.02 42.895.065 129.376.106 162.609.064 51.321-33.515 68.347-40.3 71.262l-84.546.102zM26.667 23c0-3.859 3.141-7 7-7h187c3.859 0 7 3.141 7 7s-3.141 7-7 7h-187c-3.86 0-7-3.141-7-7zm242.666 177.025c0 23.145-18.508 41.975-41.667 41.975h-6.138c2.961-9.457 4.842-20.533 4.826-33.427-.03-25.071-.063-80.462-.087-124.573h1.398c23.159 0 41.667 18.853 41.667 42.025v74z"></Path>
    <Path
      fill="#A56905"
      d="M210.355 208.609c-.041-33.233-.086-119.715-.106-162.609H45.05c.021 42.816.065 129.525.105 162.811.063 51.081 33.732 68.278 40.352 71.162l84.547-.102c6.786-2.915 40.365-19.94 40.301-71.262zm-82.659 5.312a7.993 7.993 0 01-3.618-.865c-20.077-10.182-35.633-23.618-44.985-38.857-8.251-13.443-11.334-28.049-8.459-40.072 3.251-13.599 13.432-22.047 26.568-22.047 14.954 0 24.594 6.265 30.494 13.9 5.901-7.636 15.541-13.9 30.496-13.9 13.137 0 23.316 8.447 26.568 22.046 5.322 22.262-9.133 56.458-53.446 78.931a8.004 8.004 0 01-3.618.864z"
    ></Path>
    <Path
      fill="#FFB929"
      d="M33.667 30h187c3.859 0 7-3.141 7-7s-3.141-7-7-7h-187c-3.859 0-7 3.141-7 7s3.14 7 7 7z"
    ></Path>
    <Path
      fill="#FFF"
      d="M127.696 196.884c36.02-19.632 44.661-45.826 41.503-59.038-.872-3.648-3.462-9.767-11.007-9.767-20.661 0-22.458 18.526-22.524 19.315a8 8 0 01-15.944 0c-.001 0-.559-5.263-3.761-10.225-3.948-6.117-10.086-9.091-18.762-9.091-7.546 0-10.135 6.119-11.007 9.767-3.158 13.214 5.483 39.408 41.502 59.039z"
    ></Path>
    <Path d="M184.76 134.125c-3.252-13.599-13.432-22.046-26.568-22.046-14.955 0-24.595 6.265-30.496 13.9-5.9-7.636-15.54-13.9-30.494-13.9-13.137 0-23.317 8.448-26.568 22.047-2.875 12.023.208 26.629 8.459 40.072 9.353 15.239 24.908 28.676 44.985 38.857a7.993 7.993 0 007.236 0c44.313-22.472 58.769-56.668 53.446-78.93zm-98.565 3.721c.872-3.648 3.461-9.767 11.007-9.767 8.676 0 14.813 2.974 18.762 9.091 3.202 4.962 3.76 10.225 3.761 10.225a8 8 0 0015.944 0c.066-.789 1.863-19.315 22.524-19.315 7.545 0 10.135 6.119 11.007 9.767 3.158 13.212-5.483 39.406-41.503 59.038-36.02-19.632-44.661-45.826-41.502-59.039z"></Path>
  </Svg>
  )
}
