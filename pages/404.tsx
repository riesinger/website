/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Grid from "components/Grid";
import Layout from "components/layout/Layout";
import { motion } from "framer-motion";
import Link from "next/link";

function NotFound() {
  return (
    <Layout header footer>
      <Grid
        columns="var(--layout-medium)"
        columnGap={40}
        rowGap={40}
        css={css`
          padding-top: 64px;

          @media screen and (min-width: 800px) {
            grid-template-columns:
              var(--default-gutter) minmax(
                auto,
                calc(var(--max-width-medium) / 2 - 20px)
              )
              minmax(auto, calc(var(--max-width-medium) / 2 - 20px)) var(--default-gutter);
          }
        `}
      >
        <section
          css={css`
            grid-column: 2;
          `}
        >
          <h1>Looks like you took a wrong turn</h1>
          <p>
            Unfortunately, the page you were looking for doesn&apos;t exist. You
            can head back to the{" "}
            <Link href="/">
              <a>homepage</a>
            </Link>
            , read some of my{" "}
            <Link href="/posts/">
              <a>blog posts</a>
            </Link>{" "}
            or <a href="mailto:hi@riesinger.dev"> send me an email</a> or{" "}
            <a href="https://github.com/riesinger/website">
              open an issue on GitHub
            </a>{" "}
            in case you think this page should exist.
          </p>
        </section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 874.03939 771.29199"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          css={css`
            width: 100%;
            max-width: 500px;
            grid-column: 2;
            justify-self: center;
            @media screen and (min-width: 800px) {
              grid-column: 3;
            }
          `}
        >
          <path
            d="M673.06187,155.13663c-6.61083-10.93377-14.4444-22.60778-26.71241-26.178-14.20721-4.1345-28.80156,4.07884-41.18094,12.18371a1200.0132,1200.0132,0,0,0-106.79381,78.68435l.03733.42443q39.84558-2.74783,79.69107-5.49561c19.19229-1.32353,39.04395-2.82962,56.00462-11.90879,6.436-3.44519,12.70971-8.04728,20.00276-8.368,9.06094-.39838,16.9615,5.92977,23.17024,12.54124,36.72672,39.109,47.3547,98.91591,88.5584,133.27607A1307.62124,1307.62124,0,0,0,673.06187,155.13663Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-tertiary)"
          />
          <path
            d="M898.81566,486.85161c-4.06138-5.12843-5.72089-6.32951-9.7271-11.50539Q840.15871,412.06265,797.10831,344.504q-29.24146-45.88332-55.58294-93.52878-12.54066-22.65123-24.39375-45.65806-9.19771-17.83888-17.98489-35.89113c-1.67533-3.43742-3.3032-6.89062-4.923-10.35172-3.81675-8.13911-7.56252-16.31772-11.58454-24.34624-4.583-9.15055-10.16194-18.74365-18.57794-24.89148a25.3465,25.3465,0,0,0-13.2043-5.081c-6.851-.44252-13.17267,2.38643-19.115,5.47612a615.32438,615.32438,0,0,0-120.996,83.43784A629.91682,629.91682,0,0,0,412.44405,302.789c-.86892,1.24063-2.92353.05532-2.04651-1.19317q5.17993-7.32527,10.56514-14.49239A633.39908,633.39908,0,0,1,582.6701,136.269q15.72964-10.19362,32.05079-19.43118c5.484-3.1055,10.99188-6.1715,16.59432-9.04781,5.49208-2.821,11.32371-5.35762,17.59789-5.45244,21.35138-.33187,32.40654,23.8484,40.00031,40.11876q3.57965,7.68077,7.24612,15.31419,13.85619,28.98074,28.77923,57.43214,9.20988,17.56629,18.82295,34.9271,29.91689,54.06191,63.59574,105.935c29.74345,45.8082,59.24961,86.27465,93.13353,129.11167C901.42357,486.36169,899.75634,488.05274,898.81566,486.85161Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-secondary)"
          />
          <path
            d="M508.63577,181.72953c-1.24048-1.38286-2.47325-2.76572-3.72184-4.14858-9.84593-10.88906-20.41068-21.65166-33.93138-27.8943a49.228,49.228,0,0,0-20.62445-4.78073c-7.3804.02372-14.59488,1.95969-21.41426,4.67014-3.2241,1.288-6.37721,2.7499-9.48247,4.30658-3.54821,1.78587-7.03314,3.6903-10.50187,5.61049q-9.76722,5.405-19.28094,11.28411-18.92963,11.699-36.67357,25.18385-9.1983,6.99336-18.01692,14.445-8.20224,6.92216-16.07266,14.21579c-1.122,1.03517-2.79736-.64006-1.67533-1.67523,1.38286-1.288,2.78154-2.56817,4.18022-3.83248q5.92655-5.35763,12.04292-10.50977,11.15336-9.41136,22.88433-18.09569,18.24205-13.51254,37.74-25.19176,9.74349-5.8317,19.75514-11.17352c2.01525-1.07467,4.054-2.12565,6.11638-3.12132a97.50231,97.50231,0,0,1,14.5397-5.91863,51.72426,51.72426,0,0,1,21.95985-2.15725,57.173,57.173,0,0,1,20.261,7.00912c13.2753,7.42,23.57151,18.8938,33.59146,30.091C511.32278,181.18429,509.65517,182.86743,508.63577,181.72953Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-secondary)"
          />
          <path
            d="M780.64307,294.56892l31.8111-11.63506L828.2485,277.157c5.14394-1.88143,10.27552-4.02328,15.59314-5.37047a24.59988,24.59988,0,0,1,14.1137.17983,32.529,32.529,0,0,1,11.00834,6.824,89.33664,89.33664,0,0,1,9.02916,9.64249c3.43871,4.13257,6.82664,8.30845,10.22975,12.47034q21.068,25.76544,41.86047,51.75453,20.792,25.98867,41.306,52.19814,20.56413,26.27355,40.84541,52.76683,2.48448,3.24552,4.96472,6.4943c.91353,1.1965,2.9734.01691,2.047-1.1965q-20.4309-26.75968-41.14661-53.30032-20.76666-26.60406-41.8203-52.98243-21.05322-26.37786-42.391-52.52695-5.31588-6.51452-10.6493-13.0147c-2.99929-3.65542-5.96477-7.35027-9.25448-10.75258-6.03851-6.2452-13.58286-11.76428-22.61354-11.914-5.30957-.08805-10.44809,1.5968-15.38124,3.38144-5.31814,1.92392-10.62353,3.88384-15.93487,5.82649l-32.03355,11.71642-8.00839,2.9291c-1.42119.51981-.80725,2.81169.6302,2.28594Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-secondary)"
          />
          <path
            d="M466.79629,163.3884c-16.1657-8.30835-36.86813-6.6811-51.72326,3.69893a737.72563,737.72563,0,0,1,83.93162,19.58923C487.5553,179.967,478.59917,169.45452,466.79629,163.3884Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-tertiary)"
          />
          <path
            d="M414.91391,167.05873l-3.11211,2.52958c1.05268-.88536,2.147-1.71545,3.27123-2.501C415.01992,167.07817,414.967,167.06789,414.91391,167.05873Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-tertiary)"
          />
          <path
            d="M867.76588,294.68515c-3.13141-3.81174-6.517-7.80285-11.20077-9.35109l-4.3729.17247A496.01529,496.01529,0,0,0,984.30578,436.54342Q926.03584,365.61431,867.76588,294.68515Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-tertiary)"
          />
          <path
            d="M667.56528,606.08057a.99208.99208,0,0,1-.34472-.06153l-84.26075-30.95312a.99979.99979,0,0,1,.68946-1.877L667.91,604.14209a.99992.99992,0,0,1-.34473,1.93848Z"
            transform="translate(-162.9803 -64.354)"
            stroke="var(--riesinger-colors-typeface-primary)"
          />
          <path
            d="M513.56528,548.08057a.99208.99208,0,0,1-.34472-.06153l-84.26075-30.95312a.99979.99979,0,0,1,.68946-1.877L513.91,546.14209a.99992.99992,0,0,1-.34473,1.93848Z"
            transform="translate(-162.9803 -64.354)"
            stroke="var(--riesinger-colors-typeface-primary)"
          />
          <path
            d="M356.56528,490.08057a.99208.99208,0,0,1-.34472-.06153l-84.26075-30.95312a.99979.99979,0,1,1,.68946-1.877L356.91,488.14209a.99992.99992,0,0,1-.34473,1.93848Z"
            transform="translate(-162.9803 -64.354)"
            stroke="var(--riesinger-colors-typeface-primary)"
          />
          <path
            d="M340.77789,339.73786c-3.513-.78529-7.07046-1.40541-10.5834-1.83746l-.51119-.06323c-23.32139-2.77664-43.00988,6.9576-45.79631,22.64455l-.49522,2.83825c-.30945,1.79507-.643,3.72484-1.03969,5.85964-.192,1.05382.86683,2.13206,2.40721,2.47639L845.64873,497.03693c39.60727,8.56359,79.08714,17.02366,117.33655,25.14363a177.65208,177.65208,0,0,0,21.71065,3.51129c10.92716.92565,18.92738-.29292,24.46025-3.72527l.00143.00032c6.87669-4.25263,8.60671-11.15675,10.01929-19.07845,2.84589-15.99688,5.87651-32.793,8.8972-49.53834,2.66091-14.75837,5.31588-29.477,7.832-43.57433,1.478-8.36939,2.28148-15.86888-2.87865-22.89126-5.59586-7.59812-17.581-13.49439-35.62262-17.52742-.218-.04872-.43435-.09709-.65537-.1455-56.59242-12.40748-117.61866-2.54964-151.85437,24.53032-3.94237,3.11838-7.734,6.55259-11.40129,9.87461a158.915,158.915,0,0,1-17.302,14.23235,66.95031,66.95031,0,0,1-10.66605,5.98627c-.25666.12475-.54766.25483-.85089.37217-.70477.31777-1.43307.61327-2.13506.86462a62.0421,62.0421,0,0,1-12.65519,3.3972l-.43142.06466c-.32638.05613-.67791.1067-1.027.14668a68.206,68.206,0,0,1-7.47861.58873c-10.81181.309-22.58524-1.66945-34.9912-5.88162a151.75218,151.75218,0,0,1-32.578-15.75109c-10.81449-6.91445-20.63934-14.71742-30.14091-22.263-4.17337-3.3155-8.49029-6.74313-12.82831-10.0464-.81538-.62156-1.61781-1.23022-2.43389-1.84194-5.31267-3.96943-10.17724-7.35432-14.87117-10.34795a146.28109,146.28109,0,0,0-37.14319-17.03477c-13.864-4.02977-26.62952-5.1282-37.93113-3.27465a60.64867,60.64867,0,0,0-9.25267,2.26955c-13.92282,4.59682-23.91659,13.74043-33.58051,22.58341-12.02134,10.99884-24.45259,22.37336-44.6111,25.204-23.26268,3.2735-53.83561-7.08109-74.69257-17.86551-6.55734-3.3911-13.04452-7.05565-19.31837-10.60059q-3.80063-2.148-7.611-4.28006c-4.99335-2.78532-9.09853-4.9819-12.9185-6.91547l-1.20763-.61418c-.67265-.33749-1.346-.67514-2.03422-1.0071-4.55048-2.238-8.82522-4.15423-13.07549-5.85984l-1.00447-.40866c-2.02137-.78508-3.91848-1.48634-5.78838-2.13749l-.74665-.259A109.23636,109.23636,0,0,0,340.77789,339.73786Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-tertiary)"
          />
          <path
            d="M1009.9813,528.062a1.00861,1.00861,0,0,1-.20752-.02148l-740-156.208a1.00008,1.00008,0,0,1,.41309-1.957l740,156.208a1,1,0,0,1-.20557,1.97851Z"
            transform="translate(-162.9803 -64.354)"
            stroke="var(--riesinger-colors-typeface-primary)"
          />
          <circle cx="693.50002" cy="51" r="51" fill="#ff6584" />
          <motion.path
            d="M948.51573,76.22439c-24.7168-3.341-52.93512,10.01867-59.34131,34.12353a21.59652,21.59652,0,0,0-41.0935,2.10871l2.82971,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C994.37657,95.688,973.23259,79.56527,948.51573,76.22439Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-secondary)"
            initial={{ x: -163, y: -64 }}
            animate={{ x: -175 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <motion.path
            d="M842.51573,144.22439c-24.7168-3.34095-52.93512,10.01867-59.34131,34.12353a21.59652,21.59652,0,0,0-41.0935,2.10871l2.82971,2.02667a372.27461,372.27461,0,0,0,160.65881-.72638C888.37657,163.688,867.23259,147.56527,842.51573,144.22439Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-secondary)"
            initial={{ x: -163, y: -64 }}
            animate={{ x: -185 }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          />
          <path
            d="M886.872,553.437a9.76016,9.76016,0,0,1,1.3573-14.90445L872.68919,461.346l17.16108,5.50989,12.43908,74.65875A9.81312,9.81312,0,0,1,886.872,553.437Z"
            transform="translate(-162.9803 -64.354)"
            fill="#9e616a"
          />
          <path
            d="M863.92625,390.1305l10.64765-8.03739s9.39288-.66516,11.05646,16.27378,5.0794,49.95013,5.0794,49.95013l16.293,75.46286-22.55395,4.95047-17.451-81.43777-10.46887-24.184Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <polygon
            points="718.5 449 658.5 448 653.5 407 718.5 407 718.5 449"
            fill="#9e616a"
          />
          <polygon
            points="663.032 699.832 649.181 699.831 642.591 646.404 663.034 646.405 663.032 699.832"
            fill="#9e616a"
          />
          <polygon
            points="751.276 680.645 737.425 680.548 731.21 627.076 749.225 631.209 751.276 680.645"
            fill="#9e616a"
          />
          <polygon
            points="707.954 371.691 711.092 379.851 710.465 388.011 649.04 409.286 652.088 373.574 658.993 365.414 707.954 371.691"
            fill="#ffb6b6"
          />
          <circle cx="681.60247" cy="276.31957" r="21.93835" fill="#9e616a" />
          <path
            d="M832.20836,790.48614h-9.82871l-1.75438-9.27947-4.49323,9.27947H790.064a5.85987,5.85987,0,0,1-3.32977-10.682l20.8172-14.37711v-9.38123l21.89607,1.3069Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M921.52345,771.35138l-9.82847-.0688-1.68938-9.29152-4.55808,9.24779-26.06745-.18247a5.85987,5.85987,0,0,1-3.25492-10.705l20.91733-14.231.06567-9.381,21.88638,1.46013Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M918.56637,706.97349l-10.086-61.61949-12-85c8.78784-16.32031-11-67-11-67l-2.79323.134L819.4667,505.41484l.01362-.06084c-12.93066,35.26813-17.21474,52.69133-16.50612,90.24846l2.54743,135.00989h-.79914a5,5,0,0,0,0,10h25a5,5,0,0,0,0-10h-.64459l22.947-160.75659L871.48032,637.354l22,69c-8-2-6.75783,2.634-6.75783,5.25835a5,5,0,0,0,5,5h25a4.9948,4.9948,0,0,0,1.84388-9.63886Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M890.40291,495.97917l-2.00006-20a3.98672,3.98672,0,0,0-3.6051-2.99481c-.83331-9.52728-4.33935-50.62872-4.54883-52.42127l-.00818-.0758-1.5943-34.05774a5.03656,5.03656,0,0,0-4.70251-4.79035l-8.42078-.55041a.44562.44562,0,0,1-.4306-.44531,7.08138,7.08138,0,0,0-7.08136-7.08142H833.08a6.63,6.63,0,0,0-6.57562,5.80383.44015.44015,0,0,1-.448.39612l-.003-.00006a11.84461,11.84461,0,0,0-11.91547,9.82434c-3.40839,19.831-10.23907,64.83984-6.86188,89.86218,1.17566,8.71069-1.3587,1.81158-1.80328,9.09979a5.36475,5.36475,0,0,0,1.33563,3.88959c-2.058.598-2.85618,2.82131-2.32811,4.91615l-.43818-.10847a4,4,0,0,0,4.85638,2.90088L885.502,480.83555C887.64412,480.29558,890.94289,498.12126,890.40291,495.97917Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M806.08865,553.437a9.76012,9.76012,0,0,0-1.3573-14.90445l15.5401-77.18656-17.16107,5.50989-12.43909,74.65875A9.81312,9.81312,0,0,0,806.08865,553.437Z"
            transform="translate(-162.9803 -64.354)"
            fill="#9e616a"
          />
          <path
            d="M829.03439,390.1305l-10.64764-8.03739s-9.39289-.66516-11.05646,16.27378-5.07941,49.95013-5.07941,49.95013l-16.293,75.46286,22.554,4.95047,17.451-81.43777,10.46887-24.184Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M868.07564,321.1661c4.08708,1.21668,7.89992-2.202,10.74458-5.44087l-1.011,1.19957c6.69181,4.71255,10.69317,12.38968,13.28938,20.1611,2.59621,7.76284,4.04419,15.89416,6.97458,23.54562,2.93033,7.64287,7.66,15.03729,14.90022,18.85017,9.69922,5.10665,21.5834,2.78469,31.89962-.89971.13707-.0514.26561-.09424.40268-.14564a65.73749,65.73749,0,0,1-7.52291-25.19066,59.77111,59.77111,0,0,0,17.87339,20.96651,137.21282,137.21282,0,0,0,19.3814-10.77889c3.98426-2.66471,8.18268-6.10917,8.6454-10.88165.47124-4.73827-3.06745-9.06523-7.24019-11.34442-4.17274-2.27914-8.971-3.0503-13.52927-4.4212-4.5498-1.36238-9.19378-3.59868-11.58431-7.71144-5.50938-9.45934,3.76148-22.80013-2.15064-32.01959-2.91323-4.53264-8.56826-6.34911-13.812-7.60862a182.60612,182.60612,0,0,0-24.31673-4.10418c-7.18879-.71975-14.61746-.98537-21.45491,1.32807-6.83751,2.31345-13.04092,7.68571-14.50606,14.7631-3.99284,2.09924-8.217,4.42125-10.35905,8.40547C862.55768,313.81452,863.74868,319.88087,868.07564,321.1661Z"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M874.17675,319.57214c3.91362,4.90263,6.044,10.20454,6.044,13.37969,8.1301,14.8592-3.49609,27.62261-18.3556,35.75253a30.4432,30.4432,0,0,1-19.45034,3.39093l-.62168-2.65376-.84227,2.39048s-9.67458,31.95357-12.86574,33.828c1.211-5.68666,2.59808-32.01668,3.27221-37.56651.93328-7.55361-2.3201-18.799-4.66693-25.63764a40.36632,40.36632,0,0,1-2.21006-13.10023v-.19495l-2.28513,7.34-8.31933-3.54892c1.54776-8.87756,0-18.95567,18.55562-18.08159,10.03575-6.90205,18.87341-7.95341,26.133-5.99583.93688-1.44845,6.33924,1.26445,7.90037.50176"
            transform="translate(-162.9803 -64.354)"
            fill="#2f2e41"
          />
          <path
            d="M894.95,475.58a14.211,14.211,0,0,1-12.22,12.5l-45.17,6.12a14.22429,14.22429,0,0,1-15.99-12.18l-6.51-48.14a14.17467,14.17467,0,0,1,1.8-9.04l-.31-2.34a7.49008,7.49008,0,0,1-1.78-13.14l5.58-25.85a4.00677,4.00677,0,0,1,3.82-4.54,4.11336,4.11336,0,0,1,4.13,3.63l.51,3.8a20.0008,20.0008,0,0,0,39.82-2.66,20.67194,20.67194,0,0,0-.18-2.71l-.5-3.74a4.15049,4.15049,0,0,1,3.18-4.69,3.99878,3.99878,0,0,1,4.71,3.4l3.23,23.8a7.49232,7.49232,0,0,1,3.35,14.41,14.16485,14.16485,0,0,1,5.97,9.74l6.52,48.15A14.00033,14.00033,0,0,1,894.95,475.58Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-brand)"
          />
          <path
            d="M815.90592,423.55866a1.50164,1.50164,0,0,1,1.28528-1.68762l61.56637-9.43744a1.5,1.5,0,1,1,.40234,2.9729l-61.56637,9.43744A1.50164,1.50164,0,0,1,815.90592,423.55866Z"
            transform="translate(-162.9803 -64.354)"
            fill="#3f3d56"
          />
          <path
            d="M823.10114,448.82906l-2.03494-15.03627a4.41336,4.41336,0,0,1,3.78157-4.96534l58.80132-7.52189a4.4134,4.4134,0,0,1,4.96541,3.78156l2.03494,15.03627a4.41338,4.41338,0,0,1-3.78163,4.96535L863.38108,448.32a4.41336,4.41336,0,0,1,.117.48872l2.07876,15.36,19.81932-2.68226a1,1,0,1,1,.26822,1.98193l-19.81932,2.68227-8.91869,1.207L838.098,469.90579a1,1,0,0,1-.26823-1.98193l18.82835-2.54816-2.07875-15.36a4.41419,4.41419,0,0,1-.0171-.50224l-26.49582,3.09714A4.41339,4.41339,0,0,1,823.10114,448.82906Z"
            transform="translate(-162.9803 -64.354)"
            fill="#3f3d56"
          />
          <path
            d="M591.97983,835.646a.99755.99755,0,0,1-.66894-.25684l-428-385.792a1.00022,1.00022,0,0,1,1.33887-1.48633l428,385.792a1,1,0,0,1-.66993,1.74317Z"
            transform="translate(-162.9803 -64.354)"
            stroke="var(--riesinger-colors-typeface-primary)"
          />
          <path
            d="M816.03,445.94a2.02642,2.02642,0,0,0-2.15-2.17,1.86357,1.86357,0,0,0-.32.04l-12.66,2.86a2.08471,2.08471,0,0,0-1.34,1.03,2.60566,2.60566,0,0,0-.55.08,3.0761,3.0761,0,1,0,1.36,6,3.11843,3.11843,0,0,0,1.24-.6l4.29,12.08a2.015,2.015,0,0,0,2.21.97l8.23-1.86a2.04288,2.04288,0,0,0,1.56994-1.82Zm-15.85,6.98a2.20025,2.20025,0,0,1-.98-4.29c.04-.01.08,0,.12-.01a2.07149,2.07149,0,0,0,.27,1.04L801.16,452.4A2.07113,2.07113,0,0,1,800.18,452.92Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-tertiary)"
          />
          <path
            d="M813.88,443.77c.12,1.6-2.62,3.44-6.29,4.17-3.37006.69-6.39.21-7.24-1.05a1.91857,1.91857,0,0,1,.55-.22l12.66-2.86A1.86357,1.86357,0,0,1,813.88,443.77Z"
            transform="translate(-162.9803 -64.354)"
            fill="var(--riesinger-colors-typeface-secondary)"
          />
          <path
            d="M807.26359,475.72409l-3.67522-7.6463c-2.153-4.47933,1.78872-9.24544,8.78746-10.62368L821,456l3.60748,25.20178-.74661.147C816.86213,482.72706,809.41658,480.20341,807.26359,475.72409Z"
            transform="translate(-162.9803 -64.354)"
            fill="#6c63ff"
          />
          <g opacity="0.2">
            <path
              d="M894.95,475.58a14.211,14.211,0,0,1-12.22,12.5l-45.17,6.12a14.20774,14.20774,0,0,1-13.87-6.42,14.51211,14.51211,0,0,1,10.36-5.24c3.88-.2,7.64,1.09,11.44,1.81a39.58923,39.58923,0,0,0,26.83-4.45c3.53-2.05,6.71-4.67,10.59-6.13,3.88-1.45,8.89-1.4,11.7,1.43A4.03266,4.03266,0,0,1,894.95,475.58Z"
              transform="translate(-162.9803 -64.354)"
              stroke="var(--riesinger-colors-typeface-primary)"
            />
          </g>
        </svg>
      </Grid>
    </Layout>
  );
}

export default NotFound;
