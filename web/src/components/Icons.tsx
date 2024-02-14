import { Box } from "@chakra-ui/react";

export const Ethereum = ({ width = "20px", height = "20px", colored = false, ...props }) => {
  if (colored) {
    return (
      <svg viewBox="0 0 24 24" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
          fill="#627EEA"
        />
        <path d="M11.9989 5.45459V10.2938L16.089 12.1214L11.9989 5.45459Z" fill="white" fillOpacity="0.602" />
        <path d="M11.9989 5.45459L7.9082 12.1214L11.9989 10.2938V5.45459Z" fill="white" />
        <path d="M11.9989 15.2574V18.5455L16.0918 12.8831L11.9989 15.2574Z" fill="white" fillOpacity="0.602" />
        <path d="M11.9989 18.5455V15.2568L7.9082 12.8831L11.9989 18.5455Z" fill="white" />
        <path d="M11.9989 14.4962L16.089 12.1214L11.9989 10.2948V14.4962Z" fill="white" fillOpacity="0.2" />
        <path d="M7.9082 12.1214L11.9989 14.4962V10.2948L7.9082 12.1214Z" fill="white" fillOpacity="0.602" />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 20 20" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M13.9557 10.125L9.99996 12.5417L6.04163 10.125L9.99996 3.33337L13.9557 10.125ZM9.99996 13.3177L6.04163 10.9011L9.99996 16.6667L13.9583 10.9011L9.99996 13.3177Z"
          fill="currentColor"
        />
      </svg>
    );
  }
};

