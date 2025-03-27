import React from "react";

function Logo() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          "<svg id=\"17:2399\" layer-name=\"div\" width=\"464\" height=\"124\" viewBox=\"0 0 464 124\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"logo-svg\" style=\"width: 170px; height: 48px\"> <path d=\"M0 0H464V124H0V0Z\" stroke=\"#E5E7EB\"></path> <path d=\"M158.868 30.4545C156.766 30.4545 154.952 29.9905 153.428 29.0625C151.913 28.125 150.743 26.8182 149.919 25.142C149.105 23.4564 148.698 21.4962 148.698 19.2613C148.698 17.0265 149.105 15.0568 149.919 13.3522C150.743 11.6382 151.889 10.303 153.357 9.34657C154.834 8.38066 156.558 7.89771 158.527 7.89771C159.664 7.89771 160.786 8.0871 161.894 8.46589C163.002 8.84467 164.01 9.4602 164.919 10.3125C165.828 11.1553 166.553 12.2727 167.093 13.6647C167.632 15.0568 167.902 16.7708 167.902 18.8068V20.2272H151.084V17.3295H164.493C164.493 16.0985 164.247 15 163.755 14.0341C163.272 13.0682 162.58 12.3058 161.681 11.7471C160.791 11.1884 159.739 10.9091 158.527 10.9091C157.192 10.9091 156.037 11.2405 155.061 11.9034C154.095 12.5568 153.352 13.4091 152.831 14.4602C152.31 15.5113 152.05 16.6382 152.05 17.8409V19.7727C152.05 21.4204 152.334 22.8172 152.902 23.963C153.48 25.0994 154.28 25.9659 155.303 26.5625C156.326 27.1496 157.514 27.4432 158.868 27.4432C159.749 27.4432 160.544 27.3201 161.255 27.0738C161.974 26.8182 162.595 26.4394 163.115 25.9375C163.636 25.4261 164.039 24.7916 164.323 24.0341L167.561 24.9432C167.22 26.0416 166.648 27.0076 165.843 27.8409C165.038 28.6647 164.043 29.3087 162.86 29.7727C161.676 30.2273 160.345 30.4545 158.868 30.4545Z\" fill=\"black\"></path> <path d=\"M128.08 29.9999V27.4431L140.466 11.534V11.3068H128.477V8.18176H144.784V10.8522L132.739 26.6477V26.8749H145.182V29.9999H128.08Z\" fill=\"black\"></path> <path d=\"M119.213 30V8.18182H122.565V30H119.213ZM120.917 4.54545C120.264 4.54545 119.7 4.32292 119.227 3.87784C118.763 3.43277 118.531 2.89773 118.531 2.27273C118.531 1.64773 118.763 1.11269 119.227 0.667612C119.7 0.222537 120.264 0 120.917 0C121.571 0 122.129 0.222537 122.593 0.667612C123.067 1.11269 123.303 1.64773 123.303 2.27273C123.303 2.89773 123.067 3.43277 122.593 3.87784C122.129 4.32292 121.571 4.54545 120.917 4.54545Z\" fill=\"black\"></path> <path d=\"M113.072 0.909058V30H109.72V0.909058H113.072Z\" fill=\"black\"></path> <path d=\"M93.6019 30.5113C92.2193 30.5113 90.9646 30.2509 89.8377 29.7301C88.7108 29.1998 87.8159 28.4375 87.153 27.4432C86.4901 26.4394 86.1587 25.2273 86.1587 23.8068C86.1587 22.5568 86.4049 21.5435 86.8973 20.767C87.3898 19.981 88.0479 19.3655 88.8718 18.9204C89.6956 18.4754 90.6047 18.1439 91.599 17.9261C92.6028 17.6988 93.6113 17.5189 94.6246 17.3863C95.9504 17.2159 97.0252 17.088 97.849 17.0028C98.6824 16.9081 99.2884 16.7519 99.6672 16.5341C100.055 16.3163 100.25 15.9375 100.25 15.3977V15.2841C100.25 13.8826 99.8661 12.7935 99.099 12.017C98.3415 11.2405 97.1909 10.8522 95.6473 10.8522C94.0469 10.8522 92.7922 11.2026 91.8831 11.9034C90.974 12.6041 90.3348 13.3522 89.9655 14.1477L86.7837 13.0113C87.3519 11.6856 88.1094 10.6534 89.0564 9.91475C90.0129 9.16664 91.0545 8.64581 92.1814 8.35225C93.3178 8.04922 94.4352 7.89771 95.5337 7.89771C96.2344 7.89771 97.0394 7.98293 97.9485 8.15339C98.867 8.31437 99.7524 8.65054 100.605 9.16191C101.466 9.67327 102.181 10.4451 102.75 11.4772C103.318 12.5094 103.602 13.892 103.602 15.625V30H100.25V27.0454H100.079C99.8519 27.5189 99.4731 28.0255 98.9428 28.5653C98.4125 29.1051 97.707 29.5644 96.8263 29.9432C95.9456 30.3219 94.8708 30.5113 93.6019 30.5113ZM94.1132 27.5C95.439 27.5 96.5564 27.2396 97.4655 26.7187C98.3841 26.1979 99.0754 25.5255 99.5394 24.7017C100.013 23.8778 100.25 23.0113 100.25 22.1022V19.0341C100.108 19.2045 99.7951 19.3608 99.3121 19.5028C98.8386 19.6354 98.2894 19.7538 97.6644 19.8579C97.0488 19.9526 96.4475 20.0379 95.8604 20.1136C95.2827 20.1799 94.814 20.2367 94.4541 20.2841C93.5829 20.3977 92.7685 20.5824 92.011 20.838C91.2629 21.0843 90.6568 21.4583 90.1928 21.9602C89.7382 22.4526 89.511 23.125 89.511 23.9772C89.511 25.142 89.9418 26.0227 90.8036 26.6193C91.6748 27.2064 92.778 27.5 94.1132 27.5Z\" fill=\"black\"></path> <path d=\"M73.0479 30.4545C70.9456 30.4545 69.1322 29.9905 67.6076 29.0625C66.0924 28.125 64.9229 26.8182 64.099 25.142C63.2846 23.4564 62.8774 21.4962 62.8774 19.2613C62.8774 17.0265 63.2846 15.0568 64.099 13.3522C64.9229 11.6382 66.0687 10.303 67.5365 9.34657C69.0138 8.38066 70.7373 7.89771 72.707 7.89771C73.8434 7.89771 74.9655 8.0871 76.0735 8.46589C77.1814 8.84467 78.1899 9.4602 79.099 10.3125C80.0081 11.1553 80.7326 12.2727 81.2723 13.6647C81.8121 15.0568 82.082 16.7708 82.082 18.8068V20.2272H65.2638V17.3295H78.6729C78.6729 16.0985 78.4267 15 77.9343 14.0341C77.4513 13.0682 76.76 12.3058 75.8604 11.7471C74.9702 11.1884 73.9191 10.9091 72.707 10.9091C71.3718 10.9091 70.2165 11.2405 69.2411 11.9034C68.2752 12.5568 67.5318 13.4091 67.011 14.4602C66.4901 15.5113 66.2297 16.6382 66.2297 17.8409V19.7727C66.2297 21.4204 66.5138 22.8172 67.082 23.963C67.6596 25.0994 68.4598 25.9659 69.4826 26.5625C70.5053 27.1496 71.6937 27.4432 73.0479 27.4432C73.9286 27.4432 74.724 27.3201 75.4343 27.0738C76.154 26.8182 76.7742 26.4394 77.2951 25.9375C77.8159 25.4261 78.2184 24.7916 78.5024 24.0341L81.7411 24.9432C81.4002 26.0416 80.8273 27.0076 80.0223 27.8409C79.2174 28.6647 78.2231 29.3087 77.0394 29.7727C75.8557 30.2273 74.5252 30.4545 73.0479 30.4545Z\" fill=\"black\"></path> <path d=\"M39.0029 30V0.909058H48.8325C51.1052 0.909058 52.9707 1.29731 54.4291 2.07383C55.8874 2.84087 56.9669 3.89675 57.6677 5.24145C58.3685 6.58614 58.7188 8.1155 58.7188 9.82951C58.7188 11.5435 58.3685 13.0634 57.6677 14.3892C56.9669 15.7149 55.8921 16.7566 54.4433 17.5142C52.9944 18.2623 51.1431 18.6363 48.8893 18.6363H40.9347V15.4545H48.7757C50.3287 15.4545 51.5787 15.2272 52.5257 14.7727C53.4821 14.3181 54.1734 13.6742 54.5995 12.8409C55.0351 11.9981 55.2529 10.9943 55.2529 9.82951C55.2529 8.66474 55.0351 7.64675 54.5995 6.77554C54.1639 5.90432 53.4679 5.23197 52.5115 4.75849C51.555 4.27553 50.2908 4.03406 48.7188 4.03406H42.5257V30H39.0029ZM52.6961 16.9318L59.8552 30H55.7643L48.7188 16.9318H52.6961Z\" fill=\"black\"></path> <path d=\"M169.923 41.4648L168.865 41.6523C168.82 41.5169 168.75 41.388 168.654 41.2656C168.56 41.1432 168.432 41.043 168.271 40.9648C168.11 40.8867 167.908 40.8477 167.666 40.8477C167.335 40.8477 167.059 40.9219 166.837 41.0703C166.616 41.2161 166.505 41.4049 166.505 41.6367C166.505 41.8372 166.58 41.9987 166.728 42.1211C166.876 42.2435 167.116 42.3438 167.447 42.4219L168.4 42.6406C168.952 42.7682 169.363 42.9648 169.634 43.2305C169.905 43.4961 170.041 43.8411 170.041 44.2656C170.041 44.625 169.936 44.9453 169.728 45.2266C169.522 45.5052 169.235 45.724 168.865 45.8828C168.498 46.0417 168.072 46.1211 167.587 46.1211C166.916 46.1211 166.367 45.9779 165.943 45.6914C165.518 45.4023 165.258 44.9922 165.162 44.4609L166.291 44.2891C166.361 44.5833 166.505 44.806 166.724 44.957C166.943 45.1055 167.228 45.1797 167.58 45.1797C167.962 45.1797 168.268 45.1003 168.498 44.9414C168.727 44.7799 168.841 44.5833 168.841 44.3516C168.841 44.1641 168.771 44.0065 168.63 43.8789C168.492 43.7513 168.28 43.6549 167.994 43.5898L166.978 43.3672C166.418 43.2396 166.004 43.0365 165.736 42.7578C165.47 42.4792 165.337 42.1263 165.337 41.6992C165.337 41.3451 165.436 41.0352 165.634 40.7695C165.832 40.5039 166.106 40.2969 166.455 40.1484C166.804 39.9974 167.203 39.9219 167.654 39.9219C168.302 39.9219 168.813 40.0625 169.185 40.3438C169.557 40.6224 169.804 40.9961 169.923 41.4648Z\" fill=\"black\"></path> <path d=\"M159.577 46.1211C158.986 46.1211 158.477 45.9948 158.05 45.7422C157.625 45.487 157.297 45.1289 157.065 44.668C156.836 44.2044 156.722 43.6615 156.722 43.0391C156.722 42.4245 156.836 41.8828 157.065 41.4141C157.297 40.9453 157.62 40.5794 158.034 40.3164C158.451 40.0534 158.938 39.9219 159.495 39.9219C159.834 39.9219 160.162 39.9779 160.479 40.0898C160.797 40.2018 161.082 40.3776 161.335 40.6172C161.588 40.8568 161.787 41.168 161.933 41.5508C162.078 41.931 162.151 42.3932 162.151 42.9375V43.3516H157.382V42.4766H161.007C161.007 42.1693 160.944 41.8971 160.819 41.6602C160.694 41.4206 160.519 41.2318 160.292 41.0938C160.068 40.9557 159.805 40.8867 159.503 40.8867C159.175 40.8867 158.888 40.9674 158.644 41.1289C158.401 41.2878 158.214 41.4961 158.081 41.7539C157.951 42.0091 157.886 42.2865 157.886 42.5859V43.2695C157.886 43.6706 157.956 44.0117 158.097 44.293C158.24 44.5742 158.439 44.7891 158.694 44.9375C158.95 45.0833 159.248 45.1562 159.589 45.1562C159.81 45.1562 160.012 45.125 160.194 45.0625C160.377 44.9974 160.534 44.901 160.667 44.7734C160.8 44.6458 160.901 44.4883 160.972 44.3008L162.077 44.5C161.989 44.8255 161.83 45.1107 161.601 45.3555C161.374 45.5977 161.089 45.7865 160.745 45.9219C160.404 46.0547 160.015 46.1211 159.577 46.1211Z\" fill=\"black\"></path> <path d=\"M152.272 46V40H153.44V46H152.272ZM152.862 39.0742C152.659 39.0742 152.484 39.0065 152.338 38.8711C152.195 38.7331 152.124 38.569 152.124 38.3789C152.124 38.1862 152.195 38.0221 152.338 37.8867C152.484 37.7487 152.659 37.6797 152.862 37.6797C153.065 37.6797 153.238 37.7487 153.381 37.8867C153.527 38.0221 153.6 38.1862 153.6 38.3789C153.6 38.569 153.527 38.7331 153.381 38.8711C153.238 39.0065 153.065 39.0742 152.862 39.0742Z\" fill=\"black\"></path>

