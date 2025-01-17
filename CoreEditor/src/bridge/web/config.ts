import { WebModule } from '../webModule';
import { InvisiblesBehavior } from '../../config';
import { TabKeyBehavior } from '../../modules/indentation';

import {
  setTheme,
  setFontFamily,
  setFontSize,
  setShowLineNumbers,
  setShowActiveLineIndicator,
  setInvisiblesBehavior,
  setTypewriterMode,
  setFocusMode,
  setLineWrapping,
  setLineHeight,
  setDefaultLineBreak,
  setTabKeyBehavior,
  setIndentUnit,
  setSuggestWhileTyping,
} from '../../modules/config';

/**
 * @shouldExport true
 * @invokePath config
 * @overrideModuleName WebBridgeConfig
 */
export interface WebModuleConfig extends WebModule {
  setTheme({ name }: { name: string }): void;
  setFontFamily({ fontFamily }: { fontFamily: string }): void;
  setFontSize({ fontSize }: { fontSize: number }): void;
  setShowLineNumbers({ enabled }: { enabled: boolean } ): void;
  setShowActiveLineIndicator({ enabled }: { enabled: boolean }): void;
  setInvisiblesBehavior({ behavior }: { behavior: InvisiblesBehavior }): void;
  setTypewriterMode({ enabled }: { enabled: boolean }): void;
  setFocusMode({ enabled }: { enabled: boolean }): void;
  setLineWrapping({ enabled }: { enabled: boolean }): void;
  setLineHeight({ lineHeight }: { lineHeight: number }): void;
  setDefaultLineBreak({ lineBreak }: { lineBreak?: string }): void;
  setTabKeyBehavior({ behavior }: { behavior: TabKeyBehavior }): void;
  setIndentUnit({ unit }: { unit: string }): void;
  setSuggestWhileTyping({ enabled }: { enabled: boolean }): void;
}

export class WebModuleConfigImpl implements WebModuleConfig {
  setTheme({ name }: { name: string }): void {
    setTheme(name);
  }

  setFontFamily({ fontFamily }: { fontFamily: string }): void {
    setFontFamily(fontFamily);
  }

  setFontSize({ fontSize }: { fontSize: number }): void {
    setFontSize(fontSize);
  }

  setShowLineNumbers({ enabled }: { enabled: boolean }): void {
    setShowLineNumbers(enabled);
  }

  setShowActiveLineIndicator({ enabled }: { enabled: boolean }): void {
    setShowActiveLineIndicator(enabled);
  }

  setInvisiblesBehavior({ behavior }: { behavior: InvisiblesBehavior }): void {
    setInvisiblesBehavior(behavior, true);
  }

  setTypewriterMode({ enabled }: { enabled: boolean }): void {
    setTypewriterMode(enabled);
  }

  setFocusMode({ enabled }: { enabled: boolean }): void {
    setFocusMode(enabled);
  }

  setLineWrapping({ enabled }: { enabled: boolean }): void {
    setLineWrapping(enabled);
  }

  setLineHeight({ lineHeight }: { lineHeight: number }): void {
    setLineHeight(lineHeight);
  }

  setDefaultLineBreak({ lineBreak }: { lineBreak?: string }): void {
    setDefaultLineBreak(lineBreak);
  }

  setTabKeyBehavior({ behavior }: { behavior: TabKeyBehavior }): void {
    setTabKeyBehavior(behavior);
  }

  setIndentUnit({ unit }: { unit: string }): void {
    setIndentUnit(unit);
  }

  setSuggestWhileTyping({ enabled }: { enabled: boolean }): void {
    setSuggestWhileTyping(enabled);
  }
}
