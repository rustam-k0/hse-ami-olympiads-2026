import type { Olympiad } from "./types";

type Enrichment = Omit<Partial<Olympiad>, "name" | "profiles">;
const checkedAt = "2026-07-14";
const source = (title: string, url: string) => [{ title, url, checkedAt }];

// Сведения сезона 2026/27. Прошлогодние даты намеренно не переносятся.
export const olympiadEnrichment: Record<string, Enrichment> = {
  "«Формула Единства»/«Третье тысячелетие»": {
    officialUrl: "https://www.formulo.org/", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES",
    sources: source("Официальный сайт олимпиады", "https://www.formulo.org/"),
  },
  "Всероссийская олимпиада по искусственному интеллекту (с возможностью участия иностранных обучающихся)": {
    officialUrl: "https://ai.edu.gov.ru/", organizer: "Министерство просвещения России и Государственный университет просвещения", scheduleAcademicYear: "2026/27", scheduleStatus: "PUBLISHED",
    registrationStart: "2026-07-01", registrationEnd: "2026-09-20",
    sources: source("Официальный сайт олимпиады по искусственному интеллекту — 2026", "https://ai.edu.gov.ru/"),
    stages: [
      { id: "ai-2026-registration", type: "registration", title: "Регистрация и тренировочный этап", startDate: "2026-07-01", endDate: "2026-09-20", format: "online", sourceUrl: "https://ai.edu.gov.ru/" },
      { id: "ai-2026-qualification", type: "qualification", title: "Отборочный этап", startDate: "2026-09-21", endDate: "2026-10-06", format: "online", sourceUrl: "https://ai.edu.gov.ru/" },
      { id: "ai-2026-main", type: "qualification", title: "Основной этап", startDate: "2026-10-15", endDate: "2026-10-21", format: "online", sourceUrl: "https://ai.edu.gov.ru/" },
      { id: "ai-2026-final", type: "final", title: "Заключительный этап", startDate: "2026-11-16", endDate: "2026-11-21", sourceUrl: "https://ai.edu.gov.ru/" },
      { id: "ai-2026-results", type: "results", title: "Публикация итогов и апелляция", startDate: "2026-11-20", sourceUrl: "https://ai.edu.gov.ru/" },
    ],
  },
  "Всероссийская олимпиада школьников «Высшая проба»": {
    officialUrl: "https://olymp.hse.ru/mmo/", organizer: "НИУ ВШЭ", scheduleAcademicYear: "2026/27", scheduleStatus: "PUBLISHED",
    scheduleNote: "Для отдельных профилей, включая «Анализ данных», организатор может публиковать отдельный календарь.",
    registrationStart: "2026-08-20", registrationEnd: "2026-09-21",
    sources: source("Официальный сайт олимпиады «Высшая проба»", "https://olymp.hse.ru/mmo/"),
    stages: [
      { id: "hse-2026-registration", type: "registration", title: "Регистрация", startDate: "2026-08-20", endDate: "2026-09-21", format: "online", sourceUrl: "https://olymp.hse.ru/mmo/" },
      { id: "hse-2026-qualification-1", type: "qualification", title: "Отборочный этап — первый тур", startDate: "2026-09-25", endDate: "2026-10-11", format: "online", sourceUrl: "https://olymp.hse.ru/mmo/" },
      { id: "hse-2026-qualification-2", type: "qualification", title: "Отборочный этап — второй тур", startDate: "2026-11-13", endDate: "2026-11-22", format: "online", sourceUrl: "https://olymp.hse.ru/mmo/" },
      { id: "hse-2027-final", type: "final", title: "Заключительный этап", startDate: "2027-02-05", endDate: "2027-02-15", sourceUrl: "https://olymp.hse.ru/mmo/" },
    ],
  },
  "Всесибирская открытая олимпиада школьников": { officialUrl: "https://olympic.nsu.ru/", organizer: "Новосибирский государственный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Олимпиадный портал НГУ", "https://olympic.nsu.ru/") },
  "Вузовско-академическая олимпиада по информатике": { officialUrl: "https://sp.urfu.ru/vuzakadem/inform/", organizer: "Уральский федеральный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Спортивное программирование УрФУ", "https://sp.urfu.ru/vuzakadem/inform/") },
  "Международная олимпиада «Innopolis Open»": { officialUrl: "https://dovuz.innopolis.university/pre-olympiads/innopolis-open/en", organizer: "Университет Иннополис", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальная страница Innopolis Open", "https://dovuz.innopolis.university/pre-olympiads/innopolis-open/en") },
  "Международная олимпиада школьников Уральского федерального университета «Изумруд»": { officialUrl: "https://dovuz.urfu.ru/olymps/izumrud", organizer: "Уральский федеральный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальная страница олимпиады «Изумруд»", "https://dovuz.urfu.ru/olymps/izumrud") },
  "Межрегиональная олимпиада школьников «Будущие исследователи — будущее науки»": { officialUrl: "https://bibn.unn.ru/", organizer: "ННГУ им. Н. И. Лобачевского и вузы-партнёры", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный портал БИБН", "https://bibn.unn.ru/") },
  "Межрегиональная олимпиада школьников имени И.Я. Верченко": { officialUrl: "https://ikb.mtuci.ru/", organizer: "МТУСИ и организации-партнёры", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады имени И. Я. Верченко", "https://ikb.mtuci.ru/") },
  "Межрегиональные предметные олимпиады Казанского (Приволжского) федерального университета": { officialUrl: "https://malun.kpfu.ru/", organizer: "Казанский федеральный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Портал олимпиад КФУ", "https://malun.kpfu.ru/") },
  "Московская олимпиада школьников": { officialUrl: "https://mos.olimpiada.ru/", organizer: "Департамент образования и науки города Москвы", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт Московской олимпиады школьников", "https://mos.olimpiada.ru/") },
  "Объединенная межвузовская олимпиада школьников": { officialUrl: "https://olympiads.mccme.ru/ommo/", organizer: "Консорциум вузов-организаторов", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт ОММО", "https://olympiads.mccme.ru/ommo/") },
  "Океан знаний": { officialUrl: "https://www.dvfu.ru/admission/olympic-games-and-the-preparatory-courses/olympics/school-olympiad-ocean-of-knowledge/", organizer: "Дальневосточный федеральный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальная страница олимпиады «Океан знаний»", "https://www.dvfu.ru/admission/olympic-games-and-the-preparatory-courses/olympics/school-olympiad-ocean-of-knowledge/") },
  "Олимпиада Курчатов": { officialUrl: "https://olimpiadakurchatov.ru/", organizer: "Оргкомитет олимпиады «Курчатов»", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады «Курчатов»", "https://olimpiadakurchatov.ru/") },
  "Олимпиада РГГУ для школьников": { officialUrl: "https://www.rsuh.ru/", organizer: "Российский государственный гуманитарный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт РГГУ", "https://www.rsuh.ru/") },
  "Олимпиада Юношеской математической школы": { officialUrl: "https://yumsh.ru/", organizer: "Юношеская математическая школа", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт ЮМШ", "https://yumsh.ru/") },
  "Олимпиада школьников «Ломоносов»": { officialUrl: "https://olymp.msu.ru/", organizer: "Московский государственный университет имени М. В. Ломоносова", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный портал олимпиады «Ломоносов»", "https://olymp.msu.ru/") },
  "Олимпиада школьников «Покори Воробьевы горы!»": { officialUrl: "https://pvg.mk.ru/", organizer: "МГУ имени М. В. Ломоносова и «Московский комсомолец»", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт «Покори Воробьёвы горы!»", "https://pvg.mk.ru/") },
  "Олимпиада школьников «Физтех»": { officialUrl: "https://olymp-online.mipt.ru/", organizer: "Московский физико-технический институт", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады «Физтех»", "https://olymp-online.mipt.ru/") },
  "Олимпиада школьников «Шаг в будущее»": { officialUrl: "https://olymp.bmstu.ru/ru", organizer: "МГТУ имени Н. Э. Баумана", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады «Шаг в будущее»", "https://olymp.bmstu.ru/ru") },
  "Олимпиада школьников Санкт-Петербургского государственного университета": { officialUrl: "https://sch-olymp.spbu.ru/", organizer: "Санкт-Петербургский государственный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт Олимпиады школьников СПбГУ", "https://sch-olymp.spbu.ru/") },
  "Олимпиада школьников по информатике и программированию": { officialUrl: "https://neerc.ifmo.ru/school/io/", organizer: "Университет ИТМО", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальная страница индивидуальной олимпиады", "https://neerc.ifmo.ru/school/io/") },
  "Олимпиада школьников по программированию «ТехноКубок»": { officialUrl: "https://techno-cup.ru/", organizer: "VK, МФТИ и МГТУ имени Н. Э. Баумана", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт «ТехноКубка»", "https://techno-cup.ru/") },
  "Открытая олимпиада школьников": { officialUrl: "https://olymp.itmo.ru/", organizer: "Университет ИТМО", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный портал олимпиад ИТМО", "https://olymp.itmo.ru/") },
  "Открытая олимпиада школьников по программированию": { officialUrl: "https://new.olympiads.ru/", organizer: "Оргкомитет Открытой олимпиады по программированию", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады", "https://new.olympiads.ru/") },
  "Открытая олимпиада школьников по программированию «Когнитивные технологии»": { officialUrl: "https://olymp.misis.ru/", organizer: "Университет МИСИС и МФТИ", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт «Когнитивных технологий»", "https://olymp.misis.ru/") },
  "Открытая региональная межвузовская олимпиада школьников (ОРМО) с международным участием": { officialUrl: "https://olimp.tusur.ru/", organizer: "Вузы Томской области", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный портал ОРМО", "https://olimp.tusur.ru/") },
  "Отраслевая физико-математическая олимпиада школьников «Росатом»": { officialUrl: "https://olymp.mephi.ru/rosatom/about", organizer: "НИЯУ МИФИ", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады «Росатом»", "https://olymp.mephi.ru/rosatom/about") },
  "Плехановская олимпиада школьников": { officialUrl: "https://www.rea.ru/pk/entrant/posh", organizer: "РЭУ имени Г. В. Плеханова", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальная страница Плехановской олимпиады", "https://www.rea.ru/pk/entrant/posh") },
  "Санкт-Петербургская олимпиада школьников": { officialUrl: "https://www.pdmi.ras.ru/~olymp/", organizer: "ПОМИ РАН и организации Санкт-Петербурга", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт Санкт-Петербургской олимпиады по математике", "https://www.pdmi.ras.ru/~olymp/") },
  "Турнир городов": { officialUrl: "https://www.turgor.ru/", organizer: "Международный оргкомитет Турнира городов", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт Турнира городов", "https://www.turgor.ru/") },
  "Турнир имени М.В. Ломоносова": { officialUrl: "https://turlom.olimpiada.ru/", organizer: "Оргкомитет Турнира имени М. В. Ломоносова", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт Турнира Ломоносова", "https://turlom.olimpiada.ru/") },
  "Университетская олимпиада школьников «Бельчонок»": { officialUrl: "https://dovuz.sfu-kras.ru/abiturientu-sfu/olimpiady/belchonok", organizer: "Сибирский федеральный университет", scheduleAcademicYear: "2026/27", scheduleStatus: "NO_CONFIRMED_DATES", sources: source("Официальный сайт олимпиады «Бельчонок»", "https://dovuz.sfu-kras.ru/abiturientu-sfu/olimpiady/belchonok") },
};