<path d=\"M146.019 48.375C145.542 48.375 145.132 48.3125 144.788 48.1875C144.447 48.0625 144.168 47.8971 143.952 47.6914C143.736 47.4857 143.575 47.2604 143.468 47.0156L144.472 46.6016C144.542 46.7161 144.636 46.8372 144.753 46.9648C144.873 47.0951 145.034 47.2057 145.237 47.2969C145.443 47.388 145.707 47.4336 146.03 47.4336C146.473 47.4336 146.839 47.3255 147.128 47.1094C147.417 46.8958 147.562 46.5547 147.562 46.0859V44.9062H147.487C147.417 45.0339 147.315 45.1758 147.183 45.332C147.052 45.4883 146.873 45.6237 146.644 45.7383C146.414 45.8529 146.116 45.9102 145.749 45.9102C145.275 45.9102 144.848 45.7995 144.468 45.5781C144.09 45.3542 143.791 45.0247 143.569 44.5898C143.351 44.1523 143.241 43.6146 143.241 42.9766C143.241 42.3385 143.349 41.7917 143.565 41.3359C143.784 40.8802 144.084 40.5312 144.464 40.2891C144.844 40.0443 145.275 39.9219 145.757 39.9219C146.129 39.9219 146.43 39.9844 146.659 40.1094C146.888 40.2318 147.067 40.375 147.194 40.5391C147.325 40.7031 147.425 40.8477 147.495 40.9727H147.581V40H148.726V46.1328C148.726 46.6484 148.606 47.0716 148.366 47.4023C148.127 47.7331 147.802 47.9779 147.394 48.1367C146.987 48.2956 146.529 48.375 146.019 48.375ZM146.007 44.9414C146.343 44.9414 146.627 44.8633 146.858 44.707C147.093 44.5482 147.27 44.3216 147.39 44.0273C147.512 43.7305 147.573 43.375 147.573 42.9609C147.573 42.5573 147.513 42.2018 147.394 41.8945C147.274 41.5872 147.098 41.3477 146.866 41.1758C146.634 41.0013 146.348 40.9141 146.007 40.9141C145.655 40.9141 145.362 41.0052 145.128 41.1875C144.894 41.3672 144.716 41.612 144.597 41.9219C144.479 42.2318 144.421 42.5781 144.421 42.9609C144.421 43.3542 144.481 43.6992 144.601 43.9961C144.72 44.293 144.897 44.5247 145.132 44.6914C145.369 44.8581 145.66 44.9414 146.007 44.9414Z\" fill=\"black\"></path>

