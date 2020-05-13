//Translated by Thomas Borgström
import { editorLocalization } from "../editorLocalization";

export let svStrings = {
  //survey templates
  locale: "sv",
  survey: {
    edit: "Redigera",
    dropQuestion: "Dra och släpp en fråga från Verktygslistan till vänster.",
    copy: "Kopiera",
    addToToolbox: "Lägg till Verktygslistan",
    deletePanel: "Radera Panel",
    deleteQuestion: "Radera Fråga",
    convertTo: "Konvertera till",
    drag: "Dra element",
  },
  //questionTypes
  qt: {
    default: "Standard",
    checkbox: "Checkbox",
    comment: "Kommentar",
    imagepicker: "Bild-väljare",
    dropdown: "Rullgardinsmeny",
    file: "Fil",
    html: "Html",
    matrix: "Matris (enkel val)",
    matrixdropdown: "Matris(flera val)",
    matrixdynamic: "Matris (dynamiska rader)",
    multipletext: "Flera texter",
    panel: "Panel",
    paneldynamic: "Panel (dynamisk panel)",
    radiogroup: "Radiogrupper",
    rating: "Rankning",
    text: "Enkel text",
    boolean: "Boolean",
    expression: "Formel",
  },
  //Strings in Editor
  ed: {
    defaultLocale: "Standard ({0})",
    survey: "Enkät",
    settings: "Enkät inställningar",
    editSurvey: "Redigera Enkät",
    addNewPage: "Lägg till en ny sida",
    moveRight: "Scrolla till höger",
    moveLeft: "Scrolla till vänster",
    deletePage: "Radera sida",
    editPage: "Redigera sida",
    edit: "Redigera",
    newPageName: "sida",
    newQuestionName: "fråga",
    newPanelName: "panel",
    testSurvey: "Test enkät",
    testSurveyAgain: "Testa enkät igen",
    testSurveyWidth: "Enkät bredd: ",
    embedSurvey: "Integrerad Enkät",
    translation: "Översättning",
    saveSurvey: "Spara Enkät",
    designer: "Enkät Designer",
    jsonEditor: "JSON Redigering",
    undo: "Ångra",
    redo: "Göra om",
    options: "Alternativ",
    generateValidJSON: "Generera giltig JSON",
    generateReadableJSON: "Generera läsbar JSON",
    toolbox: "Verktygslista",
    toolboxGeneralCategory: "Generellt",
    delSelObject: "Radera valt element",
    editSelObject: "Redigera valt element",
    correctJSON: "Var vänligen korrigera JSON.",
    surveyResults: "Enkät resultat: ",
    surveyResultsTable: "Som tabell",
    surveyResultsJson: "Som JSON",
    resultsTitle: "Frågetitel",
    resultsName: "Frågenamn",
    resultsValue: "Resultat värde",
    resultsDisplayValue: "Visnings värde",
    modified: "Ändrat",
    saving: "Sparar",
    saved: "Sparat",
    saveError: "Fel! Innehållet i enkäten är inte sparat.",
    translationAddLanguage: "Välj språk för oversättning",
    translationShowAllStrings: "Visa alla strängar",
    translationShowAllPages: "Visa alla sidor",
    translationNoStrings: "Inga strängar är översatta. Vänligen ändra filtret.",
    translationExportToSCVButton: "Exportera till CSV",
    translationImportFromSCVButton: "Importera från CSV",
    translationMergeLocaleWithDefault: "Mergea {0} med standard språk",
  },
  //Property names in table headers
  pel: {
    isRequired: "Nödvändig?",
  },
  //Property Editors
  pe: {
    apply: "Faställ",
    ok: "OK",
    cancel: "Avbryt",
    reset: "Återställ",
    close: "Stäng",
    delete: "Radera",
    addNew: "Lägg till ny",
    addItem: "Klicka för att lägga till...",
    removeAll: "Ta bort allt",
    edit: "Redigera",
    itemValueEdit: "Synlig för",
    editChoices: "Redigera val",
    move: "Flytta",
    empty: "<tom>",
    notEmpty: "<redigera värdet>",
    fastEntry: "Snabb ifyllning",
    formEntry: "Ifyllning i enkäten",
    testService: "Testa tjänsten",
    conditionSelectQuestion: "Välj fråga...",
    conditionValueQuestionTitle: "Vänligen skriv in/väj värdet",
    conditionButtonAdd: "Lägg till",
    conditionButtonReplace: "Ersätt",
    conditionHelp:
      "Skriv in ett boolsk uttryck. Det bör returnera SANT för att göra frågan/sidan synlig. For eksempel: {question1} = 'value1' or ({question2} * {question4}  > 20 and {question3} < 5)",
    expressionHelp:
      "Var vänligen skriv in ett uttryck.  Du kan använda måsvingar för att få tillgång till det sparade värdet: '{question1} + {question2}', '({price}*{quantity}) * (100 - {discount})'",
    aceEditorHelp: "Tryck ctrl+mellanslag för att få en ledtråd",
    aceEditorRowTitle: "Nuvarande rad",
    aceEditorPanelTitle: "Nuvarande panel",
    showMore: "För mer detaljer - se dokumentationen",
    conditionShowMoreUrl:
      "https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Tillgängliga frågor:",
    cellsEmptyRowsColumns: "Det bör vara minst 1 kolumn eller rad",

    propertyIsEmpty: "Vänligen fyll i ett värde",
    value: "Värde",
    text: "Text",
    rowid: "Rad ID",
    imageLink: "Bild länk",
    columnEdit: "Redigera kolumn: {0}",
    itemEdit: "Redigera element: {0}",

    url: "URL",
    path: "Sökväg",
    valueName: "Värde namn",
    titleName: "Titel namn",

    hasOther: "Har annat element",
    otherText: "Annat",
    name: "Namn",
    title: "Titel",
    cellType: "Cell typ",
    colCount: "Antal kolumner",
    choicesOrder: "Välj ordning på valet",
    visible: "Synlig?",
    isRequired: "Nödvändig?",
    startWithNewLine: "Starta på en ny rad?",
    rows: "Antal rader",
    placeHolder: "Mata in i fältet",
    showPreview: "Förhandsvinsning av bild?",
    storeDataAsText: "Lagra filinnehållet i JSON som text",
    maxSize: "Max filstorlek i bytes",
    imageHeight: "Bild höjd",
    imageWidth: "Bild bredd",
    rowCount: "Antal rader",
    columnLayout: "Stil på kolumn",
    addRowLocation: "Lägg till radknapp plats",
    addRowText: "Lägg till knapp text",
    removeRowText: "Ta bort rad knapp text",
    minRateDescription: "Minsta betyg beskrivning",
    maxRateDescription: "Maximala betyg beskrivning",
    inputType: "Indata typ",
    optionsCaption: "Text för alternativ",
    defaultValue: "Standard värde",
    cellsDefaultRow: "Standard cell texter",

    surveyEditorTitle: "Redigera schema inställningar",
    qEditorTitle: "Redigera: {0}",

    maxLength: "Max längd",
    //survey
    showTitle: "Visa/dölj titel",
    locale: "Standard språk",
    mode: "Läge (redigera/läsa enbart)",
    clearInvisibleValues: "Rensa osynliga värden",
    cookieName: "Kaknamn (för att inaktivera kör enkäten två gånger lokalt)",
    sendResultOnPageNext: "Skicka enkät resultatet till nästa sida",
    storeOthersAsComment: "Lagra 'andra' värden i ett separat fält",
    showPageTitles: "Visa sidtitel",
    showPageNumbers: "Visa sidnummer",
    pagePrevText: "Föregående",
    pageNextText: "Nästa",
    completeText: "Färdig",
    startSurveyText: "Start knapp text",
    showNavigationButtons: "Visa navigationsknappar (standard navigering)",
    showPrevButton:
      "Visa föregående knapp (användaren kan gå återgå till föregående sida)",
    firstPageIsStarted: "Den första sidan i enkäten är startsidan.",
    showCompletedPage: "Visa den slutförda sidan på slutet (completedHtml)",
    goNextPageAutomatic:
      "Vid besvarande av alla frågor, gå till nästa sida automatiskt",
    showProgressBar: "Visa händelsförlopp",
    questionTitleLocation: "Fråga titel placering",
    requiredText: "Var vänlig skriv en text",
    questionStartIndex: "Fråga start index (1, 2 eller 'A', 'a')",
    showQuestionNumbers: "Visa frågenummer",
    questionTitleTemplate:
      "Fråga titel mall, standard är: '{no}. {require} {title}'",
    questionErrorLocation: "Fråga fel placerad",
    focusFirstQuestionAutomatic:
      "Fokusera på första frågan vid ändring av sidan",
    questionsOrder: "Element ordning på sidan",
    maxTimeToFinish: "Max tid för att slutföra enkäten",
    maxTimeToFinishPage: "Max tid för att göra färdigt en sida i enkäten",
    showTimerPanel: "Visa tidtagning",
    showTimerPanelMode: "Visa tidtagning läge",
    renderMode: "Rendering läge",
    allowAddPanel: "Tillåt att lägga till panel",
    allowRemovePanel: "Tillåt att ta bort panel",
    panelAddText: "Lägg till panel text",
    panelRemoveText: "Ta bort panel text",
    isSinglePage: "Visa alla element på en sida",

    tabs: {
      general: "Generellt",
      fileOptions: "Alternativ",
      html: "Html-editor",
      columns: "Kolumner",
      rows: "Rader",
      choices: "Välj",
      items: "Element",
      visibleIf: "Synlig",
      enableIf: "Tillgänlig hvis",
      rateValues: "Ornda värden",
      choicesByUrl: "Välj från webben",
      matrixChoices: "Standard val",
      multipleTextItems: "Text indata",
      validators: "Valideringar",
      navigation: "Navigering",
      question: "Fråga",
      completedHtml: "Fullförd Html",
      loadingHtml: "Laddar Html",
      timer: "Tidtagare/Quiz",
      triggers: "Triggare",
      templateTitle: "Mall titel",
    },
    editProperty: "Redigera egenskap '{0}'",
    items: "[ Element: {0} ]",

    enterNewValue: "Vänligen skriv in ett värde.",
    noquestions: "Det finns ingen fråga i enkäten.",
    createtrigger: "Vänligen skapa en trigger",
    triggerOn: "På ",
    triggerMakePagesVisible: "Synligör sidor:",
    triggerMakeQuestionsVisible: "Synligör element:",
    triggerCompleteText: "Avsluta enkät vid verkställ.",
    triggerNotSet: "Trigger är inte satt",
    triggerRunIf: "Kör ",
    triggerSetToName: "Ändra värden av: ",
    triggerFromName: "Kopiera värden från: ",
    triggerRunExpression: "Kör detta uttryck:",
    triggerSetValue: "till: ",
    triggerIsVariable: "Var vänligen skriv ett giltigt uttryck.",
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "inherit",
    show: "show",
    hide: "hide",
    default: "default",
    initial: "initial",
    random: "random",
    collapsed: "collapsed",
    expanded: "expanded",
    none: "none",
    asc: "ascending",
    desc: "descending",
    indeterminate: "indeterminate",
    decimal: "decimal",
    currency: "currency",
    percent: "percent",
    firstExpanded: "firstExpanded",
    off: "off",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "list",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "horizontal",
    vertical: "vertical",
    top: "top",
    bottom: "bottom",
    topBottom: "top and bottom",
    left: "left",
    color: "color",
    date: "date",
    datetime: "datetime",
    "datetime-local": "datetime-local",
    email: "email",
    month: "month",
    number: "number",
    password: "password",
    range: "range",
    tel: "tel",
    text: "text",
    time: "time",
    url: "url",
    week: "week",
    hidden: "hidden",
    on: "on",
    onPage: "onPage",
    edit: "edit",
    display: "display",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "all",
    page: "page",
    survey: "survey",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged",
  },
  //Operators
  op: {
    empty: "is empty",
    notempty: "is not empty",
    equal: "equals",
    notequal: "not equals",
    contains: "contains",
    notcontains: "not contains",
    greater: "greater",
    less: "less",
    greaterorequal: "greater or equals",
    lessorequal: "less or equals",
  },
  //Embed window
  ew: {
    angular: "Använd Angular version",
    jquery: "Använd jQuery version",
    knockout: "Använd Knockout version",
    react: "Använd React version",
    vue: "Använd Vue version",
    bootstrap: "För bootstrap framework",
    standard: "Ingen bootstrap",
    showOnPage: "Visa enkät på en sida",
    showInWindow: "Visa enkäten i ett nytt fönster",
    loadFromServer: "Hämta enkäten som JSON från servern",
    titleScript: "Scripts och styles",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript",
  },
  //Test Survey
  ts: {
    selectPage: "Välj sida för att testa den:",
    showInvisibleElements: "Visa osynliga element",
  },
  validators: {
    answercountvalidator: "answer count",
    emailvalidator: "e-mail",
    expressionvalidator: "expression",
    numericvalidator: "numeric",
    regexvalidator: "regex",
    textvalidator: "text",
  },
  triggers: {
    completetrigger: "Enkät slutförd",
    setvaluetrigger: "sätt värde",
    copyvaluetrigger: "kopiera värde",
    runexpressiontrigger: "Kör uttryck",
    visibletrigger: "ändra synlighet",
  },
  //Properties
  p: {
    name: "name",
    title: {
      name: "title",
      title: "Lämna den tom, ifall det är samma som 'Name'",
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
    minValue: "minimum value",
    maxValue: "maximum value",
    minLength: "minumum length",
    maxLength: "maximum length",
    allowDigits: "allow digits",
    minCount: "minumum count",
    maxCount: "maximum count",
    regex: "regular expression",
  },
};
editorLocalization.locales["sv"] = svStrings;
