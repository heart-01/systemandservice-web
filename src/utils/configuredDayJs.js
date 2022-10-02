import dayjs from "dayjs";
import thai from "dayjs/locale/th";
import relativeTime from "dayjs/plugin/relativeTime";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.locale(thai);
dayjs.extend(relativeTime);
dayjs.extend(buddhistEra);

export default dayjs