<path d=\"M137.422 46.1211C136.86 46.1211 136.369 45.9922 135.95 45.7344C135.53 45.4766 135.205 45.1159 134.973 44.6523C134.741 44.1888 134.625 43.6471 134.625 43.0273C134.625 42.4049 134.741 41.8607 134.973 41.3945C135.205 40.9284 135.53 40.5664 135.95 40.3086C136.369 40.0508 136.86 39.9219 137.422 39.9219C137.985 39.9219 138.476 40.0508 138.895 40.3086C139.314 40.5664 139.64 40.9284 139.872 41.3945C140.103 41.8607 140.219 42.4049 140.219 43.0273C140.219 43.6471 140.103 44.1888 139.872 44.6523C139.64 45.1159 139.314 45.4766 138.895 45.7344C138.476 45.9922 137.985 46.1211 137.422 46.1211ZM137.426 45.1406C137.791 45.1406 138.093 45.0443 138.333 44.8516C138.572 44.6589 138.749 44.4023 138.864 44.082C138.981 43.7617 139.04 43.4089 139.04 43.0234C139.04 42.6406 138.981 42.2891 138.864 41.9688C138.749 41.6458 138.572 41.3867 138.333 41.1914C138.093 40.9961 137.791 40.8984 137.426 40.8984C137.059 40.8984 136.754 40.9961 136.512 41.1914C136.273 41.3867 136.094 41.6458 135.977 41.9688C135.862 42.2891 135.805 42.6406 135.805 43.0234C135.805 43.4089 135.862 43.7617 135.977 44.082C136.094 44.4023 136.273 44.6589 136.512 44.8516C136.754 45.0443 137.059 45.1406 137.426 45.1406Z\" fill=\"black\"></path>