export const Starknet = ({ width = "20px", height = "20px", colored = false, ...props }) => {
  if (colored) {
    return (
      <svg viewBox="0 0 24 24" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M21 11.9999C21 16.9704 16.9707 20.9997 12.0001 20.9997C7.02959 20.9997 3 16.9704 3 11.9999C3 7.02933 7.02959 3 12.0001 3C16.9707 3 21 7.02933 21 11.9999Z"
          fill="#29296E"
        />
        <path
          d="M16.1881 9.59346L15.9592 8.88642C15.9127 8.74262 15.7992 8.63071 15.6549 8.58659L14.9444 8.3681C14.846 8.33806 14.8452 8.19931 14.9428 8.16768L15.6501 7.93882C15.7936 7.89231 15.9055 7.77881 15.9499 7.63448L16.1681 6.92398C16.1982 6.8259 16.3369 6.82484 16.3686 6.92265L16.5974 7.62969C16.6439 7.77323 16.7574 7.88513 16.9018 7.92952L17.6123 8.14775C17.7106 8.17805 17.7117 8.31653 17.6139 8.34816L16.9065 8.57702C16.763 8.62353 16.6511 8.7373 16.6067 8.88163L16.3885 9.59186C16.3585 9.69021 16.2197 9.69127 16.1881 9.59346Z"
          fill="#FAFAFA"
        />
        <path
          d="M3.81848 11.8573C4.03245 11.4381 4.45561 11.1223 4.89525 10.9227C5.33941 10.7252 5.8277 10.604 6.30721 10.5647C7.27527 10.4772 8.21834 10.6391 9.07742 10.919C9.51998 11.0508 9.91603 11.234 10.3251 11.419C10.5239 11.5146 10.7108 11.6231 10.9032 11.7278L11.4348 12.0359C12.0185 12.3937 12.5844 12.7105 13.116 12.9566C13.649 13.2006 14.1306 13.3657 14.5846 13.45C15.0386 13.5353 15.5 13.5342 16.0675 13.404C16.6305 13.2767 17.2639 13.0021 17.926 12.6499C18.5921 12.2974 19.2753 11.8652 20.0546 11.4429C19.9765 12.3256 19.7266 13.1533 19.3364 13.9526C18.9366 14.7423 18.3806 15.5126 17.5699 16.1364C16.7746 16.7653 15.6824 17.2037 14.5705 17.2696C13.4581 17.3448 12.4 17.0997 11.4997 16.7311C10.596 16.3571 9.81503 15.8656 9.12287 15.3231C8.93176 15.1732 8.82916 15.0881 8.68802 14.9688L8.29383 14.6235C8.02829 14.4156 7.77099 14.1671 7.50811 13.9611C6.98368 13.5228 6.46483 13.0837 5.89601 12.7031C5.60921 12.5096 5.31336 12.3301 4.97792 12.1712C4.81126 12.0944 4.63423 12.0229 4.44418 11.9665C4.24962 11.903 4.05186 11.8652 3.81848 11.8573Z"
          fill="#FF4F0A"
        />
        <path
          d="M3.81848 11.8572C3.92773 10.9489 4.35115 10.097 5.02975 9.37193C5.70489 8.65373 6.75961 8.10006 7.92994 8.0267C8.50753 7.98816 9.0939 8.05248 9.63295 8.20186C10.1696 8.35071 10.6725 8.56761 11.1257 8.82305C11.3522 8.95143 11.564 9.09178 11.7751 9.23345L12.3375 9.65927L13.2155 10.352C13.7853 10.8057 14.3292 11.2254 14.8318 11.572C15.3392 11.9191 15.7714 12.1727 16.1842 12.3213C16.5933 12.4834 17.11 12.5249 17.7931 12.3532C18.1323 12.275 18.4861 12.1323 18.8635 11.9776C19.2389 11.8192 19.6285 11.6302 20.0546 11.4428C20.0033 11.8995 19.9105 12.3543 19.7343 12.7793C19.565 13.2101 19.342 13.6317 19.0302 14.0248C18.8707 14.2162 18.6998 14.4087 18.5004 14.5862C18.3011 14.7595 18.0802 14.9241 17.8362 15.0684C17.3495 15.3504 16.7722 15.5564 16.18 15.6298C15.5878 15.7042 14.9932 15.667 14.4517 15.5521C13.9073 15.4405 13.4114 15.2606 12.956 15.0527C12.0486 14.6306 11.2894 14.1001 10.6183 13.5384C10.2812 13.258 9.96521 12.9651 9.66591 12.6676L9.31239 12.3128C9.2058 12.2099 9.09815 12.1065 8.99156 12.0119C8.56202 11.6321 8.16332 11.3418 7.72421 11.1608C7.28829 10.9713 6.73037 10.8934 6.04592 11.0215C5.36413 11.1483 4.61616 11.4431 3.81848 11.8572Z"
          fill="#FAFAFA"
        />
        <path
          d="M7.41537 16.5409C7.41537 16.8096 7.19741 17.0276 6.92868 17.0276C6.65995 17.0276 6.44226 16.8096 6.44226 16.5409C6.44226 16.2722 6.65995 16.0542 6.92868 16.0542C7.19741 16.0542 7.41537 16.2722 7.41537 16.5409Z"
          fill="#FAFAFA"
        />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 20 20" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.0001 3.33337C13.682 3.33337 16.6667 6.31806 16.6667 9.99994C16.6667 13.6818 13.682 16.6665 10.0001 16.6665C6.31826 16.6665 3.33337 13.6818 3.33337 9.99994C3.33337 6.31806 6.31826 3.33337 10.0001 3.33337ZM6.98517 7.0569C6.11825 7.11124 5.33699 7.52137 4.83688 8.05337C4.33422 8.59049 4.02057 9.22153 3.93964 9.89431C4.09811 9.89972 4.23441 9.92367 4.36703 9.96387L4.46288 9.99379C4.58121 10.0322 4.69267 10.0781 4.79849 10.1268C5.04696 10.2446 5.26611 10.3775 5.47855 10.5208C5.80961 10.7424 6.11782 10.9906 6.42314 11.2443L6.50635 11.3137L6.6727 11.4527C6.83961 11.5835 7.00348 11.7374 7.17076 11.8757L7.25472 11.9434L7.54671 12.1991L7.61749 12.2587C7.65174 12.2873 7.68519 12.3149 7.72208 12.3448L7.791 12.4001L7.86882 12.4616C8.38153 12.8634 8.96 13.2275 9.62943 13.5045C10.2963 13.7776 11.0801 13.9591 11.9041 13.9034C12.7106 13.8556 13.503 13.5433 14.0888 13.093L14.1755 13.0253C14.7492 12.5703 15.1465 12.0151 15.4344 11.4464C15.7234 10.8544 15.9085 10.2412 15.9664 9.58736C15.6508 9.72616 15.3621 9.86615 15.0841 9.9835L14.9654 10.032C14.7495 10.1194 14.5439 10.1979 14.3452 10.2486L14.2469 10.2725C13.7628 10.387 13.3936 10.3547 13.0995 10.2381C12.7937 10.128 12.4735 9.94019 12.0977 9.68304C11.8153 9.48834 11.5154 9.26251 11.2029 9.01815L11.0577 8.90411L10.9004 8.77931L10.25 8.26621L9.83341 7.95079C9.67708 7.84584 9.52016 7.74189 9.3524 7.64679C9.0167 7.45757 8.64418 7.29691 8.24666 7.18665C7.84736 7.076 7.41302 7.02835 6.98517 7.0569ZM6.2435 13.0032C6.04444 13.0032 5.88319 13.1646 5.88319 13.3637C5.88319 13.5627 6.04444 13.7242 6.2435 13.7242C6.44256 13.7242 6.60401 13.5627 6.60401 13.3637C6.60401 13.1646 6.44256 13.0032 6.2435 13.0032ZM13.236 6.23907C13.2137 6.1699 13.119 6.16748 13.0911 6.23059L13.0876 6.24005L12.9259 6.76634C12.895 6.86697 12.8197 6.94736 12.7224 6.9852L12.7038 6.99179L12.1799 7.16131C12.1109 7.18368 12.1083 7.27834 12.1716 7.30625L12.1811 7.30977L12.7074 7.47161C12.808 7.50237 12.8884 7.57761 12.9262 7.67516L12.9328 7.69371L13.1024 8.21744C13.1247 8.2866 13.2194 8.28903 13.2473 8.22575L13.2508 8.21626L13.4125 7.69016C13.4434 7.58954 13.5187 7.50897 13.616 7.47112L13.6346 7.46452L14.1585 7.295C14.2276 7.27263 14.2301 7.17815 14.1668 7.15009L14.1573 7.14654L13.631 6.98489C13.5304 6.95395 13.45 6.8787 13.4122 6.78131L13.4056 6.7628L13.236 6.23907Z"
          fill="currentColor"
        />
      </svg>
    );
  }
};

