import dayjs from "dayjs";
import "dayjs/locale/fr";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.locale("fr"); // use locale globally
dayjs.extend(localizedFormat);

export { dayjs };