<path d=\"M131.344 38V46H130.176V38H131.344Z\" fill=\"black\"></path>

<path d=\"M124.095 46.1211C123.533 46.1211 123.042 45.9922 122.623 45.7344C122.203 45.4766 121.878 45.1159 121.646 44.6523C121.414 44.1888 121.298 43.6471 121.298 43.0273C121.298 42.4049 121.414 41.8607 121.646 41.3945C121.878 40.9284 122.203 40.5664 122.623 40.3086C123.042 40.0508 123.533 39.9219 124.095 39.9219C124.658 39.9219 125.149 40.0508 125.568 40.3086C125.987 40.5664 126.313 40.9284 126.544 41.3945C126.776 41.8607 126.892 42.4049 126.892 43.0273C126.892 43.6471 126.776 44.1888 126.544 44.6523C126.313 45.1159 125.987 45.4766 125.568 45.7344C125.149 45.9922 124.658 46.1211 124.095 46.1211ZM124.099 45.1406C124.464 45.1406 124.766 45.0443 125.005 44.8516C125.245 44.6589 125.422 44.4023 125.537 44.082C125.654 43.7617 125.712 43.4089 125.712 43.0234C125.712 42.6406 125.654 42.2891 125.537 41.9688C125.422 41.6458 125.245 41.3867 125.005 41.1914C124.766 40.9961 124.464 40.8984 124.099 40.8984C123.732 40.8984 123.427 40.9961 123.185 41.1914C122.945 41.3867 122.767 41.6458 122.65 41.9688C122.535 42.2891 122.478 42.6406 122.478 43.0234C122.478 43.4089 122.535 43.7617 122.65 44.082C122.767 44.4023 122.945 44.6589 123.185 44.8516C123.427 45.0443 123.732 45.1406 124.099 45.1406Z\" fill=\"black\"></path>