export const HistoryIcon = ({ width = "24px", height = "24px", ...props }) => {
  return (
    <svg viewBox="0 0 20 20" width={width} height={height} {...props} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.625 3.25L0 0.625V7.5H6.875L4.39453 5.01953C5.76953 3.47266 7.76953 2.5 10 2.5C14.1406 2.5 17.5 5.85938 17.5 10C17.5 14.1406 14.1406 17.5 10 17.5C8.40625 17.5 6.92969 17.0039 5.71484 16.1562L4.28516 18.207C5.90625 19.3359 7.87891 20 10 20C15.5234 20 20 15.5234 20 10C20 4.47656 15.5234 0 10 0C7.07812 0 4.44922 1.25391 2.625 3.25ZM10.9375 5H9.0625V5.9375V10V10.3867L9.33594 10.6602L11.8359 13.1602L12.5 13.8242L13.8242 12.5L13.1602 11.8359L10.9336 9.60938V5.9375V5H10.9375Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const Swap = ({ width = "20px", height = "20px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.7563 14.2723L15.2829 11.7457L15.9999 11.0319L14.5692 9.60117L13.0532 11.1172L13.0532 0.925293L11.0319 0.925293L11.0319 11.1172L9.51587 9.60117L8.08515 11.0319L12.0425 14.9893L12.7563 14.2755V14.2723ZM3.95724 1.01057L-0.00012207 4.96793L1.43059 6.39865L2.94658 4.88266L2.94658 15.0745H4.9679L4.9679 4.88266L6.48389 6.39865L7.9146 4.96793L3.95724 1.01057Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const ArrowIcon = ({ width = "24px", height = "24px", direction = "right", ...props }) => {
  let rotate = 0;
  switch (direction) {
    case "bottom":
      rotate = 90;
      break;
    case "left":
      rotate = 180;
      break;
    case "top":
      rotate = 270;
      break;
    default:
      rotate = 0;
  }

  return (
    <Box transform={`rotate(${rotate}deg)`} {...props}>
      <svg
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        viewBox="0 0 512 376.83"
      >
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M355.12 372.7a12.026 12.026 0 0 1-17.09 1.06c-5-4.47-5.46-12.2-1.04-17.25l136.05-155.82H12.15c-6.71 0-12.15-5.5-12.15-12.28 0-6.77 5.44-12.27 12.15-12.27h460.9L336.99 20.32c-4.42-5.05-3.96-12.78 1.04-17.25 5.01-4.47 12.66-4 17.09 1.05l153.67 176c4.17 4.55 4.33 11.64.17 16.39L355.12 372.7z"
        />
      </svg>
    </Box>
  );
};

export const CopyAddressIcon = ({ width = "24px", height = "24px", ...props }) => {
  return (
    <svg fill="none" width={width} height={height} {...props} viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.04236 12.3027H4.18396V13.3008C4.18396 14.8525 5.03845 15.7002 6.59705 15.7002H13.6244C15.183 15.7002 16.0375 14.8525 16.0375 13.3008V6.24609C16.0375 4.69434 15.183 3.84668 13.6244 3.84668H12.4828V2.8418C12.4828 1.29688 11.6283 0.442383 10.0697 0.442383H3.04236C1.48376 0.442383 0.629272 1.29004 0.629272 2.8418V9.90332C0.629272 11.4551 1.48376 12.3027 3.04236 12.3027ZM3.23376 10.5391C2.68689 10.5391 2.39294 10.2656 2.39294 9.68457V3.06055C2.39294 2.47949 2.68689 2.21289 3.23376 2.21289H9.8783C10.4252 2.21289 10.7191 2.47949 10.7191 3.06055V3.84668H6.59705C5.03845 3.84668 4.18396 4.69434 4.18396 6.24609V10.5391H3.23376ZM6.78845 13.9365C6.24158 13.9365 5.94763 13.6699 5.94763 13.0889V6.45801C5.94763 5.87695 6.24158 5.61035 6.78845 5.61035H13.433C13.9799 5.61035 14.2738 5.87695 14.2738 6.45801V13.0889C14.2738 13.6699 13.9799 13.9365 13.433 13.9365H6.78845Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};
export const CopiedAddressIcon = ({ width = "24px", height = "24px", ...props }) => {
  return (
    <svg fill="none" width={width} height={height} {...props} viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.94568 12.2646C5.41052 12.2646 5.77283 12.0869 6.01892 11.7109L12.39 1.96973C12.5677 1.69629 12.6429 1.44336 12.6429 1.2041C12.6429 0.561523 12.1644 0.0966797 11.5082 0.0966797C11.057 0.0966797 10.7767 0.260742 10.5033 0.691406L4.9115 9.50977L2.07458 5.98926C1.82166 5.68848 1.54822 5.55176 1.16541 5.55176C0.502319 5.55176 0.0238037 6.02344 0.0238037 6.66602C0.0238037 6.95312 0.112671 7.20605 0.358765 7.48633L3.88611 11.7588C4.18005 12.1074 4.50818 12.2646 4.94568 12.2646Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const DisconnectIcon = ({ width = "24px", height = "24px", ...props }) => {
  return (
    <svg fill="none" width={width} height={height} {...props} viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.67834 15.5908H9.99963C11.5514 15.5908 12.399 14.7432 12.399 13.1777V10.2656H10.6354V12.9863C10.6354 13.5332 10.3688 13.8271 9.78772 13.8271H2.89026C2.3092 13.8271 2.0426 13.5332 2.0426 12.9863V3.15625C2.0426 2.60254 2.3092 2.30859 2.89026 2.30859H9.78772C10.3688 2.30859 10.6354 2.60254 10.6354 3.15625V5.89746H12.399V2.95801C12.399 1.39941 11.5514 0.544922 9.99963 0.544922H2.67834C1.12659 0.544922 0.278931 1.39941 0.278931 2.95801V13.1777C0.278931 14.7432 1.12659 15.5908 2.67834 15.5908ZM7.43616 8.85059H14.0875L15.0924 8.78906L14.566 9.14453L13.6842 9.96484C13.5406 10.1016 13.4586 10.2861 13.4586 10.4844C13.4586 10.8398 13.7321 11.168 14.1217 11.168C14.3199 11.168 14.4635 11.0928 14.6002 10.9561L16.7809 8.68652C16.986 8.48145 17.0543 8.27637 17.0543 8.06445C17.0543 7.85254 16.986 7.64746 16.7809 7.43555L14.6002 5.17285C14.4635 5.03613 14.3199 4.9541 14.1217 4.9541C13.7321 4.9541 13.4586 5.27539 13.4586 5.6377C13.4586 5.83594 13.5406 6.02734 13.6842 6.15723L14.566 6.98438L15.0924 7.33984L14.0875 7.27148H7.43616C7.01917 7.27148 6.65686 7.62012 6.65686 8.06445C6.65686 8.50195 7.01917 8.85059 7.43616 8.85059Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const AlertIcon = ({ width = "36px", height = "36px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 0L0 18L18 36L36 18L18 0ZM19.6875 9V10.6875V18.5625V20.25H16.3125V18.5625V10.6875V9H19.6875ZM16.3125 25.875V22.5H19.6875V25.875H16.3125Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const ClockIcon = ({ width = "20px", height = "20px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.4163 9.99992C15.4163 11.4365 14.8457 12.8143 13.8298 13.8301C12.814 14.8459 11.4363 15.4166 9.99967 15.4166C8.56309 15.4166 7.18533 14.8459 6.16951 13.8301C5.15369 12.8143 4.58301 11.4365 4.58301 9.99992C4.58301 8.56333 5.15369 7.18558 6.16951 6.16976C7.18533 5.15393 8.56309 4.58325 9.99967 4.58325C11.4363 4.58325 12.814 5.15393 13.8298 6.16976C14.8457 7.18558 15.4163 8.56333 15.4163 9.99992ZM3.33301 9.99992C3.33301 11.768 4.03539 13.4637 5.28563 14.714C6.53587 15.9642 8.23156 16.6666 9.99967 16.6666C11.7678 16.6666 13.4635 15.9642 14.7137 14.714C15.964 13.4637 16.6663 11.768 16.6663 9.99992C16.6663 8.23181 15.964 6.53612 14.7137 5.28587C13.4635 4.03563 11.7678 3.33325 9.99967 3.33325C8.23156 3.33325 6.53587 4.03563 5.28563 5.28587C4.03539 6.53612 3.33301 8.23181 3.33301 9.99992ZM9.37467 6.45825V9.99992C9.37467 10.2083 9.47884 10.4036 9.65332 10.5208L12.1533 12.1874C12.4398 12.3801 12.8278 12.302 13.0205 12.0129C13.2132 11.7239 13.1351 11.3385 12.846 11.1458L10.6247 9.66658V6.45825C10.6247 6.1119 10.346 5.83325 9.99967 5.83325C9.65332 5.83325 9.37467 6.1119 9.37467 6.45825Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const DiscordIcon = ({ ...props }) => {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.9351 6.59794C17.9303 6.58875 17.9225 6.58155 17.9129 6.57763C16.8067 6.07006 15.6392 5.70813 14.4399 5.50089C14.429 5.49886 14.4177 5.50032 14.4077 5.50506C14.3977 5.5098 14.3894 5.51758 14.3841 5.52729C14.2251 5.81582 14.0808 6.11218 13.9517 6.41524C12.6589 6.21899 11.3438 6.21899 10.0509 6.41524C9.92099 6.11141 9.77437 5.81497 9.61176 5.52729C9.60618 5.51779 9.59787 5.5102 9.58791 5.50549C9.57795 5.50078 9.56681 5.49917 9.55593 5.50089C8.35643 5.7077 7.18894 6.06966 6.08283 6.57766C6.07336 6.58167 6.06537 6.58852 6.05996 6.59727C3.84795 9.90062 3.242 13.1227 3.53926 16.305C3.5401 16.3128 3.54249 16.3203 3.54631 16.3272C3.55012 16.334 3.55527 16.34 3.56146 16.3449C4.84949 17.2986 6.29017 18.0265 7.82202 18.4977C7.83281 18.5009 7.84432 18.5008 7.85503 18.4973C7.86573 18.4938 7.8751 18.4871 7.88188 18.4781C8.21089 18.0304 8.50241 17.5564 8.75349 17.0608C8.75694 17.054 8.75891 17.0465 8.75927 17.0389C8.75963 17.0313 8.75837 17.0237 8.75558 17.0166C8.75279 17.0095 8.74852 17.0031 8.74306 16.9977C8.73761 16.9924 8.73108 16.9883 8.72392 16.9857C8.26421 16.8098 7.81915 16.5977 7.39293 16.3515C7.38519 16.347 7.37868 16.3406 7.374 16.3329C7.36931 16.3253 7.36658 16.3166 7.36605 16.3076C7.36552 16.2986 7.3672 16.2897 7.37095 16.2815C7.37471 16.2734 7.38041 16.2663 7.38756 16.2608C7.47699 16.1938 7.56649 16.1241 7.65189 16.0537C7.65947 16.0475 7.66865 16.0435 7.67839 16.0422C7.68814 16.0408 7.69805 16.0423 7.70702 16.0463C10.4994 17.3207 13.5225 17.3207 16.2818 16.0463C16.2908 16.042 16.3008 16.0404 16.3107 16.0416C16.3206 16.0428 16.3299 16.0468 16.3377 16.0531C16.4231 16.1235 16.5125 16.1938 16.6026 16.2608C16.6098 16.2662 16.6156 16.2733 16.6194 16.2814C16.6232 16.2895 16.625 16.2985 16.6245 16.3074C16.624 16.3164 16.6214 16.3251 16.6167 16.3328C16.6121 16.3405 16.6056 16.3469 16.5979 16.3515C16.1727 16.5998 15.7272 16.8117 15.2663 16.985C15.2592 16.9877 15.2526 16.9919 15.2472 16.9973C15.2418 17.0027 15.2376 17.0092 15.2348 17.0164C15.2321 17.0235 15.2309 17.0312 15.2313 17.0388C15.2318 17.0465 15.2338 17.054 15.2373 17.0608C15.4926 17.5536 15.7837 18.027 16.1082 18.4773C16.1148 18.4865 16.1241 18.4934 16.1349 18.4971C16.1456 18.5007 16.1573 18.5009 16.1681 18.4976C17.7027 18.028 19.1459 17.3 20.4355 16.3449C20.4418 16.3403 20.447 16.3344 20.4509 16.3276C20.4547 16.3209 20.457 16.3134 20.4577 16.3056C20.8136 12.6266 19.8619 9.43093 17.9351 6.59794ZM9.17051 14.3673C8.3298 14.3673 7.63709 13.5958 7.63709 12.6483C7.63709 11.7008 8.31637 10.9293 9.17051 10.9293C10.0313 10.9293 10.7173 11.7075 10.7039 12.6483C10.7039 13.5958 10.0246 14.3673 9.17051 14.3673ZM14.84 14.3673C13.9994 14.3673 13.3066 13.5958 13.3066 12.6483C13.3066 11.7008 13.9859 10.9293 14.84 10.9293C15.7009 10.9293 16.3869 11.7075 16.3735 12.6483C16.3735 13.5958 15.7009 14.3673 14.84 14.3673Z" />
    </svg>
  );
};

export const GithubIcon = ({ ...props }) => {
  return (
    <svg width="24" height="24" {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.091 14.5746C10.091 15.3148 9.705 16.5261 8.79125 16.5261C7.8775 16.5261 7.49146 15.3148 7.49146 14.5746C7.49146 13.8344 7.8775 12.6232 8.79125 12.6232C9.705 12.6232 10.091 13.8344 10.091 14.5746ZM20.5 12.7861C20.5 13.9159 20.3867 15.113 19.8802 16.1507C18.5379 18.8636 14.8475 18.7998 12.2054 18.7998C9.52083 18.7998 5.61083 18.8955 4.21542 16.1507C3.69833 15.1236 3.5 13.9159 3.5 12.7861C3.5 11.3021 3.99229 9.89962 4.96979 8.76275C4.78562 8.20316 4.69708 7.61525 4.69708 7.03441C4.69708 6.27295 4.87063 5.89045 5.21417 5.19983C6.81854 5.19983 7.84562 5.51858 9.0675 6.47483C10.0946 6.23045 11.15 6.12066 12.209 6.12066C13.1652 6.12066 14.1285 6.22337 15.0565 6.4465C16.2606 5.50087 17.2877 5.19983 18.8744 5.19983C19.2215 5.89045 19.3915 6.27295 19.3915 7.03441C19.3915 7.61525 19.2994 8.19254 19.1187 8.7415C20.0927 9.889 20.5 11.3021 20.5 12.7861ZM18.2227 14.5746C18.2227 13.0198 17.2771 11.6492 15.6196 11.6492C14.9502 11.6492 14.3092 11.7696 13.6363 11.8617C13.1085 11.9432 12.5808 11.975 12.039 11.975C11.5006 11.975 10.9729 11.9432 10.4417 11.8617C9.77938 11.7696 9.13125 11.6492 8.45833 11.6492C6.80083 11.6492 5.85521 13.0198 5.85521 14.5746C5.85521 17.6842 8.70271 18.1623 11.1819 18.1623H12.889C15.3787 18.1623 18.2227 17.6877 18.2227 14.5746ZM15.2973 12.6232C14.3835 12.6232 13.9975 13.8344 13.9975 14.5746C13.9975 15.3148 14.3835 16.5261 15.2973 16.5261C16.211 16.5261 16.5971 15.3148 16.5971 14.5746C16.5971 13.8344 16.211 12.6232 15.2973 12.6232Z" />
    </svg>
  );
};

export const InformationIcon = ({ width = "16px", height = "16px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6.75 10.5H7.5V8.5H6.75C6.33437 8.5 6 8.16562 6 7.75C6 7.33437 6.33437 7 6.75 7H8.25C8.66562 7 9 7.33437 9 7.75V10.5H9.25C9.66562 10.5 10 10.8344 10 11.25C10 11.6656 9.66562 12 9.25 12H6.75C6.33437 12 6 11.6656 6 11.25C6 10.8344 6.33437 10.5 6.75 10.5ZM8 4C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5C9 5.26522 8.89464 5.51957 8.70711 5.70711C8.51957 5.89464 8.26522 6 8 6C7.73478 6 7.48043 5.89464 7.29289 5.70711C7.10536 5.51957 7 5.26522 7 5C7 4.73478 7.10536 4.48043 7.29289 4.29289C7.48043 4.10536 7.73478 4 8 4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const QuestionIcon = ({ width = "18px", height = "18px", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      {...props}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm23.744 191.488c-52.096 0-92.928 14.784-123.2 44.352-30.976 29.568-45.76 70.4-45.76 122.496h80.256c0-29.568 5.632-52.8 17.6-68.992 13.376-19.712 35.2-28.864 66.176-28.864 23.936 0 42.944 6.336 56.32 19.712 12.672 13.376 19.712 31.68 19.712 54.912 0 17.6-6.336 34.496-19.008 49.984l-8.448 9.856c-45.76 40.832-73.216 70.4-82.368 89.408-9.856 19.008-14.08 42.24-14.08 68.992v9.856h80.96v-9.856c0-16.896 3.52-31.68 10.56-45.76 6.336-12.672 15.488-24.64 28.16-35.2 33.792-29.568 54.208-48.576 60.544-55.616 16.896-22.528 26.048-51.392 26.048-86.592 0-42.944-14.08-76.736-42.24-101.376-28.16-25.344-65.472-37.312-111.232-37.312zm-12.672 406.208a54.272 54.272 0 0 0-38.72 14.784 49.408 49.408 0 0 0-15.488 38.016c0 15.488 4.928 28.16 15.488 38.016A54.848 54.848 0 0 0 523.072 768c15.488 0 28.16-4.928 38.72-14.784a51.52 51.52 0 0 0 16.192-38.72 51.968 51.968 0 0 0-15.488-38.016 55.936 55.936 0 0 0-39.424-14.784z"
        fill="currentColor"
      />
    </svg>
  );
};
export const BridgeIcon = ({ width = "24px", height = "24px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5379 0.00958489C18.1052 0.227659 22.859 4.40857 23.8268 9.96043C23.9936 10.9175 24.0409 11.8856 23.9644 12.8621C23.9283 13.3468 23.7406 13.4316 23.3068 13.3371C22.752 13.2163 22.2055 13.0635 21.7092 12.7982C18.5098 11.0883 15.8694 8.66727 14.9072 5.06974C14.8911 5.01172 14.8762 4.95313 14.8613 4.89471C14.853 4.86228 14.8447 4.82969 14.8363 4.79749C14.8012 4.66811 14.7913 4.5203 14.7814 4.37275C14.76 4.05302 14.7387 3.73447 14.4609 3.60711C14.0611 3.42365 13.5856 3.47173 13.1236 3.51844C13.012 3.52973 12.9012 3.54094 12.7924 3.54877C12.481 3.57091 12.5002 3.81393 12.517 4.02532C12.5202 4.06594 12.5234 4.10539 12.524 4.14188C12.5429 5.12353 12.5682 6.10468 12.5934 7.08564C12.6108 7.76339 12.6283 8.44104 12.6436 9.11869C12.6564 9.68522 12.667 10.2519 12.6775 10.8186C12.6979 11.911 12.7182 13.0036 12.7548 14.0955C12.7715 14.5886 12.613 14.7956 12.1166 14.7303C11.9623 14.7094 11.8024 14.7122 11.6467 14.7261C11.2017 14.7678 11.0557 14.5817 11.046 14.1316C11.0049 12.1114 10.9462 10.0912 10.8874 8.07099C10.8706 7.49375 10.8538 6.91652 10.8374 6.33929C10.8288 6.03517 10.8187 5.73105 10.8085 5.42694C10.7926 4.94904 10.7767 4.47115 10.7665 3.99326C10.761 3.68907 10.6428 3.52377 10.3244 3.52933C10.2197 3.53118 10.1157 3.52933 10.0115 3.52748C9.9592 3.52655 9.90689 3.52563 9.85441 3.52516C8.90843 3.51697 8.90729 3.52086 8.64457 4.41994L8.63084 4.46691C7.44481 8.51725 5.18537 11.4217 1.39646 13.251C1.01131 13.4371 0.615043 13.626 0.0936341 13.6635C-0.0648743 12.1245 -0.0426268 10.641 0.320274 9.17287C1.69818 3.58906 6.77462 -0.216823 12.5379 0.00958489Z"
        fill="currentColor"
      />
      <path
        d="M8.61421 17.0943C12.8049 16.3373 16.979 17.3013 20.7053 19.1848C21.2949 19.482 21.3116 19.5862 20.8638 20.0807C19.1036 22.0267 16.6439 23.2949 14.0744 23.7657C9.7488 24.5575 6.29915 23.3365 3.21936 20.1863C3.15402 20.1182 3.09145 20.0487 3.03305 19.9751C3.00924 19.9443 2.98934 19.9101 2.95492 19.851C2.93507 19.8168 2.91037 19.7744 2.87732 19.7195C4.71268 18.3528 6.42568 17.4902 8.61421 17.0943Z"
        fill="currentColor"
      />
      <path
        d="M3.8936 16.3888C5.42307 15.7471 6.72172 15.2081 8.38745 14.9748C8.77399 14.9206 8.92416 14.6928 8.92555 14.3345C8.92694 12.8111 8.92694 11.2891 8.92694 9.76981V9.76045C8.92694 9.66877 8.80458 9.63822 8.76148 9.71878C8.09408 10.9758 5.83603 13.4205 4.11746 14.2914C4.10495 14.2969 4.09382 14.3039 4.0827 14.3122C3.03988 15.079 3.04127 15.0845 3.59327 16.3055C3.59744 16.3138 3.60161 16.3221 3.60857 16.3291C3.67392 16.4124 3.79488 16.4291 3.8936 16.3888Z"
        fill="currentColor"
      />
      <path
        d="M20.3925 16.3888C18.8616 15.7471 17.0068 15.2082 15.3425 14.9748C14.9559 14.9192 14.8058 14.6914 14.8058 14.3345C14.8037 13.1892 14.8039 12.0448 14.8042 10.9017C14.8043 10.5211 14.8044 10.1407 14.8044 9.76047C14.8044 9.66741 14.9267 9.63685 14.9698 9.7188C15.6372 10.9772 18.4515 13.4205 20.17 14.2914C20.1825 14.297 20.1937 14.3039 20.2048 14.3122C21.2476 15.0776 21.2462 15.0845 20.6942 16.3055C20.69 16.3138 20.6845 16.3221 20.6789 16.3291C20.6122 16.4138 20.4912 16.4305 20.3925 16.3888Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const DojoIcon = ({ width = "221px", height = "40px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 221 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.5379 8.00958C26.1052 8.22766 30.859 12.4086 31.8268 17.9604C31.9936 18.9175 32.0409 19.8856 31.9644 20.8621C31.9283 21.3468 31.7406 21.4316 31.3068 21.3371C30.752 21.2163 30.2055 21.0635 29.7092 20.7982C26.5098 19.0883 23.8694 16.6673 22.9072 13.0697C22.8911 13.0117 22.8762 12.9531 22.8613 12.8947C22.853 12.8623 22.8447 12.8297 22.8363 12.7975C22.8012 12.6681 22.7913 12.5203 22.7814 12.3728C22.76 12.053 22.7387 11.7345 22.4609 11.6071C22.0611 11.4237 21.5856 11.4717 21.1236 11.5184C21.012 11.5297 20.9012 11.5409 20.7924 11.5488C20.481 11.5709 20.5002 11.8139 20.517 12.0253C20.5202 12.0659 20.5234 12.1054 20.524 12.1419C20.5429 13.1235 20.5682 14.1047 20.5934 15.0856C20.6108 15.7634 20.6283 16.441 20.6436 17.1187C20.6564 17.6852 20.667 18.2519 20.6775 18.8186C20.6979 19.911 20.7182 21.0036 20.7548 22.0955C20.7715 22.5886 20.613 22.7956 20.1166 22.7303C19.9623 22.7094 19.8024 22.7122 19.6467 22.7261C19.2017 22.7678 19.0557 22.5817 19.046 22.1316C19.0049 20.1114 18.9462 18.0912 18.8874 16.071C18.8706 15.4938 18.8538 14.9165 18.8374 14.3393C18.8288 14.0352 18.8187 13.7311 18.8085 13.4269C18.7926 12.949 18.7767 12.4712 18.7665 11.9933C18.761 11.6891 18.6428 11.5238 18.3244 11.5293C18.2197 11.5312 18.1157 11.5293 18.0115 11.5275C17.9592 11.5266 17.9069 11.5256 17.8544 11.5252C16.9084 11.517 16.9073 11.5209 16.6446 12.4199L16.6308 12.4669C15.4448 16.5173 13.1854 19.4217 9.39646 21.251C9.01131 21.4371 8.61504 21.626 8.09363 21.6635C7.93513 20.1245 7.95737 18.641 8.32027 17.1729C9.69818 11.5891 14.7746 7.78318 20.5379 8.00958Z"
        fill="currentColor"
      />
      <path
        d="M16.6142 25.0943C20.8049 24.3373 24.979 25.3013 28.7053 27.1848C29.2949 27.482 29.3116 27.5862 28.8638 28.0807C27.1036 30.0267 24.6439 31.2949 22.0744 31.7657C17.7488 32.5575 14.2992 31.3365 11.2194 28.1863C11.154 28.1182 11.0914 28.0487 11.033 27.9751C11.0092 27.9443 10.9893 27.9101 10.9549 27.851C10.9351 27.8168 10.9104 27.7744 10.8773 27.7195C12.7127 26.3528 14.4257 25.4902 16.6142 25.0943Z"
        fill="currentColor"
      />
      <path
        d="M11.8936 24.3888C13.4231 23.7471 14.7217 23.2081 16.3875 22.9748C16.774 22.9206 16.9242 22.6928 16.9255 22.3345C16.9269 20.8111 16.9269 19.2891 16.9269 17.7698V17.7604C16.9269 17.6688 16.8046 17.6382 16.7615 17.7188C16.0941 18.9758 13.836 21.4205 12.1175 22.2914C12.1049 22.2969 12.0938 22.3039 12.0827 22.3122C11.0399 23.079 11.0413 23.0845 11.5933 24.3055C11.5974 24.3138 11.6016 24.3221 11.6086 24.3291C11.6739 24.4124 11.7949 24.4291 11.8936 24.3888Z"
        fill="currentColor"
      />
      <path
        d="M28.3925 24.3888C26.8616 23.7471 25.0068 23.2082 23.3425 22.9748C22.9559 22.9192 22.8058 22.6914 22.8058 22.3345C22.8037 21.1892 22.8039 20.0448 22.8042 18.9017C22.8043 18.5211 22.8044 18.1407 22.8044 17.7605C22.8044 17.6674 22.9267 17.6369 22.9698 17.7188C23.6372 18.9772 26.4515 21.4205 28.17 22.2914C28.1825 22.297 28.1937 22.3039 28.2048 22.3122C29.2476 23.0776 29.2462 23.0845 28.6942 24.3055C28.69 24.3138 28.6845 24.3221 28.6789 24.3291C28.6122 24.4138 28.4912 24.4305 28.3925 24.3888Z"
        fill="currentColor"
      />
      <path
        d="M57.3333 26.6667H47.3333C47 26.6667 46.6667 26.6667 46.3333 26.3333L44.3333 24.3333C44 24 44 23.6667 44 23.3333V18C44 17.3333 44.3333 16.6667 45 16.3333L51.3333 13.6667C52 13.3333 52.6667 13.3333 52.6667 13.3333H54.3333C54.3333 13.3333 54.6667 13.3333 54.6667 13V8H57.3333V26.6667ZM54.3333 24C54.3333 24 54.6667 24 54.6667 23.6667V16.3333C54.6667 16.3333 54.6667 16 54.3333 16H47C46.6667 16 46.6667 16.3333 46.6667 16.3333V23.6667C46.6667 24 47 24 47 24H54.3333Z"
        fill="currentColor"
      />
      <path
        d="M60.4079 23.3333V16.6667C60.4079 16.3333 60.4079 16 60.7412 15.6667L62.7412 13.6667C63.0745 13.3333 63.4079 13.3333 63.7412 13.3333H70.4079C70.7412 13.3333 71.0745 13.3333 71.4079 13.6667L73.4079 15.6667C73.7412 16 73.7412 16.3333 73.7412 16.6667V23.3333C73.7412 23.6667 73.7412 24 73.4079 24.3333L71.4079 26.3333C71.0745 26.6667 70.7412 26.6667 70.4079 26.6667H63.7412C63.4079 26.6667 63.0745 26.6667 62.7412 26.3333L60.7412 24.3333C60.4079 24 60.4079 23.6667 60.4079 23.3333ZM63.0745 23.6667C63.0745 24 63.4079 24 63.4079 24H70.7412C70.7412 24 71.0745 24 71.0745 23.6667V16.3333C71.0745 16 70.7412 16 70.7412 16H63.4079C63.4079 16 63.0745 16 63.0745 16.3333V23.6667Z"
        fill="currentColor"
      />
      <path
        d="M87.4824 8H90.1491V10.6667H87.4824V8ZM89.8158 15.6667C90.1491 16 90.1491 16.3333 90.1491 16.6667V27.3333C90.1491 28 89.8158 28.6667 89.1491 29L82.8158 31.6667C82.1491 32 81.4824 32 81.4824 32H76.8158V29.3333H87.1491C87.4824 29.3333 87.4824 29 87.4824 29V16.3333C87.4824 16.3333 87.4824 16 87.1491 16H82.1491V13.3333H86.8158C87.2324 13.3333 87.4824 13.3333 87.8158 13.6667L89.8158 15.6667Z"
        fill="currentColor"
      />
      <path
        d="M93.2236 23.3333V16.6667C93.2236 16.3333 93.2236 16 93.557 15.6667L95.557 13.6667C95.8903 13.3333 96.2236 13.3333 96.557 13.3333H103.224C103.557 13.3333 103.89 13.3333 104.224 13.6667L106.224 15.6667C106.557 16 106.557 16.3333 106.557 16.6667V23.3333C106.557 23.6667 106.557 24 106.224 24.3333L104.224 26.3333C103.89 26.6667 103.557 26.6667 103.224 26.6667H96.557C96.2236 26.6667 95.8903 26.6667 95.557 26.3333L93.557 24.3333C93.2236 24 93.2236 23.6667 93.2236 23.3333ZM95.8903 23.6667C95.8903 24 96.2236 24 96.2236 24H103.557C103.557 24 103.89 24 103.89 23.6667V16.3333C103.89 16 103.557 16 103.557 16H96.2236C96.2236 16 95.8903 16 95.8903 16.3333V23.6667Z"
        fill="currentColor"
      />
      <path
        d="M116.721 26.6667V8H119.388V13C119.388 13.3333 119.721 13.3333 119.721 13.3333H121.388C121.388 13.3333 122.055 13.3333 122.721 13.6667L129.055 16.3333C129.721 16.6667 130.055 17.3333 130.055 18V23.3333C130.055 23.6667 130.055 24 129.721 24.3333L127.721 26.3333C127.388 26.6667 127.055 26.6667 126.721 26.6667H116.721ZM119.721 24H127.055C127.055 24 127.388 24 127.388 23.6667V16.3333C127.388 16.3333 127.388 16 127.055 16H119.721C119.388 16 119.388 16.3333 119.388 16.3333V23.6667C119.388 24 119.721 24 119.721 24Z"
        fill="currentColor"
      />
      <path
        d="M133.129 26.6667V16.6667C133.129 16.3333 133.129 16 133.463 15.6667L135.463 13.6667C135.796 13.3333 136.129 13.3333 136.463 13.3333H146.463V16H136.129C136.129 16 135.796 16 135.796 16.3333V26.6667H133.129Z"
        fill="currentColor"
      />
      <path
        d="M154.87 8H157.537V10.6667H154.87V8ZM162.87 24V26.6667H149.537V24H154.537C154.537 24 154.87 24 154.87 23.6667V16.3333C154.87 16 154.537 16 154.537 16H149.537V13.3333H154.204C154.537 13.3333 154.87 13.3333 155.204 13.6667L157.204 15.6667C157.537 16 157.537 16.3333 157.537 16.6667V23.6667C157.537 24 157.87 24 157.87 24H162.87Z"
        fill="currentColor"
      />
      <path
        d="M179.278 26.6667H169.278C168.945 26.6667 168.612 26.6667 168.278 26.3333L166.278 24.3333C165.945 24 165.945 23.6667 165.945 23.3333V18C165.945 17.3333 166.278 16.6667 166.945 16.3333L173.278 13.6667C173.945 13.3333 174.612 13.3333 174.612 13.3333H176.278C176.278 13.3333 176.612 13.3333 176.612 13V8H179.278V26.6667ZM176.278 24C176.278 24 176.612 24 176.612 23.6667V16.3333C176.612 16.3333 176.612 16 176.278 16H168.945C168.612 16 168.612 16.3333 168.612 16.3333V23.6667C168.612 24 168.945 24 168.945 24H176.278Z"
        fill="currentColor"
      />
      <path
        d="M195.353 15.6667C195.707 16.0208 195.686 16.3333 195.686 16.6667V27.3333C195.686 28 195.353 28.6667 194.686 29L188.353 31.6667C187.686 32 187.02 32 187.02 32H182.353V29.3333H192.686C193.02 29.3333 193.02 29 193.02 29V27C193.02 27 193.02 26.6667 192.686 26.6667H191.02C191.02 26.6667 190.353 26.6667 189.686 26.3333L183.353 23.6667C182.686 23.3333 182.353 22.6667 182.353 22V16.6667C182.353 16.3333 182.353 16 182.686 15.6667L184.686 13.6667C185.02 13.3333 185.353 13.3333 185.686 13.3333H192.353C192.686 13.3333 193.02 13.3333 193.353 13.6667L195.353 15.6667ZM193.02 16.3333C193.02 16 192.686 16 192.686 16H185.353C185.353 16 185.02 16 185.02 16.3333V23.6667C185.02 23.6667 185.02 24 185.353 24H192.686C192.686 24 193.02 24 193.02 23.6667V16.3333Z"
        fill="currentColor"
      />
      <path
        d="M212.094 16.6667C212.094 17.3333 211.761 18 211.094 18.3333L204.761 21C204.094 21.3333 203.427 21.3333 203.427 21.3333H201.761C201.427 21.3333 201.427 21.6667 201.427 21.6667V23.6667C201.427 24 201.761 24 201.761 24H212.094V26.6667H207.427C207.427 26.6667 206.761 26.6667 206.094 26.3333L199.761 23.6667C199.094 23.3333 198.761 22.6667 198.761 22V16.6667C198.761 16.3333 198.761 16 199.094 15.6667L201.094 13.6667C201.427 13.3333 201.761 13.3333 202.094 13.3333H208.761C209.094 13.3333 209.427 13.3333 209.761 13.6667L211.761 15.6667C212.094 16 212.094 16.25 212.094 16.6667ZM209.427 16.3333C209.427 16.3333 209.427 16 209.094 16H201.761C201.427 16 201.427 16.3333 201.427 16.3333V18.3333C201.427 18.6667 201.761 18.6667 201.761 18.6667H209.094C209.427 18.6667 209.427 18.3333 209.427 18.3333V16.3333Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const LaptopIcon = ({ width = "64px", height = "64px", ...props }) => {
  return (
    <svg width={width} height={height} {...props} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7 15.1998H13.3V17.5998V39.1998H18.1V19.9998H46.9V39.1998H51.7V17.5998V15.1998H49.3H15.7ZM8.5 41.5998V45.1998L12.1 48.7998H52.9L56.5 45.1998V41.5998H8.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
