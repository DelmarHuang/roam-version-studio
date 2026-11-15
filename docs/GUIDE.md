<a id="top"></a>

# Version Studio

Compare your drafts. See your thinking evolve. · 对比笔记版本，看见思路变化。

[English](#en) · [中文](#zh) · [Italiano](#it) · [Deutsch](#de) · [Français](#fr) · [Español](#es)

| Section · 章节 | English | 中文 | Italiano | Deutsch | Français | Español |
| --- | --- | --- | --- | --- | --- | --- |
| Overview · 概览 | [Overview](#en-overview) | [概览](#zh-overview) | [Panoramica](#it-overview) | [Überblick](#de-overview) | [Présentation](#fr-overview) | [Presentación](#es-overview) |
| Getting started · 快速上手 | [Getting started](#en-start) | [快速上手](#zh-start) | [Per iniziare](#it-start) | [Erste Schritte](#de-start) | [Prise en main](#fr-start) | [Primeros pasos](#es-start) |
| Features · 功能指南 | [Features](#en-features) | [功能指南](#zh-features) | [Funzionalità](#it-features) | [Funktionen](#de-features) | [Fonctionnalités](#fr-features) | [Funciones](#es-features) |
| Commands & shortcuts · 命令与快捷键 | [Commands & shortcuts](#en-shortcuts) | [命令与快捷键](#zh-shortcuts) | [Comandi e scorciatoie](#it-shortcuts) | [Befehle und Tastenkürzel](#de-shortcuts) | [Commandes et raccourcis](#fr-shortcuts) | [Comandos y atajos](#es-shortcuts) |
| Settings · 设置 | [Settings](#en-settings) | [设置](#zh-settings) | [Impostazioni](#it-settings) | [Einstellungen](#de-settings) | [Réglages](#fr-settings) | [Ajustes](#es-settings) |
| Data & usage · 数据与使用说明 | [Data & usage](#en-data) | [数据与使用说明](#zh-data) | [Dati e utilizzo](#it-data) | [Daten und Nutzung](#de-data) | [Données et utilisation](#fr-data) | [Datos y uso](#es-data) |
| Frequently asked questions · 常见问题 | [Frequently asked questions](#en-faq) | [常见问题](#zh-faq) | [Domande frequenti](#it-faq) | [Häufige Fragen](#de-faq) | [Questions fréquentes](#fr-faq) | [Preguntas frecuentes](#es-faq) |
| More plugins · 同系列插件 | [More plugins](#en-more) | [同系列插件](#zh-more) | [Altri plugin](#it-more) | [Weitere Plugins](#de-more) | [Autres plugins](#fr-more) | [Otros plugins](#es-more) |
| Credits · 致谢 | [Credits](#en-credits) | [致谢](#zh-credits) | [Ringraziamenti](#it-credits) | [Danksagung](#de-credits) | [Remerciements](#fr-credits) | [Agradecimientos](#es-credits) |

---

<a id="en"></a>

## English

<a id="en-overview"></a>

### Overview

Version Studio makes every version of a note traceable and comparable, so you can rewrite any idea with confidence.

<a id="en-start"></a>

### Getting started

1. Open **Settings → Roam Depot**, find **Version Studio** and install it.
2. Right-click a block bullet and choose **Version Studio…**.
3. Compare its versions, or use **New version…** to start another draft.

<a id="en-features"></a>

### Features

[Read and compare versions](#en-compare) · [Edit](#en-edit) · [Create a new version](#en-new-version) · [Change the version shown in your page](#en-switch-version) · [Revision notes](#en-revision-notes)

<a id="en-compare"></a>

#### Read and compare versions

- All versions of the block appear as cards V1, V2, V3… in creation order. Choose **Oldest first** or **Newest first**; numbering always stays chronological.
- The **current** version (the one shown in your page) is highlighted with a coloured bar and a **Current** badge. Click **Current: Vn** in the header to jump to it.
- **Timeline** (default) compares each version with the one before it. **Fixed baseline** compares every version with one version you choose. **Set comparison baseline** on a card does this in one click.
- Deleted text is struck through; added text is underlined. **Show changes** hides or shows comparisons. **Compare children** includes child blocks in the comparison (revision notes are left out).
- After editing, click **Refresh changes**. **Reload versions** also picks up new versions.

<a id="en-edit"></a>

#### Edit

Click a version's text to edit it with Roam's own editor. `[[` page search, `((` block search, children and indentation all work as usual, and changes save immediately. Versions are editable drafts, not frozen snapshots.

<a id="en-new-version"></a>

#### Create a new version

Use **New version…** in the header or **New version from this…** on a card. The text is always copied. **Include children in new version** (on by default) also copies child blocks, without revision notes. Version Studio uses Roam's own **Add version** action, then places the cursor at the end of the new version so you can start typing.

<a id="en-switch-version"></a>

#### Change the version shown in your page

- **Use in original block** switches your page to this version and keeps the panel open.
- **Go to version** switches, scrolls to the block and closes the panel.

Both use Roam's own version controls and never overwrite text.

<a id="en-revision-notes"></a>

#### Revision notes

**Add revision note** creates a note under the version:

- Revision note
  - Reason: …
  - Evidence
    - Source: …
    - Reference: …
    - Impact: …

**Show revision note** opens an existing note. Edit the note's wording in **Note templates** in the panel or in Settings. Templates apply to new notes only. Optional placeholders: `{versionUid}` (this version) and `{sourceUid}` (the block that opened the panel).

<a id="en-shortcuts"></a>

### Commands & shortcuts

- Right-click a block bullet (or a numbered version bullet) and choose **Version Studio…**. It appears right below Roam's own **Add version**, which keeps working as before.
- Or put the cursor in a block and run **Version Studio: Manage versions** from the command palette.
- Or press **Ctrl+Shift+Comma**. You can change or turn off the shortcut in Settings.
- To close, click **Close** or click outside the panel.

| Shortcut | Action |
| --- | --- |
| Ctrl+Shift+Comma | Open Version Studio for the focused block; configurable in Settings. |

<a id="en-settings"></a>

### Settings

In Settings → Version Studio: **Language** (Auto follows your browser), **Open shortcut**, and the revision-note templates. A new language applies the next time you open the panel; reload the extension to update the Settings tab and the command name too.

<a id="en-data"></a>

### Data & usage

- Edits made in Roam’s native editor save immediately to your graph. Creating versions and revision notes also writes to the graph; saving templates stores the corresponding configuration.
- It makes no external network requests and does not scan the whole graph. Editors are loaded near the visible area to reduce rendering work.
- Copying and child comparison are limited to **600 blocks per version**. Text comparison covers the first **80,000 characters**.

<a id="en-faq"></a>

### Frequently asked questions

**Why has a comparison not changed after editing?** Click **Refresh changes**. Use **Reload versions** if versions were added while the panel was open.

**Are versions frozen snapshots?** No. Each version can be edited with Roam’s native editor, and edits save immediately.

<a id="en-more"></a>

### More plugins

- **Folio** — Warm, magazine-inspired typography and modular tools for your Roam workspace.
- **Reading Desk** — Bring reading, annotations and ideas together across your Roam pages.

Install each plugin separately from Roam Depot.

<a id="en-credits"></a>

### Credits

Thanks to Roam Research and the Roam community.

[↑ Back to top](#top)

---

<a id="zh"></a>

## 中文

<a id="zh-overview"></a>

### 概览

Version Studio 让笔记的每个版本都可追溯、可比较，放心改写每一个想法。

<a id="zh-start"></a>

### 快速上手

1. 打开 **Settings → Roam Depot**，搜索并安装 **Version Studio**。
2. 右键点击块圆点，选择 **Version Studio…**。
3. 浏览和比较已有版本，或点击**新建版本…**开始新草稿。

<a id="zh-features"></a>

### 功能指南

[阅读与比较版本](#zh-compare) · [编辑](#zh-edit) · [新建版本](#zh-new-version) · [切换页面中显示的版本](#zh-switch-version) · [修改说明](#zh-revision-notes)

<a id="zh-compare"></a>

#### 阅读与比较版本

- 这个块的所有版本按创建时间显示为 V1、V2、V3… 卡片。可选 **从旧到新** 或 **从新到旧**，编号始终按时间先后。
- **当前**版本（页面中正在显示的那个）带有彩色竖条和 **当前** 标签。点击顶部的 **当前：Vn** 可直接跳到它。
- **时间线**（默认）：每个版本与前一个版本比较。**固定基准**：所有版本与你选定的版本比较。卡片上的 **设为比较基准** 一键完成。
- 删除的文字带删除线，新增的文字带下划线。**显示差异** 控制是否显示比较；**比较子块** 把子块也纳入比较（不含修改说明）。
- 编辑后点击 **刷新差异**。**重新加载版本** 还会读取新增的版本。

<a id="zh-edit"></a>

#### 编辑

直接点击版本文字，用 Roam 自带的编辑器修改。`[[` 页面搜索、`((` 块搜索、子块和缩进都照常可用，修改立即保存。版本是可编辑的草稿，不是冻结的快照。

<a id="zh-new-version"></a>

#### 新建版本

使用顶部的 **新建版本…** 或卡片上的 **以此为基础新建版本…**。文字总会被复制；**新版本包含子块**（默认开启）会一并复制子块，但不含修改说明。Version Studio 调用 Roam 自带的 **Add version** 操作，然后把光标放在新版本末尾，直接开始输入。

<a id="zh-switch-version"></a>

#### 切换页面中显示的版本

- **在原始块中使用**：把页面切换到这个版本，面板保持打开。
- **跳转到版本**：切换后滚动到该块并关闭面板。

两者都使用 Roam 自带的版本控件，绝不覆盖文字。

<a id="zh-revision-notes"></a>

#### 修改说明

**添加修改说明** 会在该版本下创建：

- 修改说明
  - 修改原因：…
  - 证据
    - 来源：…
    - 参考：…
    - 影响：…

**查看修改说明** 打开已有说明。说明的文字可在面板的 **说明模板** 或设置中修改，只对新建的说明生效。可选占位符：`{versionUid}`（当前这个版本）和 `{sourceUid}`（打开面板的块）。

<a id="zh-shortcuts"></a>

### 命令与快捷键

- 右键点击块的圆点（或带编号的版本圆点），选择 **Version Studio…**。它就在 Roam 自带的 **Add version** 下方，原有功能不受影响。
- 或者把光标放在块中，在命令面板运行 **Version Studio：管理版本**。
- 或者按 **Ctrl+Shift+Comma**。快捷键可以在设置中修改或关闭。
- 点击 **关闭** 或点击面板外部即可关闭。

| 快捷键 | 操作 |
| --- | --- |
| Ctrl+Shift+Comma | 打开光标所在块的 Version Studio，可在设置中修改或关闭。 |

<a id="zh-settings"></a>

### 设置

设置 → Version Studio：**语言**（Auto 跟随浏览器）、**打开快捷键** 和修改说明模板。切换语言后，下次打开面板即生效；重新加载插件后，设置页和命令名称也会更新。

<a id="zh-data"></a>

### 数据与使用说明

- 在 Roam 原生编辑器中修改内容会立即保存到图谱。新建版本和修改说明也会写入图谱；保存模板会保存相应配置。
- 不发起外部网络请求，不扫描整个图谱。仅加载可见区域附近的编辑器，减少渲染开销。
- 复制和子块比较每个版本最多 **600 个块**；文字比较处理前 **80,000 个字符**。

<a id="zh-faq"></a>

### 常见问题

**编辑后差异为什么没更新？** 点击**刷新差异**。面板打开期间新增了版本时，使用**重新加载版本**。

**版本是不可修改的快照吗？** 不是。各版本都可用 Roam 原生编辑器修改，并立即保存。

<a id="zh-more"></a>

### 同系列插件

- **Folio** — 用温暖的杂志式排版和可独立启停的组件，打造自己的 Roam 知识空间。
- **Reading Desk** — 把 Roam 页面中的阅读、批注与思考汇聚一处。

各插件在 Roam Depot 中独立安装。

<a id="zh-credits"></a>

### 致谢

感谢 Roam Research 与 Roam 社区。

[↑ 返回顶部](#top)

---

<a id="it"></a>

## Italiano

<a id="it-overview"></a>

### Panoramica

Version Studio rende ogni versione di una nota tracciabile e confrontabile, per riscrivere ogni idea in tutta tranquillità.

<a id="it-start"></a>

### Per iniziare

1. Apri **Settings → Roam Depot**, cerca **Version Studio** e installalo.
2. Fai clic destro sul punto elenco di un blocco e scegli **Version Studio…**.
3. Confronta le versioni o usa **Nuova versione…** per iniziare un’altra bozza.

<a id="it-features"></a>

### Funzionalità

[Leggere e confrontare le versioni](#it-compare) · [Modificare](#it-edit) · [Creare una nuova versione](#it-new-version) · [Cambiare la versione mostrata nella pagina](#it-switch-version) · [Note di revisione](#it-revision-notes)

<a id="it-compare"></a>

#### Leggere e confrontare le versioni

- Tutte le versioni del blocco compaiono come schede V1, V2, V3… in ordine di creazione. Scegli **Prima le più vecchie** o **Prima le più recenti**; la numerazione resta cronologica.
- La versione **attuale** (quella mostrata nella pagina) è evidenziata da una barra colorata e dal badge **Attuale**. Fai clic su **Attuale: Vn** in alto per raggiungerla.
- **Cronologia** (predefinita) confronta ogni versione con la precedente. **Base fissa** confronta tutte le versioni con una versione scelta. **Imposta come base di confronto** su una scheda lo fa con un clic.
- Il testo eliminato è barrato; quello aggiunto è sottolineato. **Mostra modifiche** mostra o nasconde i confronti. **Confronta i figli** include i blocchi figli (escluse le note di revisione).
- Dopo una modifica, fai clic su **Aggiorna modifiche**. **Ricarica versioni** recupera anche le nuove versioni.

<a id="it-edit"></a>

#### Modificare

Fai clic sul testo di una versione per modificarlo con l’editor di Roam. La ricerca di pagine `[[`, la ricerca di blocchi `((`, i figli e i rientri funzionano come sempre, e le modifiche vengono salvate subito. Le versioni sono bozze modificabili, non istantanee bloccate.

<a id="it-new-version"></a>

#### Creare una nuova versione

Usa **Nuova versione…** in alto o **Nuova versione da questa…** su una scheda. Il testo viene sempre copiato. **Includi i figli nella nuova versione** (attivo per impostazione predefinita) copia anche i blocchi figli, escluse le note di revisione. Version Studio usa il comando **Add version** di Roam, poi posiziona il cursore alla fine della nuova versione così puoi iniziare subito a scrivere.

<a id="it-switch-version"></a>

#### Cambiare la versione mostrata nella pagina

- **Usa nel blocco originale** mostra questa versione nella pagina e lascia aperto il pannello.
- **Vai alla versione** la mostra, scorre fino al blocco e chiude il pannello.

Entrambi usano i controlli di versione di Roam e non sovrascrivono mai il testo.

<a id="it-revision-notes"></a>

#### Note di revisione

**Aggiungi nota di revisione** crea una nota sotto la versione:

- Nota di revisione
  - Motivo: …
  - Evidenze
    - Fonte: …
    - Riferimento: …
    - Impatto: …

**Mostra nota di revisione** apre una nota esistente. Modifica il testo predefinito in **Modelli di nota** nel pannello o nelle impostazioni; i modelli valgono solo per le nuove note. Segnaposto facoltativi: `{versionUid}` (questa versione) e `{sourceUid}` (il blocco da cui è stato aperto il pannello).

<a id="it-shortcuts"></a>

### Comandi e scorciatoie

- Fai clic destro sul punto elenco di un blocco (o su un punto di versione numerato) e scegli **Version Studio…**. La voce compare subito sotto **Add version** di Roam, che continua a funzionare come prima.
- Oppure posiziona il cursore in un blocco ed esegui **Version Studio: gestisci versioni** dalla palette dei comandi.
- Oppure premi **Ctrl+Shift+Comma**. Puoi cambiare o disattivare la scorciatoia nelle impostazioni.
- Per chiudere, fai clic su **Chiudi** o fuori dal pannello.

| Scorciatoia | Azione |
| --- | --- |
| Ctrl+Shift+Comma | Apre Version Studio per il blocco attivo; modificabile nelle impostazioni. |

<a id="it-settings"></a>

### Impostazioni

In Impostazioni → Version Studio: **Lingua** (Auto segue il browser), **Scorciatoia di apertura** e i modelli di nota. Una nuova lingua si applica alla prossima apertura del pannello; ricarica l’estensione per aggiornare anche la scheda delle impostazioni e il nome del comando.

<a id="it-data"></a>

### Dati e utilizzo

- Le modifiche nell’editor nativo di Roam vengono salvate subito nel grafo. Anche nuove versioni e note di revisione scrivono nel grafo; il salvataggio dei modelli conserva la relativa configurazione.
- Non invia richieste di rete esterne e non analizza l’intero grafo. Carica gli editor vicini all’area visibile per ridurre il lavoro di rendering.
- Copia e confronto dei figli: massimo **600 blocchi per versione**. Confronto del testo: primi **80.000 caratteri**.

<a id="it-faq"></a>

### Domande frequenti

**Perché il confronto non cambia dopo una modifica?** Fai clic su **Aggiorna modifiche**. Usa **Ricarica versioni** se sono state aggiunte versioni mentre il pannello era aperto.

**Le versioni sono istantanee bloccate?** No. Ogni versione si modifica con l’editor nativo di Roam e viene salvata subito.

<a id="it-more"></a>

### Altri plugin

- **Folio** — Tipografia calda in stile rivista e strumenti modulari per il tuo spazio Roam.
- **Reading Desk** — Riunisci lettura, annotazioni e idee nelle tue pagine Roam.

Installa ogni plugin separatamente da Roam Depot.

<a id="it-credits"></a>

### Ringraziamenti

Grazie a Roam Research e alla comunità Roam.

[↑ Torna su](#top)

---

<a id="de"></a>

## Deutsch

<a id="de-overview"></a>

### Überblick

Version Studio macht jede Version einer Notiz nachvollziehbar und vergleichbar, damit Sie jede Idee unbesorgt umschreiben können.

<a id="de-start"></a>

### Erste Schritte

1. Öffne **Settings → Roam Depot**, suche **Version Studio** und installiere es.
2. Klicke mit der rechten Maustaste auf einen Blockpunkt und wähle **Version Studio…**.
3. Vergleiche Versionen oder beginne mit **Neue Version…** einen weiteren Entwurf.

<a id="de-features"></a>

### Funktionen

[Versionen lesen und vergleichen](#de-compare) · [Bearbeiten](#de-edit) · [Neue Version erstellen](#de-new-version) · [Die auf der Seite angezeigte Version wechseln](#de-switch-version) · [Revisionsnotizen](#de-revision-notes)

<a id="de-compare"></a>

#### Versionen lesen und vergleichen

- Alle Versionen des Blocks erscheinen als Karten V1, V2, V3… in Erstellungsreihenfolge. Wählen Sie **Älteste zuerst** oder **Neueste zuerst**; die Nummerierung bleibt chronologisch.
- Die **aktuelle** Version (die auf Ihrer Seite angezeigte) ist mit einem farbigen Balken und dem Hinweis **Aktuell** hervorgehoben. Ein Klick auf **Aktuell: Vn** oben springt direkt dorthin.
- **Zeitleiste** (Standard) vergleicht jede Version mit der vorherigen. **Feste Basis** vergleicht alle Versionen mit einer gewählten Version. **Als Vergleichsbasis festlegen** auf einer Karte erledigt das mit einem Klick.
- Gelöschter Text ist durchgestrichen, hinzugefügter unterstrichen. **Änderungen anzeigen** blendet Vergleiche ein oder aus. **Unterblöcke vergleichen** bezieht Unterblöcke ein (ohne Revisionsnotizen).
- Nach dem Bearbeiten klicken Sie auf **Änderungen aktualisieren**. **Versionen neu laden** holt auch neue Versionen.

<a id="de-edit"></a>

#### Bearbeiten

Klicken Sie auf den Text einer Version, um ihn mit Roams eigenem Editor zu bearbeiten. Seitensuche mit `[[`, Blocksuche mit `((`, Unterblöcke und Einrückung funktionieren wie gewohnt, und Änderungen werden sofort gespeichert. Versionen sind bearbeitbare Entwürfe, keine eingefrorenen Schnappschüsse.

<a id="de-new-version"></a>

#### Neue Version erstellen

Verwenden Sie **Neue Version…** oben oder **Neue Version hieraus…** auf einer Karte. Der Text wird immer kopiert. **Unterblöcke in die neue Version übernehmen** (standardmäßig aktiv) kopiert auch Unterblöcke, ohne Revisionsnotizen. Version Studio nutzt Roams eigene Aktion **Add version** und setzt den Cursor ans Ende der neuen Version, damit Sie sofort weiterschreiben können.

<a id="de-switch-version"></a>

#### Die auf der Seite angezeigte Version wechseln

- **Im ursprünglichen Block verwenden** zeigt diese Version auf Ihrer Seite an; das Panel bleibt offen.
- **Zur Version** wechselt, scrollt zum Block und schließt das Panel.

Beide nutzen Roams eigene Versionssteuerung und überschreiben nie Text.

<a id="de-revision-notes"></a>

#### Revisionsnotizen

**Revisionsnotiz hinzufügen** erstellt eine Notiz unter der Version:

- Revisionsnotiz
  - Grund: …
  - Belege
    - Quelle: …
    - Referenz: …
    - Auswirkung: …

**Revisionsnotiz anzeigen** öffnet eine vorhandene Notiz. Den Vorlagentext ändern Sie unter **Notizvorlagen** im Panel oder in den Einstellungen; Vorlagen gelten nur für neue Notizen. Optionale Platzhalter: `{versionUid}` (diese Version) und `{sourceUid}` (der Block, aus dem das Panel geöffnet wurde).

<a id="de-shortcuts"></a>

### Befehle und Tastenkürzel

- Klicken Sie mit der rechten Maustaste auf den Aufzählungspunkt eines Blocks (oder einen nummerierten Versionspunkt) und wählen Sie **Version Studio…**. Der Eintrag erscheint direkt unter Roams eigenem **Add version**, das unverändert funktioniert.
- Oder setzen Sie den Cursor in einen Block und führen Sie **Version Studio: Versionen verwalten** in der Befehlspalette aus.
- Oder drücken Sie **Ctrl+Shift+Comma**. Das Kürzel lässt sich in den Einstellungen ändern oder abschalten.
- Zum Schließen klicken Sie auf **Schließen** oder außerhalb des Panels.

| Tastenkürzel | Aktion |
| --- | --- |
| Ctrl+Shift+Comma | Öffnet Version Studio für den aktiven Block; in den Einstellungen anpassbar. |

<a id="de-settings"></a>

### Einstellungen

Unter Einstellungen → Version Studio: **Sprache** (Auto folgt dem Browser), **Tastenkürzel zum Öffnen** und die Notizvorlagen. Eine neue Sprache gilt ab dem nächsten Öffnen des Panels; laden Sie die Erweiterung neu, um auch den Einstellungs-Tab und den Befehlsnamen zu aktualisieren.

<a id="de-data"></a>

### Daten und Nutzung

- Änderungen im nativen Roam-Editor werden sofort im Graph gespeichert. Neue Versionen und Revisionsnotizen schreiben ebenfalls in den Graph; das Speichern von Vorlagen sichert die entsprechende Konfiguration.
- Keine externen Netzwerkanfragen und keine Suche im gesamten Graph. Editoren werden nahe dem sichtbaren Bereich geladen, um den Rendering-Aufwand zu verringern.
- Kopieren und Unterblockvergleich: höchstens **600 Blöcke pro Version**. Textvergleich: die ersten **80.000 Zeichen**.

<a id="de-faq"></a>

### Häufige Fragen

**Warum bleibt der Vergleich nach einer Bearbeitung gleich?** Klicke auf **Änderungen aktualisieren**. Nutze **Versionen neu laden**, wenn bei geöffnetem Panel Versionen hinzugefügt wurden.

**Sind Versionen unveränderliche Schnappschüsse?** Nein. Jede Version lässt sich im nativen Roam-Editor bearbeiten; Änderungen werden sofort gespeichert.

<a id="de-more"></a>

### Weitere Plugins

- **Folio** — Warme Typografie im Magazinstil und einzeln schaltbare Werkzeuge für Roam.
- **Reading Desk** — Verbinde Lesen, Anmerkungen und Gedanken auf deinen Roam-Seiten.

Installiere die Plugins einzeln aus Roam Depot.

<a id="de-credits"></a>

### Danksagung

Danke an Roam Research und die Roam-Community.

[↑ Nach oben](#top)

---

<a id="fr"></a>

## Français

<a id="fr-overview"></a>

### Présentation

Version Studio rend chaque version d’une note traçable et comparable : réécrivez vos idées en toute sérénité.

<a id="fr-start"></a>

### Prise en main

1. Ouvrez **Settings → Roam Depot**, recherchez **Version Studio** et installez-le.
2. Faites un clic droit sur la puce d’un bloc et choisissez **Version Studio…**.
3. Comparez les versions ou utilisez **Nouvelle version…** pour commencer un autre brouillon.

<a id="fr-features"></a>

### Fonctionnalités

[Lire et comparer les versions](#fr-compare) · [Modifier](#fr-edit) · [Créer une nouvelle version](#fr-new-version) · [Changer la version affichée dans la page](#fr-switch-version) · [Notes de révision](#fr-revision-notes)

<a id="fr-compare"></a>

#### Lire et comparer les versions

- Toutes les versions du bloc s’affichent sous forme de cartes V1, V2, V3… dans l’ordre de création. Choisissez **Plus anciennes d’abord** ou **Plus récentes d’abord** ; la numérotation reste chronologique.
- La version **actuelle** (celle affichée dans votre page) est mise en évidence par une barre de couleur et le badge **Actuelle**. Cliquez sur **Actuelle : Vn** en haut du panneau pour y accéder.
- **Chronologie** (par défaut) compare chaque version à la précédente. **Base fixe** compare toutes les versions à une version choisie. **Définir comme base de comparaison** sur une carte le fait en un clic.
- Le texte supprimé est barré ; le texte ajouté est souligné. **Afficher les modifications** affiche ou masque les comparaisons. **Comparer les enfants** inclut les blocs enfants (sans les notes de révision).
- Après une modification, cliquez sur **Actualiser les modifications**. **Recharger les versions** récupère aussi les nouvelles versions.

<a id="fr-edit"></a>

#### Modifier

Cliquez sur le texte d’une version pour le modifier avec l’éditeur de Roam. La recherche de pages `[[`, la recherche de blocs `((`, les enfants et l’indentation fonctionnent comme d’habitude, et tout est enregistré immédiatement. Les versions sont des brouillons modifiables, pas des instantanés figés.

<a id="fr-new-version"></a>

#### Créer une nouvelle version

Utilisez **Nouvelle version…** en haut du panneau ou **Nouvelle version à partir de celle-ci…** sur une carte. Le texte est toujours copié. **Inclure les enfants dans la nouvelle version** (activé par défaut) copie aussi les blocs enfants, sans les notes de révision. Version Studio utilise la commande **Add version** de Roam, puis place le curseur à la fin de la nouvelle version pour que vous puissiez écrire tout de suite.

<a id="fr-switch-version"></a>

#### Changer la version affichée dans la page

- **Utiliser dans le bloc d’origine** affiche cette version dans votre page et laisse le panneau ouvert.
- **Aller à la version** l’affiche, fait défiler jusqu’au bloc et ferme le panneau.

Les deux passent par les commandes de version de Roam et n’écrasent jamais de texte.

<a id="fr-revision-notes"></a>

#### Notes de révision

**Ajouter une note de révision** crée une note sous la version :

- Note de révision
  - Motif : …
  - Preuves
    - Source : …
    - Référence : …
    - Impact : …

**Afficher la note de révision** ouvre une note existante. Modifiez le contenu type dans **Modèles de note** du panneau ou dans les paramètres ; les modèles ne s’appliquent qu’aux nouvelles notes. Variables facultatives : `{versionUid}` (cette version) et `{sourceUid}` (le bloc qui a ouvert le panneau).

<a id="fr-shortcuts"></a>

### Commandes et raccourcis

- Faites un clic droit sur la puce d’un bloc (ou sur une puce de version numérotée) et choisissez **Version Studio…**. L’entrée apparaît juste sous **Add version**, la commande de Roam, qui fonctionne comme avant.
- Ou placez le curseur dans un bloc et lancez **Version Studio : gérer les versions** depuis la palette de commandes.
- Ou appuyez sur **Ctrl+Shift+Comma**. Le raccourci se modifie ou se désactive dans les paramètres.
- Pour fermer, cliquez sur **Fermer** ou en dehors du panneau.

| Raccourci | Action |
| --- | --- |
| Ctrl+Shift+Comma | Ouvre Version Studio pour le bloc actif ; modifiable dans les réglages. |

<a id="fr-settings"></a>

### Réglages

Dans Paramètres → Version Studio : **Langue** (Auto suit le navigateur), **Raccourci d’ouverture** et les modèles de note. Une nouvelle langue s’applique à la prochaine ouverture du panneau ; rechargez l’extension pour mettre aussi à jour l’onglet des paramètres et le nom de la commande.

<a id="fr-data"></a>

### Données et utilisation

- Les modifications dans l’éditeur natif de Roam sont immédiatement enregistrées dans le graphe. La création de versions et de notes de révision y écrit aussi ; les modèles sont conservés dans la configuration correspondante.
- Aucune requête réseau externe ni recherche dans tout le graphe. Les éditeurs proches de la zone visible sont chargés pour réduire le travail de rendu.
- Copie et comparaison des enfants : **600 blocs par version** au maximum. Comparaison du texte : les **80 000 premiers caractères**.

<a id="fr-faq"></a>

### Questions fréquentes

**Pourquoi la comparaison ne change-t-elle pas après une modification ?** Cliquez sur **Actualiser les modifications**. Utilisez **Recharger les versions** si des versions ont été ajoutées pendant que le panneau était ouvert.

**Les versions sont-elles des instantanés figés ?** Non. Chaque version peut être modifiée avec l’éditeur natif de Roam et les changements sont enregistrés immédiatement.

<a id="fr-more"></a>

### Autres plugins

- **Folio** — Une typographie chaleureuse inspirée des magazines et des outils modulaires pour Roam.
- **Reading Desk** — Réunissez lecture, annotations et idées dans vos pages Roam.

Installez chaque plugin séparément depuis Roam Depot.

<a id="fr-credits"></a>

### Remerciements

Merci à Roam Research et à la communauté Roam.

[↑ Retour en haut](#top)

---

<a id="es"></a>

## Español

<a id="es-overview"></a>

### Presentación

Version Studio hace que cada versión de una nota sea rastreable y comparable, para reescribir cada idea con tranquilidad.

<a id="es-start"></a>

### Primeros pasos

1. Abre **Settings → Roam Depot**, busca **Version Studio** e instálalo.
2. Haz clic derecho en la viñeta de un bloque y elige **Version Studio…**.
3. Compara las versiones o usa **Nueva versión…** para empezar otro borrador.

<a id="es-features"></a>

### Funciones

[Leer y comparar versiones](#es-compare) · [Editar](#es-edit) · [Crear una versión nueva](#es-new-version) · [Cambiar la versión que se muestra en la página](#es-switch-version) · [Notas de revisión](#es-revision-notes)

<a id="es-compare"></a>

#### Leer y comparar versiones

- Todas las versiones del bloque aparecen como tarjetas V1, V2, V3… en orden de creación. Elige **Más antiguas primero** o **Más recientes primero**; la numeración sigue siendo cronológica.
- La versión **actual** (la que se muestra en tu página) se resalta con una barra de color y la etiqueta **Actual**. Haz clic en **Actual: Vn** arriba para ir a ella.
- **Cronología** (predeterminado) compara cada versión con la anterior. **Base fija** compara todas las versiones con una que elijas. **Usar como base de comparación** en una tarjeta lo hace con un clic.
- El texto eliminado aparece tachado y el añadido, subrayado. **Mostrar cambios** muestra u oculta las comparaciones. **Comparar hijos** incluye los bloques hijos (sin las notas de revisión).
- Después de editar, haz clic en **Actualizar cambios**. **Recargar versiones** también recoge las versiones nuevas.

<a id="es-edit"></a>

#### Editar

Haz clic en el texto de una versión para editarlo con el editor de Roam. La búsqueda de páginas `[[`, la de bloques `((`, los hijos y la sangría funcionan como siempre, y los cambios se guardan de inmediato. Las versiones son borradores editables, no instantáneas congeladas.

<a id="es-new-version"></a>

#### Crear una versión nueva

Usa **Nueva versión…** arriba o **Nueva versión a partir de esta…** en una tarjeta. El texto siempre se copia. **Incluir los hijos en la nueva versión** (activado por defecto) copia también los bloques hijos, sin las notas de revisión. Version Studio usa la acción **Add version** de Roam y coloca el cursor al final de la nueva versión para que empieces a escribir enseguida.

<a id="es-switch-version"></a>

#### Cambiar la versión que se muestra en la página

- **Usar en el bloque original** muestra esta versión en tu página y deja el panel abierto.
- **Ir a la versión** la muestra, se desplaza hasta el bloque y cierra el panel.

Ambas usan los controles de versión de Roam y nunca sobrescriben texto.

<a id="es-revision-notes"></a>

#### Notas de revisión

**Añadir nota de revisión** crea una nota bajo la versión:

- Nota de revisión
  - Motivo: …
  - Evidencia
    - Fuente: …
    - Referencia: …
    - Impacto: …

**Mostrar nota de revisión** abre una nota existente. Cambia el texto predeterminado en **Plantillas de nota** del panel o en la configuración; las plantillas solo se aplican a notas nuevas. Variables opcionales: `{versionUid}` (esta versión) y `{sourceUid}` (el bloque desde el que se abrió el panel).

<a id="es-shortcuts"></a>

### Comandos y atajos

- Haz clic derecho en la viñeta de un bloque (o en una viñeta de versión numerada) y elige **Version Studio…**. Aparece justo debajo de **Add version**, la opción propia de Roam, que sigue funcionando como siempre.
- O coloca el cursor en un bloque y ejecuta **Version Studio: gestionar versiones** desde la paleta de comandos.
- O pulsa **Ctrl+Shift+Comma**. Puedes cambiar o desactivar el atajo en la configuración.
- Para cerrar, haz clic en **Cerrar** o fuera del panel.

| Atajo | Acción |
| --- | --- |
| Ctrl+Shift+Comma | Abre Version Studio para el bloque activo; configurable en los ajustes. |

<a id="es-settings"></a>

### Ajustes

En Configuración → Version Studio: **Idioma** (Auto sigue al navegador), **Atajo para abrir** y las plantillas de nota. Un idioma nuevo se aplica la próxima vez que abras el panel; recarga la extensión para actualizar también la pestaña de configuración y el nombre del comando.

<a id="es-data"></a>

### Datos y uso

- Los cambios en el editor nativo de Roam se guardan inmediatamente en el grafo. Crear versiones y notas de revisión también escribe en el grafo; guardar plantillas conserva la configuración correspondiente.
- No hace solicitudes de red externas ni recorre todo el grafo. Carga los editores cercanos al área visible para reducir el trabajo de renderizado.
- Copia y comparación de hijos: máximo **600 bloques por versión**. Comparación del texto: primeros **80.000 caracteres**.

<a id="es-faq"></a>

### Preguntas frecuentes

**¿Por qué no cambia la comparación después de editar?** Pulsa **Actualizar cambios**. Usa **Recargar versiones** si se añadieron versiones mientras el panel estaba abierto.

**¿Las versiones son instantáneas bloqueadas?** No. Puedes editar cada versión con el editor nativo de Roam y los cambios se guardan de inmediato.

<a id="es-more"></a>

### Otros plugins

- **Folio** — Tipografía cálida de revista y herramientas modulares para tu espacio Roam.
- **Reading Desk** — Reúne lectura, anotaciones e ideas en tus páginas de Roam.

Instala cada plugin por separado desde Roam Depot.

<a id="es-credits"></a>

### Agradecimientos

Gracias a Roam Research y a la comunidad de Roam.

[↑ Volver arriba](#top)