<path d=\"M114.182 42.4375V46H113.014V40H114.135V40.9766H114.209C114.347 40.6589 114.563 40.4036 114.857 40.2109C115.154 40.0182 115.528 39.9219 115.979 39.9219C116.387 39.9219 116.745 40.0078 117.053 40.1797C117.36 40.349 117.598 40.6016 117.768 40.9375C117.937 41.2734 118.021 41.6888 118.021 42.1836V46H116.854V42.3242C116.854 41.8893 116.74 41.5495 116.514 41.3047C116.287 41.0573 115.976 40.9336 115.58 40.9336C115.309 40.9336 115.068 40.9922 114.857 41.1094C114.649 41.2266 114.484 41.3984 114.361 41.625C114.242 41.849 114.182 42.1198 114.182 42.4375Z\" fill=\"black\"></path>

<path d=\"M105.584 42.4375V46H104.417V38H105.569V40.9766H105.643C105.784 40.6536 105.999 40.3971 106.288 40.207C106.577 40.0169 106.954 39.9219 107.42 39.9219C107.832 39.9219 108.191 40.0065 108.499 40.1758C108.808 40.3451 109.048 40.5977 109.217 40.9336C109.389 41.2669 109.475 41.6836 109.475 42.1836V46H108.307V42.3242C108.307 41.8841 108.194 41.543 107.967 41.3008C107.741 41.056 107.426 40.9336 107.022 40.9336C106.746 40.9336 106.499 40.9922 106.28 41.1094C106.064 41.2266 105.893 41.3984 105.768 41.625C105.646 41.849 105.584 42.1198 105.584 42.4375Z\" fill=\"black\"></path>

<path d=\"M98.7227 46.1211C98.1419 46.1211 97.6419 45.9896 97.2227 45.7266C96.806 45.4609 96.4857 45.0951 96.2617 44.6289C96.0378 44.1628 95.9258 43.6289 95.9258 43.0273C95.9258 42.418 96.0404 41.8802 96.2695 41.4141C96.4987 40.9453 96.8216 40.5794 97.2383 40.3164C97.6549 40.0534 98.1458 39.9219 98.7109 39.9219C99.1667 39.9219 99.5729 40.0065 99.9297 40.1758C100.286 40.3424 100.574 40.5768 100.793 40.8789C101.014 41.181 101.146 41.5339 101.188 41.9375H100.051C99.9883 41.6562 99.8451 41.4141 99.6211 41.2109C99.3997 41.0078 99.1029 40.9062 98.7305 40.9062C98.4049 40.9062 98.1198 40.9922 97.875 41.1641C97.6328 41.3333 97.444 41.5755 97.3086 41.8906C97.1732 42.2031 97.1055 42.5729 97.1055 43C97.1055 43.4375 97.1719 43.8151 97.3047 44.1328C97.4375 44.4505 97.625 44.6966 97.8672 44.8711C98.112 45.0456 98.3997 45.1328 98.7305 45.1328C98.9518 45.1328 99.1523 45.0924 99.332 45.0117C99.5143 44.9284 99.6667 44.8099 99.7891 44.6562C99.9141 44.5026 100.001 44.3177 100.051 44.1016H101.188C101.146 44.4896 101.02 44.8359 100.809 45.1406C100.598 45.4453 100.315 45.6849 99.9609 45.8594C99.6094 46.0339 99.1966 46.1211 98.7227 46.1211Z\" fill=\"black\"></path>

<path d=\"M90.3447 46.1211C89.7536 46.1211 89.2445 45.9948 88.8174 45.7422C88.3929 45.487 88.0648 45.1289 87.833 44.668C87.6038 44.2044 87.4893 43.6615 87.4893 43.0391C87.4893 42.4245 87.6038 41.8828 87.833 41.4141C88.0648 40.9453 88.3877 40.5794 88.8018 40.3164C89.2184 40.0534 89.7054 39.9219 90.2627 39.9219C90.6012 39.9219 90.9294 39.9779 91.2471 40.0898C91.5648 40.2018 91.8499 40.3776 92.1025 40.6172C92.3551 40.8568 92.5544 41.168 92.7002 41.5508C92.846 41.931 92.9189 42.3932 92.9189 42.9375V43.3516H88.1494V42.4766H91.7744C91.7744 42.1693 91.7119 41.8971 91.5869 41.6602C91.4619 41.4206 91.2861 41.2318 91.0596 41.0938C90.8356 40.9557 90.5726 40.8867 90.2705 40.8867C89.9424 40.8867 89.6559 40.9674 89.4111 41.1289C89.1689 41.2878 88.9814 41.4961 88.8486 41.7539C88.7184 42.0091 88.6533 42.2865 88.6533 42.5859V43.2695C88.6533 43.6706 88.7236 44.0117 88.8643 44.293C89.0075 44.5742 89.2067 44.7891 89.4619 44.9375C89.7171 45.0833 90.0153 45.1562 90.3564 45.1562C90.5778 45.1562 90.7796 45.125 90.9619 45.0625C91.1442 44.9974 91.3018 44.901 91.4346 44.7734C91.5674 44.6458 91.6689 44.4883 91.7393 44.3008L92.8447 44.5C92.7562 44.8255 92.5973 45.1107 92.3682 45.3555C92.1416 45.5977 91.8564 45.7865 91.5127 45.9219C91.1715 46.0547 90.7822 46.1211 90.3447 46.1211Z\" fill=\"black\"></path>

