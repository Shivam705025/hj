import { Base, PageModel, property, SurveyModel, ComputedUpdater, settings, IPage } from "survey-core";
import { CreatorBase } from "../../creator-base";
import { DragDropSurveyElements } from "survey-core";
import "./designer.scss";
import { getLocString } from "../../editorLocalization";
import { PagesController } from "../../pages-controller";

export const initialSettingsAllowShowEmptyTitleInDesignMode = settings.allowShowEmptyTitleInDesignMode;

export class TabDesignerViewModel extends Base {
  private widthUpdater: ComputedUpdater;
  private checkNewPageHandler: (sender: SurveyModel, options: any) => void;
  private surveyOnPropertyChanged: (sender: SurveyModel, options: any) => void;
  private pagesControllerValue: PagesController;

  @property() newPage: PageModel;
  @property({ defaultValue: false }) showNewPage: boolean;
  @property() pageCount: number;
  @property() withModifier: string;
  @property() showPlaceholder: boolean;
  public creator: CreatorBase;

  private createNewPage() {
    const newPage: PageModel = this.survey.createNewPage("");
    this.creator.setNewNames(newPage);
    newPage.onFirstRendering();
    newPage.updateCustomWidgets();
    newPage.setWasShown(true);
    newPage.setSurveyImpl(this.survey);
    newPage.updateElementCss();
    var checkNewElementHandler = (sender: SurveyModel, options: any) => {
      if (options.name === "elements" && newPage.elements.length > 0) {
        newPage.onPropertyChanged.remove(checkNewElementHandler);
        newPage.showTitle = true;
        newPage.showDescription = true;
        if (this.survey.pages.indexOf(newPage) > -1) return;
        this.creator.addPage(newPage);
      }
    };
    newPage.num = this.survey.pages.length + 1;
    newPage.onPropertyChanged.add(checkNewElementHandler);
    this.newPage = newPage;
    DragDropSurveyElements.newGhostPage = newPage;
  }
  private get canShowNewPage(): boolean {
    if (!this.survey || this.creator.pageEditMode === "single") return false;
    if (this.creator.pageEditMode === "bypage") return true;
    const pages: PageModel[] = this.survey.pages;
    return pages.length === 0 || pages[pages.length - 1].elements.length > 0;
  }

  constructor(creator: CreatorBase) {
    super();
    this.creator = creator;
    this.pagesControllerValue = new PagesController(creator);
    this.initSurvey();
  }
  get survey() {
    return this.creator.survey;
  }
  public get pagesController(): PagesController {
    return this.pagesControllerValue;
  }
  public get isToolboxVisible(): boolean {
    return this.creator.showToolboxValue && (this.creator.toolboxLocation === "right" || this.creator.toolboxLocation === "left");
  }
  public get placeholderText(): string {
    return getLocString("ed.surveyPlaceHolder");
  }

  public initSurvey() {
    if (!this.survey) return;
    this.showNewPage = false;
    this.newPage = undefined;
    this.checkNewPageHandler = (sender: SurveyModel, options: any) => {
      this.checkNewPage();
    };
    this.surveyOnPropertyChanged = (sender: SurveyModel, options: any) => {
      if (options.name !== "pages") return;
      this.checkNewPage();
      if (this.newPage) {
        this.newPage.num = this.survey.pages.length + 1;
      }
      this.pagesController.raisePagesChanged();
    };
    this.survey.onPropertyChanged.add(this.surveyOnPropertyChanged);
    this.survey.onQuestionAdded.add(this.checkNewPageHandler);
    this.survey.onQuestionRemoved.add(this.checkNewPageHandler);
    this.survey.onPanelAdded.add(this.checkNewPageHandler);
    this.survey.onPanelRemoved.add(this.checkNewPageHandler);
    this.checkNewPage();
    this.widthUpdater && this.widthUpdater.dispose();
    this.widthUpdater = new ComputedUpdater<string>(() => {
      return this.survey.calculateWidthMode();
    });
    this.withModifier = <any>this.widthUpdater;
    this.pagesController.onSurveyChanged();
  }
  public dispose() {
    super.dispose();
    this.survey.onPropertyChanged.remove(this.surveyOnPropertyChanged);
    this.survey.onQuestionAdded.remove(this.checkNewPageHandler);
    this.survey.onQuestionRemoved.remove(this.checkNewPageHandler);
    this.survey.onPanelAdded.remove(this.checkNewPageHandler);
    this.survey.onPanelRemoved.remove(this.checkNewPageHandler);
  }

  private checkNewPage() {
    const showPlaceholder = this.survey.getAllQuestions().length === 0 && this.survey.pageCount === 0;
    this.showPlaceholder = showPlaceholder;
    this.pageCount = this.survey.pageCount;
    if (this.showPlaceholder || this.canShowNewPage) {
      const pages = this.survey.pages;
      if (!this.newPage || (pages.length > 0 && this.newPage === pages[pages.length - 1])) {
        this.createNewPage();
        this.showNewPage = true;
      }
      this.newPage.showTitle = !showPlaceholder;
      this.newPage.showDescription = !showPlaceholder;
    } else {
      this.showNewPage = false;
      this.newPage = undefined;
    }
  }

  public clickDesigner() {
    this.creator.selectedElement = this.creator.survey;
  }
  public getDesignerCss(): string {
    return this.survey.css.container + " " + this.survey.css.container + "--" + this.withModifier;
  }
  public getRootCss(): string {
    let rootCss = this.survey.css.root;
    if (this.creator.showPageNavigator && this.survey.pageCount > 1 || this.creator.pageEditMode === "bypage") {
      rootCss += " svc-tab-designer--with-page-navigator";
    }
    if (this.showPlaceholder) {
      rootCss += " svc-tab-designer--with-place-holder";
    }
    return rootCss;
  }
}