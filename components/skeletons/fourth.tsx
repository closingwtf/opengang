import { Globe } from "@/components/ui/globe";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { cn } from "@/lib/utils";
export const SkeletonFour = () => {
  return (
    <div className="h-full  flex flex-col items-center relative bg-white dark:bg-black mt-10">
      <InfiniteMovingCards speed="fast" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="slow" direction="right">
        <MovingGrid />
      </InfiniteMovingCards>
      <InfiniteMovingCards speed="normal" direction="left">
        <MovingGrid />
      </InfiniteMovingCards>

      <Globe className="absolute -right-2 md:-right-40 -bottom-40" />
    </div>
  );
};

const MovingGrid = () => {
  return (
    <div className="flex space-x-4 flex-shrink-0 mb-4 relative z-40">
      <span
        className={cn(
          " space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-4 w-4 object-contain"
        >
          <path
            fill="#2396ED"
            d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"
          />
        </svg>
        <span>Docker</span>
      </span>
      <span
        className={cn(
          " space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          className="h-4 w-4 object-contain"
        >
          <g fill="#0080FF">
            <path d="M8 12.208v2.652c4.495 0 7.988-4.34 6.518-9.053a6.642 6.642 0 00-4.333-4.333C5.48.004 1.14 3.504 1.14 7.992h2.652c0-2.815 2.792-4.993 5.756-3.92a3.975 3.975 0 012.372 2.372c1.08 2.961-1.1 5.75-3.912 5.756V9.563H5.363v2.645H8z" />

            <path d="M5.363 14.245H3.325v-2.037h2.038v2.037zM1.622 12.208h1.703v-1.704H1.622v1.704z" />
          </g>
        </svg>
        <span>Digital Ocean</span>
      </span>
      <span
        className={cn(
          " space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 object-contain"
        >
          <title>file_type_tailwind</title>
          <path
            d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z"
            fill="#44a8b3"
          />
        </svg>
        <span>Tailwind CSS</span>
      </span>
      <span
        className={cn(
          " space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 object-contain"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9 20.3335H16V27.0002L9 20.3335Z"
            fill="#0055FF"
          />
          <path d="M16 13.6665H9V20.3332H23L16 13.6665Z" fill="#00AAFF" />
          <path d="M9 7L16 13.6667H23V7H9Z" fill="#88DDFF" />
        </svg>
        <span>Framer Motion</span>
      </span>
      <span
        className={cn(
          " space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 -18 256 256"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
          className="h-4 w-4 object-contain"
        >
          <g>
            <path
              d="M245.969687,168.943256 C232.308259,176.064479 161.536048,205.163388 146.468577,213.017633 C131.402107,220.873879 123.031844,220.797876 111.129473,215.107699 C99.2271007,209.417521 23.9127473,178.99557 10.3463234,172.511368 C3.56511141,169.270267 0,166.535181 0,163.9511 L0,138.075292 C0,138.075292 98.0490639,116.729625 113.878559,111.051447 C129.707053,105.372269 135.199225,105.167264 148.669646,110.101418 C162.141067,115.036572 242.686583,129.569026 256,134.445178 C256,134.445178 255.993999,157.5559 255.993999,159.954975 C255.996,162.513055 252.923904,165.319143 245.969687,168.943256"
              fill="#912626"
            ></path>
            <path
              d="M245.964922,143.220067 C232.303935,150.33806 161.534003,179.438032 146.467017,187.292024 C131.401031,195.149018 123.031039,195.072017 111.12905,189.382023 C99.2260618,183.696028 23.9151336,153.269057 10.3491466,146.788063 C-3.21684053,140.303069 -3.50184026,135.840074 9.82514705,130.622079 C23.1511343,125.402084 98.0490629,96.0171117 113.880047,90.3381172 C129.708033,84.6611226 135.199028,84.4541228 148.669014,89.3901181 C162.140002,94.3241134 232.487935,122.325087 245.799922,127.200082 C259.11491,132.081078 259.625908,136.099073 245.964922,143.220067"
              fill="#C6302B"
            ></path>
            <path
              d="M245.969687,127.074354 C232.308259,134.195577 161.536048,163.294486 146.468577,171.151732 C131.402107,179.004977 123.031844,178.928975 111.129473,173.238797 C99.2261007,167.551619 23.9127473,137.126668 10.3463234,130.642465 C3.56511141,127.401364 0,124.669279 0,122.085199 L0,96.2063895 C0,96.2063895 98.0490639,74.8617226 113.878559,69.182545 C129.707053,63.5043676 135.199225,63.2983612 148.669646,68.2325154 C162.141067,73.1676697 242.686583,87.6971237 256,92.5742761 C256,92.5742761 255.993999,115.684998 255.993999,118.087073 C255.996,120.644153 252.923904,123.450241 245.969687,127.074354"
              fill="#912626"
            ></path>
            <path
              d="M245.964922,101.351164 C232.303935,108.471157 161.534003,137.569129 146.467017,145.426122 C131.401031,153.280114 123.031039,153.203114 111.12905,147.51312 C99.2260618,141.827125 23.9151336,111.401154 10.3491466,104.91916 C-3.21684053,98.4361664 -3.50184026,93.9721706 9.82514705,88.7521756 C23.1511343,83.5351806 98.0490629,54.1482087 113.880047,48.4702141 C129.708033,42.7922195 135.199028,42.5862197 148.669014,47.521215 C162.140002,52.4552102 232.487935,80.4541835 245.799922,85.3311789 C259.11491,90.2101742 259.625908,94.2301704 245.964922,101.350163 L245.964922,101.351164"
              fill="#C6302B"
            ></path>
            <path
              d="M245.969687,83.6525661 C232.308259,90.7737887 161.536048,119.873698 146.468577,127.730944 C131.402107,135.585189 123.031844,135.508187 111.129473,129.818008 C99.2261007,124.130831 23.9127473,93.7048802 10.3463234,87.2226777 C3.56511141,83.9805764 0,81.2474909 0,78.6654102 L0,52.7856015 C0,52.7856015 98.0490639,31.4419345 113.878559,25.7637571 C129.707053,20.0845797 135.199225,19.8795733 148.669646,24.8137275 C162.141067,29.7488817 242.686583,44.2783357 256,49.1554881 C256,49.1554881 255.993999,72.2662103 255.993999,74.6672853 C255.996,77.2223652 252.923904,80.0284528 245.969687,83.6525661"
              fill="#912626"
            ></path>
            <path
              d="M245.964922,57.929387 C232.303935,65.0493802 161.534003,94.1493524 146.467017,102.004345 C131.401031,109.858338 123.031039,109.781338 111.12905,104.093343 C99.2270617,98.4053484 23.9151336,67.9813773 10.3491466,61.4983836 C-3.21684053,55.0153898 -3.50184026,50.550394 9.82514705,45.331399 C23.1511343,40.113404 98.0490629,10.729432 113.880047,5.04943744 C129.708033,-0.629557148 135.199028,-0.833556953 148.669014,4.10143834 C162.140002,9.03643363 232.487935,37.0354069 245.799922,41.9124022 C259.11491,46.7883976 259.625908,50.8093938 245.964922,57.929387"
              fill="#C6302B"
            ></path>
            <path
              d="M159.282977,32.7570853 L137.273922,35.0422326 L132.346419,46.8976124 L124.387597,33.667969 L98.973147,31.383814 L117.936992,24.5452403 L112.247442,14.0472558 L130.001736,20.9910078 L146.739969,15.5108217 L142.21631,26.3660155 L159.282977,32.7570853"
              fill="#FFFFFF"
            ></path>
            <path
              d="M131.03169,90.2747287 L89.9546047,73.2378295 L148.815752,64.2034109 L131.03169,90.2747287"
              fill="#FFFFFF"
            ></path>
            <path
              d="M74.0816124,39.3466047 C91.4568682,39.3466047 105.541829,44.8069457 105.541829,51.5413333 C105.541829,58.2767132 91.4568682,63.736062 74.0816124,63.736062 C56.7073488,63.736062 42.6213953,58.2767132 42.6213953,51.5413333 C42.6213953,44.8069457 56.7073488,39.3466047 74.0816124,39.3466047"
              fill="#FFFFFF"
            ></path>
            <path
              d="M185.29476,35.9977674 L220.130605,49.7642171 L185.324527,63.5167752 L185.29476,35.9977674"
              fill="#621B1C"
            ></path>
            <path
              d="M146.754853,51.2426667 L185.29476,35.9977674 L185.324527,63.5167752 L181.546047,64.9952248 L146.754853,51.2426667"
              fill="#9A2928"
            ></path>
          </g>
        </svg>
        <span>Redis</span>
      </span>
      <span
        className={cn(
          " space-x-1 min-w-24 px-2 py-1 bg-white dark:bg-neutral-900 text-sm rounded-md flex justify-center items-center  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <VercelLogo /> <span>Vercel</span>
      </span>
      <span
        className={cn(
          "  min-w-24 flex justify-center bg-white dark:bg-neutral-900 items-center px-2 py-1 space-x-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <AWSLogo /> <span>AWS</span>
      </span>
      <span
        className={cn(
          " space-x-1 min-w-24 flex justify-center items-center bg-white dark:bg-neutral-900 px-2 py-1 text-sm rounded-md  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
        )}
      >
        <GitHubLogo /> <span>GitHub</span>
      </span>
    </div>
  );
};

// Logos

export const GitHubLogo = () => {
  return (
    <svg
      width="800px"
      height="800px"
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Dribbble-Light-Preview"
          transform="translate(-140.000000, -7559.000000)"
          fill="#000000"
        >
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
              id="github-[#142]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
const VercelLogo = () => {
  return (
    <svg
      fill="#000000"
      width="800px"
      height="800px"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 object-contain"
    >
      <path fillRule="evenodd" d="M256,48,496,464H16Z" />
    </svg>
  );
};

const AWSLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width="48px"
      height="48px"
      className="h-4 w-4 object-contain"
    >
      <path
        fill="#252f3e"
        d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"
      />
      <path
        fill="#f90"
        d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"
      />
    </svg>
  );
};