<path d=\"M84.5513 40V40.9375H81.2739V40H84.5513ZM82.1528 38.5625H83.3208V44.2383C83.3208 44.4648 83.3547 44.6354 83.4224 44.75C83.4901 44.862 83.5773 44.9388 83.6841 44.9805C83.7935 45.0195 83.9119 45.0391 84.0396 45.0391C84.1333 45.0391 84.2153 45.0326 84.2856 45.0195C84.356 45.0065 84.4106 44.9961 84.4497 44.9883L84.6606 45.9531C84.5929 45.9792 84.4966 46.0052 84.3716 46.0312C84.2466 46.0599 84.0903 46.0755 83.9028 46.0781C83.5955 46.0833 83.3091 46.0286 83.0435 45.9141C82.7778 45.7995 82.563 45.6224 82.3989 45.3828C82.2349 45.1432 82.1528 44.8424 82.1528 44.4805V38.5625Z\" fill=\"black\"></path>

<path d=\"M66.1182 46.1211C65.527 46.1211 65.0179 45.9948 64.5908 45.7422C64.1663 45.487 63.8382 45.1289 63.6064 44.668C63.3773 44.2044 63.2627 43.6615 63.2627 43.0391C63.2627 42.4245 63.3773 41.8828 63.6064 41.4141C63.8382 40.9453 64.1611 40.5794 64.5752 40.3164C64.9919 40.0534 65.4788 39.9219 66.0361 39.9219C66.3747 39.9219 66.7028 39.9779 67.0205 40.0898C67.3382 40.2018 67.6234 40.3776 67.876 40.6172C68.1286 40.8568 68.3278 41.168 68.4736 41.5508C68.6195 41.931 68.6924 42.3932 68.6924 42.9375V43.3516H63.9229V42.4766H67.5479C67.5479 42.1693 67.4854 41.8971 67.3604 41.6602C67.2354 41.4206 67.0596 41.2318 66.833 41.0938C66.6091 40.9557 66.346 40.8867 66.0439 40.8867C65.7158 40.8867 65.4294 40.9674 65.1846 41.1289C64.9424 41.2878 64.7549 41.4961 64.6221 41.7539C64.4919 42.0091 64.4268 42.2865 64.4268 42.5859V43.2695C64.4268 43.6706 64.4971 44.0117 64.6377 44.293C64.7809 44.5742 64.9801 44.7891 65.2354 44.9375C65.4906 45.0833 65.7887 45.1562 66.1299 45.1562C66.3512 45.1562 66.5531 45.125 66.7354 45.0625C66.9176 44.9974 67.0752 44.901 67.208 44.7734C67.3408 44.6458 67.4424 44.4883 67.5127 44.3008L68.6182 44.5C68.5296 44.8255 68.3708 45.1107 68.1416 45.3555C67.915 45.5977 67.6299 45.7865 67.2861 45.9219C66.945 46.0547 66.5557 46.1211 66.1182 46.1211Z\" fill=\"black\"></path>

<path d=\"M57.5454 46V40H58.6743V40.9531H58.7368C58.8462 40.6302 59.0389 40.3763 59.3149 40.1914C59.5936 40.0039 59.9087 39.9102 60.2603 39.9102C60.3332 39.9102 60.4191 39.9128 60.5181 39.918C60.6196 39.9232 60.6991 39.9297 60.7563 39.9375V41.0547C60.7095 41.0417 60.6261 41.0273 60.5063 41.0117C60.3866 40.9935 60.2668 40.9844 60.147 40.9844C59.8709 40.9844 59.6248 41.043 59.4087 41.1602C59.1951 41.2747 59.0259 41.4349 58.9009 41.6406C58.7759 41.8438 58.7134 42.0755 58.7134 42.3359V46H57.5454Z\" fill=\"black\"></path>

<path d=\"M52.8242 43.5117V40H53.9961V46H52.8477V44.9609H52.7852C52.6471 45.2812 52.4258 45.5482 52.1211 45.7617C51.819 45.9727 51.4427 46.0781 50.9922 46.0781C50.6068 46.0781 50.2656 45.9935 49.9688 45.8242C49.6745 45.6523 49.4427 45.3984 49.2734 45.0625C49.1068 44.7266 49.0234 44.3112 49.0234 43.8164V40H50.1914V43.6758C50.1914 44.0846 50.3047 44.4102 50.5312 44.6523C50.7578 44.8945 51.0521 45.0156 51.4141 45.0156C51.6328 45.0156 51.8503 44.9609 52.0664 44.8516C52.2852 44.7422 52.4661 44.5768 52.6094 44.3555C52.7552 44.1341 52.8268 43.8529 52.8242 43.5117Z\" fill=\"black\"></path>

<path d=\"M43.3296 46.1211C42.7489 46.1211 42.2489 45.9896 41.8296 45.7266C41.4129 45.4609 41.0926 45.0951 40.8687 44.6289C40.6447 44.1628 40.5327 43.6289 40.5327 43.0273C40.5327 42.418 40.6473 41.8802 40.8765 41.4141C41.1056 40.9453 41.4285 40.5794 41.8452 40.3164C42.2619 40.0534 42.7528 39.9219 43.3179 39.9219C43.7736 39.9219 44.1799 40.0065 44.5366 40.1758C44.8934 40.3424 45.1812 40.5768 45.3999 40.8789C45.6213 41.181 45.7528 41.5339 45.7944 41.9375H44.6577C44.5952 41.6562 44.452 41.4141 44.228 41.2109C44.0067 41.0078 43.7098 40.9062 43.3374 40.9062C43.0119 40.9062 42.7267 40.9922 42.4819 41.1641C42.2397 41.3333 42.0509 41.5755 41.9155 41.8906C41.7801 42.2031 41.7124 42.5729 41.7124 43C41.7124 43.4375 41.7788 43.8151 41.9116 44.1328C42.0444 44.4505 42.2319 44.6966 42.4741 44.8711C42.7189 45.0456 43.0067 45.1328 43.3374 45.1328C43.5588 45.1328 43.7593 45.0924 43.939 45.0117C44.1213 44.9284 44.2736 44.8099 44.396 44.6562C44.521 44.5026 44.6082 44.3177 44.6577 44.1016H45.7944C45.7528 44.4896 45.6265 44.8359 45.4155 45.1406C45.2046 45.4453 44.922 45.6849 44.5679 45.8594C44.2163 46.0339 43.8035 46.1211 43.3296 46.1211Z\" fill=\"black\"></path>

<path d=\"M34.9521 46.1211C34.361 46.1211 33.8519 45.9948 33.4248 45.7422C33.0003 45.487 32.6722 45.1289 32.4404 44.668C32.2113 44.2044 32.0967 43.6615 32.0967 43.0391C32.0967 42.4245 32.2113 41.8828 32.4404 41.4141C32.6722 40.9453 32.9951 40.5794 33.4092 40.3164C33.8258 40.0534 34.3128 39.9219 34.8701 39.9219C35.2087 39.9219 35.5368 39.9779 35.8545 40.0898C36.1722 40.2018 36.4574 40.3776 36.71 40.6172C36.9626 40.8568 37.1618 41.168 37.3076 41.5508C37.4535 41.931 37.5264 42.3932 37.5264 42.9375V43.3516H32.7568V42.4766H36.3818C36.3818 42.1693 36.3193 41.8971 36.1943 41.6602C36.0693 41.4206 35.8936 41.2318 35.667 41.0938C35.443 40.9557 35.18 40.8867 34.8779 40.8867C34.5498 40.8867 34.2633 40.9674 34.0186 41.1289C33.7764 41.2878 33.5889 41.4961 33.4561 41.7539C33.3258 42.0091 33.2607 42.2865 33.2607 42.5859V43.2695C33.2607 43.6706 33.3311 44.0117 33.4717 44.293C33.6149 44.5742 33.8141 44.7891 34.0693 44.9375C34.3245 45.0833 34.6227 45.1562 34.9639 45.1562C35.1852 45.1562 35.387 45.125 35.5693 45.0625C35.7516 44.9974 35.9092 44.901 36.042 44.7734C36.1748 44.6458 36.2764 44.4883 36.3467 44.3008L37.4521 44.5C37.3636 44.8255 37.2048 45.1107 36.9756 45.3555C36.749 45.5977 36.4639 45.7865 36.1201 45.9219C35.779 46.0547 35.3896 46.1211 34.9521 46.1211Z\" fill=\"black\"></path>

<path d=\"M28.9849 41.4648L27.9263 41.6523C27.882 41.5169 27.8117 41.388 27.7153 41.2656C27.6216 41.1432 27.494 41.043 27.3325 40.9648C27.1711 40.8867 26.9692 40.8477 26.7271 40.8477C26.3963 40.8477 26.1203 40.9219 25.8989 41.0703C25.6776 41.2161 25.5669 41.4049 25.5669 41.6367C25.5669 41.8372 25.6411 41.9987 25.7896 42.1211C25.938 42.2435 26.1776 42.3438 26.5083 42.4219L27.4614 42.6406C28.0135 42.7682 28.425 42.9648 28.6958 43.2305C28.9666 43.4961 29.1021 43.8411 29.1021 44.2656C29.1021 44.625 28.9979 44.9453 28.7896 45.2266C28.5838 45.5052 28.2961 45.724 27.9263 45.8828C27.5591 46.0417 27.1333 46.1211 26.6489 46.1211C25.9771 46.1211 25.4289 45.9779 25.0044 45.6914C24.5799 45.4023 24.3195 44.9922 24.2231 44.4609L25.3521 44.2891C25.4224 44.5833 25.5669 44.806 25.7856 44.957C26.0044 45.1055 26.2896 45.1797 26.6411 45.1797C27.0239 45.1797 27.3299 45.1003 27.5591 44.9414C27.7882 44.7799 27.9028 44.5833 27.9028 44.3516C27.9028 44.1641 27.8325 44.0065 27.6919 43.8789C27.5539 43.7513 27.3416 43.6549 27.0552 43.5898L26.0396 43.3672C25.4797 43.2396 25.0656 43.0365 24.7974 42.7578C24.5317 42.4792 24.3989 42.1263 24.3989 41.6992C24.3989 41.3451 24.4979 41.0352 24.6958 40.7695C24.8937 40.5039 25.1672 40.2969 25.5161 40.1484C25.8651 39.9974 26.2648 39.9219 26.7153 39.9219C27.3638 39.9219 27.8742 40.0625 28.2466 40.3438C28.619 40.6224 28.8651 40.9961 28.9849 41.4648Z\" fill=\"black\"></path>

<path d=\"M17.0166 48.25C16.8421 48.25 16.6833 48.2357 16.54 48.207C16.3968 48.181 16.29 48.1523 16.2197 48.1211L16.501 47.1641C16.7145 47.2214 16.9046 47.2461 17.0713 47.2383C17.238 47.2305 17.3851 47.168 17.5127 47.0508C17.6429 46.9336 17.7575 46.7422 17.8564 46.4766L18.001 46.0781L15.8057 40H17.0557L18.5752 44.6562H18.6377L20.1572 40H21.4111L18.9385 46.8008C18.8239 47.1133 18.6781 47.3776 18.501 47.5938C18.3239 47.8125 18.113 47.9766 17.8682 48.0859C17.6234 48.1953 17.3395 48.25 17.0166 48.25Z\" fill=\"black\"></path>

<path d=\"M9.21729 43.9648L9.20947 42.5391H9.4126L11.8032 40H13.2017L10.4751 42.8906H10.2915L9.21729 43.9648ZM8.14307 46V38H9.31104V46H8.14307ZM11.9321 46L9.78369 43.1484L10.5884 42.332L13.3657 46H11.9321Z\" fill=\"black\"></path>

<path d=\"M4.76172 41.4648L3.70312 41.6523C3.65885 41.5169 3.58854 41.388 3.49219 41.2656C3.39844 41.1432 3.27083 41.043 3.10938 40.9648C2.94792 40.8867 2.74609 40.8477 2.50391 40.8477C2.17318 40.8477 1.89714 40.9219 1.67578 41.0703C1.45443 41.2161 1.34375 41.4049 1.34375 41.6367C1.34375 41.8372 1.41797 41.9987 1.56641 42.1211C1.71484 42.2435 1.95443 42.3438 2.28516 42.4219L3.23828 42.6406C3.79036 42.7682 4.20182 42.9648 4.47266 43.2305C4.74349 43.4961 4.87891 43.8411 4.87891 44.2656C4.87891 44.625 4.77474 44.9453 4.56641 45.2266C4.36068 45.5052 4.07292 45.724 3.70312 45.8828C3.33594 46.0417 2.91016 46.1211 2.42578 46.1211C1.75391 46.1211 1.20573 45.9779 0.78125 45.6914C0.356771 45.4023 0.0963542 44.9922 0 44.4609L1.12891 44.2891C1.19922 44.5833 1.34375 44.806 1.5625 44.957C1.78125 45.1055 2.06641 45.1797 2.41797 45.1797C2.80078 45.1797 3.10677 45.1003 3.33594 44.9414C3.5651 44.7799 3.67969 44.5833 3.67969 44.3516C3.67969 44.1641 3.60938 44.0065 3.46875 43.8789C3.33073 43.7513 3.11849 43.6549 2.83203 43.5898L1.81641 43.3672C1.25651 43.2396 0.842448 43.0365 0.574219 42.7578C0.308594 42.4792 0.175781 42.1263 0.175781 41.6992C0.175781 41.3451 0.27474 41.0352 0.472656 40.7695C0.670573 40.5039 0.94401 40.2969 1.29297 40.1484C1.64193 39.9974 2.04167 39.9219 2.49219 39.9219C3.14062 39.9219 3.65104 40.0625 4.02344 40.3438C4.39583 40.6224 4.64193 40.9961 4.76172 41.4648Z\" fill=\"black\"></path>

<path d=\"M0 0H31V33H0V0Z\" fill=\"url(#pattern0_17_2399)\"></path>

<defs>
<pattern id=\"pattern0_17_2399\" patternContentUnits=\"objectBoundingBox\" width=\"1\" height=\"1\">
<use xlink:href=\"#image0_17_2399\" transform=\"matrix(0.0184322 0 0 0.017348 -0.0175858 -0.00911147)\"></use>
</pattern>
</defs>
</svg>"
      }}
    />
  );
}

export default Logo;