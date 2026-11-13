/* Version Studio 1.4.2 — Roam Depot developer extension (self-contained).
 * No dependencies, network requests, graph-wide scans, background polling or raw DB writes.
 * Native edits are saved by Roam immediately. Remove/unload restores the native menu.
 */
// Interface strings. {name} placeholders are filled by t(); unknown placeholders are left as written.
const LANGUAGES = {auto:'Auto', en:'English', zh:'中文', fr:'Français', it:'Italiano', de:'Deutsch', es:'Español'};
// Shortcut key names that Shift would otherwise change (Shift+, types "<" on many layouts): match by physical key.
const NAMED_KEYS = {comma:{code:'Comma',key:',',label:'Comma'}, period:{code:'Period',key:'.',label:'Period'}, slash:{code:'Slash',key:'/',label:'Slash'}, semicolon:{code:'Semicolon',key:';',label:'Semicolon'}, quote:{code:'Quote',key:"'",label:'Quote'}, minus:{code:'Minus',key:'-',label:'Minus'}, equal:{code:'Equal',key:'=',label:'Equal'}, backquote:{code:'Backquote',key:'`',label:'Backquote'}, space:{code:'Space',key:' ',label:'Space'}};
const PUNCTUATION = {',':'comma', '.':'period', '/':'slash', ';':'semicolon', "'":'quote', '-':'minus', '=':'equal', '`':'backquote'};
const DATE_LOCALES = {en:'en-GB', zh:'zh-CN', fr:'fr-FR', it:'it-IT', de:'de-DE', es:'es-ES'};
const I18N = {
  en: {
    defaults: {noteTitle:'Revision note', reasonTemplate:'Reason: ', evidenceTemplate:'Source: \nReference: \nImpact: ', evidence:'Evidence'},
    errBusyReload:'Version Studio is writing. Wait before reloading.',
    errNoRender:'Version Studio: the native renderBlock API is unavailable.',
    errMissing:'This block is missing or the graph is not ready.',
    errPage:'Select a block, not a page.',
    errNoVersions:'No readable versions were found.',
    errSubtree:'This subtree exceeds {max} blocks. The operation stopped without changing the source.',
    errNoCurrent:'The current version could not be identified. Open the original block and try again.',
    errNoBullet:'The native block bullet was not found. Open the original block and try again.',
    errNoMenu:'The native Add version menu did not appear. No replacement block was created.',
    errMultiple:'Multiple new versions were detected. Copying stopped; refresh to inspect them.',
    errUnconfirmed:'The native action ran, but creation could not be confirmed. Refresh before retrying to avoid duplicates.',
    errCopyVerify:'A copied child could not be verified.',
    errPartial:'Version {uid} was created, but copying is incomplete. Inspect it before retrying. {detail}',
    errEditor:'Native editor unavailable: {detail}',
    errAdmin:'Only the graph administrator can change these settings.',
    errNoParent:'The original parent is unavailable. No version was changed.',
    errNotRendered:'The original block did not render in its parent.',
    errNoControls:'Native version controls are unavailable. Use the original version bullet to select a version.',
    errSwitch:'The native version switch could not be confirmed. No text was overwritten.',
    errWorker:'The diff worker is unavailable.',
    errDiffTimeout:'Diff timed out. Compare a smaller scope.',
    msgCreating:'Creating a native Roam version…',
    msgCopying:'Copying content blocks…',
    msgCreated:'New version created. Native edits save immediately.',
    msgCreatedCopied:'New version created; copied {count} content child blocks. Native edits save immediately.',
    msgNoteStored:'The revision note is stored under this version. Edit the reason and evidence in place.',
    msgTplSaved:'Templates saved.',
    msgTplSession:'Templates applied for this session; persistent settings are unavailable.',
    msgSwitched:'Current version changed using Roam’s native controls.',
    msgTimeline:'Timeline: each version is compared with the previous version.',
    msgBaseline:'Baseline: all versions are compared with the selected version.',
    msgChoose:'Text is copied by default. Content children are optional. Creating writes to Roam immediately.',
    msgWaitClose:'A write is in progress. Wait before closing.',
    msgWaitWrite:'Wait for the current write to finish.',
    msgFocus:'Focus a block before opening Version Studio.',
    times:'Created {created} · Edited {edited}',
    noteTimes:'Note created {created} · Edited {edited}',
    unknownTime:'Unknown time',
    showNote:'Show revision note',
    addNote:'Add revision note',
    addNoteHelp:'Create a revision-note child block if none exists, then reveal it for native editing.',
    tplNoteTitle:'Note block title',
    tplReason:'Reason template',
    tplEvidence:'Evidence template — one child block per line',
    tplHint:'Applied only to new notes. {versionUid}: this version. {sourceUid}: the block that opened this panel. Existing notes stay unchanged.',
    saveTemplates:'Save templates',
    startVersion:'V1 · Starting version',
    baselineSelf:'Comparison baseline',
    calculating:'Calculating changes…',
    diffLabel:'V{to} ← V{from} · {scope} · deleted / added',
    scopeOutline:'Content outline; revision notes excluded',
    scopeText:'Text changes',
    noChanges:'No content changes.',
    truncated:'Only the first 80,000 characters are compared.',
    current:'Current',
    currentHelp:'This version is the one displayed in the original block.',
    currentOption:'(current)',
    currentJump:'Current: V{n}',
    currentJumpHelp:'Scroll to the version displayed in the original block.',
    currentUnknown:'Current version not identified',
    countOne:'1 version',
    countMany:'{count} versions',
    saveHint:'Native editing saves immediately',
    loading:'Loading versions…',
    statusIdle:'Native edits save immediately.',
    newFrom:'New version from this…',
    newFromHelp:'Choose copying options, then create a new native version from this version. This does not overwrite an existing version.',
    setBaseline:'Set comparison baseline',
    setBaselineHelp:'Compare every version against this one in Fixed baseline mode; the version displayed in your page stays unchanged.',
    useInBlock:'Use in original block',
    useInBlockHelp:'Select this version in the original page using Roam’s native controls. Keep Version Studio open; no text is copied or overwritten.',
    goTo:'Go to version',
    goToHelp:'Open the original parent, select this version, scroll to it and close Version Studio.',
    ariaBaseline:'Comparison baseline',
    ariaSource:'Source version',
    ariaMode:'Comparison mode',
    ariaOrder:'Version order',
    modeTimeline:'Timeline',
    modeBaseline:'Fixed baseline',
    orderOldest:'Oldest first',
    orderNewest:'Newest first',
    showChanges:'Show changes',
    compareChildren:'Compare children',
    includeChildren:'Include children in new version (exclude revision notes)',
    modeHelp:'Timeline compares each version with its chronological predecessor. Fixed baseline compares all versions with one selected version.',
    orderHelp:'Change reading order only. Version numbers and timeline predecessors stay chronological.',
    baseHelp:'Choose the version used as a fixed comparison baseline.',
    diffHelp:'Show or hide the read-only differences above each native editor.',
    subtreeHelp:'Include content descendants in comparisons, excluding revision notes. This does not control copying.',
    newVersion:'New version…',
    newVersionHelp:'Choose a source and copying options, then create a new native version.',
    refreshChanges:'Refresh changes',
    refreshChangesHelp:'Read edited content again and recalculate the visible comparisons.',
    reloadVersions:'Reload versions',
    reloadVersionsHelp:'Reload the version list, block timestamps and comparisons.',
    noteTemplates:'Note templates',
    noteTemplatesHelp:'Configure the child blocks created for new revision notes.',
    createEdit:'Create and edit',
    cancel:'Cancel',
    close:'Close',
    command:'Version Studio: Manage versions',
    setLanguage:'Language',
    setLanguageDesc:'Interface language. Auto follows your browser language. If this tab still shows the previous language, reload the extension.',
    setShortcut:'Open shortcut',
    setShortcutDesc:'Focus a block, then use this shortcut. Example: Ctrl+Shift+Comma or Alt+Shift+V. Leave empty to disable. Avoid shortcuts already used by Roam.',
    setNoteTitle:'Revision note title',
    setNoteTitleDesc:'Title of newly created revision note blocks.',
    setReason:'Reason template',
    setReasonDesc:'Text inserted as the reason block. Configure multiline evidence in the panel’s Note templates editor.',
    setEvidence:'Evidence template',
    setEvidenceDesc:'One child block per line. In this field, use \\n for line breaks. The panel’s Note templates editor also supports actual new lines.'
  },
  zh: {
    defaults: {noteTitle:'修改说明', reasonTemplate:'修改原因：', evidenceTemplate:'来源：\n参考：\n影响：', evidence:'证据'},
    errBusyReload:'Version Studio 正在写入，请稍后再重新加载。',
    errNoRender:'Version Studio：原生 renderBlock API 不可用。',
    errMissing:'找不到这个块，或图谱尚未就绪。',
    errPage:'请选择一个块，而不是页面。',
    errNoVersions:'没有找到可读取的版本。',
    errSubtree:'该子树超过 {max} 个块。操作已停止，源内容未被修改。',
    errNoCurrent:'无法确定当前版本。请打开原始块后重试。',
    errNoBullet:'找不到该块的原生圆点。请打开原始块后重试。',
    errNoMenu:'原生 “Add version” 菜单没有出现。未创建任何替换块。',
    errMultiple:'检测到多个新版本。复制已停止；请刷新后检查。',
    errUnconfirmed:'原生操作已执行，但无法确认是否创建成功。请先刷新再重试，以免重复创建。',
    errCopyVerify:'无法校验一个已复制的子块。',
    errPartial:'版本 {uid} 已创建，但复制未完成。请先检查再重试。{detail}',
    errEditor:'原生编辑器不可用：{detail}',
    errAdmin:'只有图谱管理员可以修改这些设置。',
    errNoParent:'原始父块不可用。未修改任何版本。',
    errNotRendered:'原始块未在其父块中显示。',
    errNoControls:'原生版本控件不可用。请使用原始的版本圆点选择版本。',
    errSwitch:'无法确认原生版本切换。未覆盖任何文本。',
    errWorker:'差异计算不可用。',
    errDiffTimeout:'差异计算超时。请缩小比较范围。',
    msgCreating:'正在创建 Roam 原生版本…',
    msgCopying:'正在复制内容块…',
    msgCreated:'已创建新版本。原生编辑会立即保存。',
    msgCreatedCopied:'已创建新版本；复制了 {count} 个内容子块。原生编辑会立即保存。',
    msgNoteStored:'修改说明已保存在该版本下。请直接在此编辑原因和证据。',
    msgTplSaved:'模板已保存。',
    msgTplSession:'模板仅在本次会话中生效；无法使用持久设置。',
    msgSwitched:'已通过 Roam 原生控件切换当前版本。',
    msgTimeline:'时间线：每个版本与前一个版本比较。',
    msgBaseline:'固定基准：所有版本与所选版本比较。',
    msgChoose:'默认复制文本，内容子块可选。创建会立即写入 Roam。',
    msgWaitClose:'正在写入，请稍后再关闭。',
    msgWaitWrite:'请等待当前写入完成。',
    msgFocus:'请先把光标放在一个块中，再打开 Version Studio。',
    times:'创建于 {created} · 编辑于 {edited}',
    noteTimes:'说明创建于 {created} · 编辑于 {edited}',
    unknownTime:'时间未知',
    showNote:'查看修改说明',
    addNote:'添加修改说明',
    addNoteHelp:'如果还没有修改说明，就创建一个子块，然后展开供原生编辑。',
    tplNoteTitle:'说明块标题',
    tplReason:'原因模板',
    tplEvidence:'证据模板 — 每行一个子块',
    tplHint:'仅用于新建的说明。{versionUid}：当前这个版本。{sourceUid}：打开本面板的块。已有说明保持不变。',
    saveTemplates:'保存模板',
    startVersion:'V1 · 初始版本',
    baselineSelf:'比较基准',
    calculating:'正在计算差异…',
    diffLabel:'V{to} ← V{from} · {scope} · 删除 / 新增',
    scopeOutline:'内容大纲；不含修改说明',
    scopeText:'文本差异',
    noChanges:'内容没有变化。',
    truncated:'只比较前 80,000 个字符。',
    current:'当前',
    currentHelp:'原始块中正在显示的就是这个版本。',
    currentOption:'（当前）',
    currentJump:'当前：V{n}',
    currentJumpHelp:'滚动到原始块中正在显示的版本。',
    currentUnknown:'无法确定当前版本',
    countOne:'1 个版本',
    countMany:'{count} 个版本',
    saveHint:'原生编辑立即保存',
    loading:'正在加载版本…',
    statusIdle:'原生编辑会立即保存。',
    newFrom:'以此为基础新建版本…',
    newFromHelp:'选择复制选项，然后以这个版本为基础创建新的原生版本。不会覆盖已有版本。',
    setBaseline:'设为比较基准',
    setBaselineHelp:'切换到固定基准模式，所有版本都与这个版本比较；页面中显示的版本不变。',
    useInBlock:'在原始块中使用',
    useInBlockHelp:'通过 Roam 原生控件在原页面中选中这个版本。Version Studio 保持打开；不复制也不覆盖文本。',
    goTo:'跳转到版本',
    goToHelp:'打开原始父块，选中这个版本并滚动到它，然后关闭 Version Studio。',
    ariaBaseline:'比较基准',
    ariaSource:'源版本',
    ariaMode:'比较模式',
    ariaOrder:'版本顺序',
    modeTimeline:'时间线',
    modeBaseline:'固定基准',
    orderOldest:'从旧到新',
    orderNewest:'从新到旧',
    showChanges:'显示差异',
    compareChildren:'比较子块',
    includeChildren:'新版本包含子块（不含修改说明）',
    modeHelp:'时间线：每个版本与前一个版本比较。固定基准：所有版本与选定的一个版本比较。',
    orderHelp:'只改变阅读顺序。版本编号和时间线比较仍按时间先后。',
    baseHelp:'选择作为固定比较基准的版本。',
    diffHelp:'显示或隐藏每个原生编辑器上方的只读差异。',
    subtreeHelp:'比较时包含内容子块，不含修改说明。不影响复制。',
    newVersion:'新建版本…',
    newVersionHelp:'选择源版本和复制选项，然后创建新的原生版本。',
    refreshChanges:'刷新差异',
    refreshChangesHelp:'重新读取已编辑的内容，并重新计算可见的差异。',
    reloadVersions:'重新加载版本',
    reloadVersionsHelp:'重新加载版本列表、块时间戳和差异。',
    noteTemplates:'说明模板',
    noteTemplatesHelp:'配置新建修改说明时生成的子块。',
    createEdit:'创建并编辑',
    cancel:'取消',
    close:'关闭',
    command:'Version Studio：管理版本',
    setLanguage:'语言',
    setLanguageDesc:'界面语言。Auto 跟随浏览器语言。如果此设置页仍显示原来的语言，请重新加载插件。',
    setShortcut:'打开快捷键',
    setShortcutDesc:'把光标放在一个块中，然后按这个快捷键。例如：Ctrl+Shift+Comma 或 Alt+Shift+V。留空即禁用。避免使用 Roam 已占用的快捷键。',
    setNoteTitle:'修改说明标题',
    setNoteTitleDesc:'新建修改说明块的标题。',
    setReason:'原因模板',
    setReasonDesc:'作为原因块插入的文本。多行证据请在面板的「说明模板」编辑器中配置。',
    setEvidence:'证据模板',
    setEvidenceDesc:'每行一个子块。在此字段中用 \\n 换行。面板的「说明模板」编辑器也支持直接换行。'
  },
  fr: {
    defaults: {noteTitle:'Note de révision', reasonTemplate:'Motif : ', evidenceTemplate:'Source : \nRéférence : \nImpact : ', evidence:'Preuves'},
    errBusyReload:'Version Studio est en cours d’écriture. Attendez avant de recharger.',
    errNoRender:'Version Studio : l’API native renderBlock n’est pas disponible.',
    errMissing:'Ce bloc est introuvable ou le graphe n’est pas prêt.',
    errPage:'Sélectionnez un bloc, pas une page.',
    errNoVersions:'Aucune version lisible n’a été trouvée.',
    errSubtree:'Cette arborescence dépasse {max} blocs. L’opération a été arrêtée sans modifier la source.',
    errNoCurrent:'Impossible d’identifier la version actuelle. Ouvrez le bloc d’origine et réessayez.',
    errNoBullet:'La puce native du bloc est introuvable. Ouvrez le bloc d’origine et réessayez.',
    errNoMenu:'Le menu natif « Add version » n’est pas apparu. Aucun bloc de remplacement n’a été créé.',
    errMultiple:'Plusieurs nouvelles versions ont été détectées. La copie est interrompue ; actualisez pour les examiner.',
    errUnconfirmed:'L’action native a été exécutée, mais la création n’a pas pu être confirmée. Actualisez avant de réessayer pour éviter les doublons.',
    errCopyVerify:'Un bloc enfant copié n’a pas pu être vérifié.',
    errPartial:'La version {uid} a été créée, mais la copie est incomplète. Examinez-la avant de réessayer. {detail}',
    errEditor:'Éditeur natif indisponible : {detail}',
    errAdmin:'Seul l’administrateur du graphe peut modifier ces paramètres.',
    errNoParent:'Le parent d’origine n’est pas disponible. Aucune version n’a été modifiée.',
    errNotRendered:'Le bloc d’origine ne s’est pas affiché dans son parent.',
    errNoControls:'Les commandes natives de version ne sont pas disponibles. Utilisez la puce de version d’origine pour choisir une version.',
    errSwitch:'Le changement de version natif n’a pas pu être confirmé. Aucun texte n’a été écrasé.',
    errWorker:'Le calcul des différences n’est pas disponible.',
    errDiffTimeout:'Le calcul des différences a expiré. Comparez une portée plus réduite.',
    msgCreating:'Création d’une version Roam native…',
    msgCopying:'Copie des blocs de contenu…',
    msgCreated:'Nouvelle version créée. Les modifications natives sont enregistrées immédiatement.',
    msgCreatedCopied:'Nouvelle version créée ; {count} blocs enfants de contenu copiés. Les modifications natives sont enregistrées immédiatement.',
    msgNoteStored:'La note de révision est enregistrée sous cette version. Modifiez le motif et les preuves sur place.',
    msgTplSaved:'Modèles enregistrés.',
    msgTplSession:'Modèles appliqués pour cette session ; les paramètres persistants ne sont pas disponibles.',
    msgSwitched:'Version actuelle changée avec les commandes natives de Roam.',
    msgTimeline:'Chronologie : chaque version est comparée à la précédente.',
    msgBaseline:'Base fixe : toutes les versions sont comparées à la version sélectionnée.',
    msgChoose:'Le texte est copié par défaut. Les enfants de contenu sont facultatifs. La création écrit immédiatement dans Roam.',
    msgWaitClose:'Une écriture est en cours. Attendez avant de fermer.',
    msgWaitWrite:'Attendez la fin de l’écriture en cours.',
    msgFocus:'Placez le curseur dans un bloc avant d’ouvrir Version Studio.',
    times:'Créée le {created} · Modifiée le {edited}',
    noteTimes:'Note créée le {created} · Modifiée le {edited}',
    unknownTime:'Date inconnue',
    showNote:'Afficher la note de révision',
    addNote:'Ajouter une note de révision',
    addNoteHelp:'Crée un bloc enfant de note de révision s’il n’en existe pas, puis l’affiche pour l’édition native.',
    tplNoteTitle:'Titre du bloc de note',
    tplReason:'Modèle de motif',
    tplEvidence:'Modèle de preuves — un bloc enfant par ligne',
    tplHint:'S’applique uniquement aux nouvelles notes. {versionUid} : cette version. {sourceUid} : le bloc qui a ouvert ce panneau. Les notes existantes restent inchangées.',
    saveTemplates:'Enregistrer les modèles',
    startVersion:'V1 · Version de départ',
    baselineSelf:'Base de comparaison',
    calculating:'Calcul des modifications…',
    diffLabel:'V{to} ← V{from} · {scope} · supprimé / ajouté',
    scopeOutline:'Plan du contenu ; notes de révision exclues',
    scopeText:'Modifications du texte',
    noChanges:'Aucune modification du contenu.',
    truncated:'Seuls les 80 000 premiers caractères sont comparés.',
    current:'Actuelle',
    currentHelp:'Cette version est celle affichée dans le bloc d’origine.',
    currentOption:'(actuelle)',
    currentJump:'Actuelle : V{n}',
    currentJumpHelp:'Faire défiler jusqu’à la version affichée dans le bloc d’origine.',
    currentUnknown:'Version actuelle non identifiée',
    countOne:'1 version',
    countMany:'{count} versions',
    saveHint:'L’édition native est enregistrée immédiatement',
    loading:'Chargement des versions…',
    statusIdle:'Les modifications natives sont enregistrées immédiatement.',
    newFrom:'Nouvelle version à partir de celle-ci…',
    newFromHelp:'Choisissez les options de copie, puis créez une nouvelle version native à partir de cette version. Aucune version existante n’est écrasée.',
    setBaseline:'Définir comme base de comparaison',
    setBaselineHelp:'Compare toutes les versions à celle-ci en mode Base fixe ; la version affichée dans votre page ne change pas.',
    useInBlock:'Utiliser dans le bloc d’origine',
    useInBlockHelp:'Sélectionne cette version dans la page d’origine avec les commandes natives de Roam. Version Studio reste ouvert ; aucun texte n’est copié ni écrasé.',
    goTo:'Aller à la version',
    goToHelp:'Ouvre le parent d’origine, sélectionne cette version, la fait défiler à l’écran et ferme Version Studio.',
    ariaBaseline:'Base de comparaison',
    ariaSource:'Version source',
    ariaMode:'Mode de comparaison',
    ariaOrder:'Ordre des versions',
    modeTimeline:'Chronologie',
    modeBaseline:'Base fixe',
    orderOldest:'Plus anciennes d’abord',
    orderNewest:'Plus récentes d’abord',
    showChanges:'Afficher les modifications',
    compareChildren:'Comparer les enfants',
    includeChildren:'Inclure les enfants dans la nouvelle version (sans les notes de révision)',
    modeHelp:'Chronologie compare chaque version à la précédente. Base fixe compare toutes les versions à une version choisie.',
    orderHelp:'Change uniquement l’ordre de lecture. Les numéros de version et les comparaisons chronologiques restent inchangés.',
    baseHelp:'Choisissez la version utilisée comme base de comparaison fixe.',
    diffHelp:'Affiche ou masque les différences en lecture seule au-dessus de chaque éditeur natif.',
    subtreeHelp:'Inclut les descendants de contenu dans les comparaisons, sans les notes de révision. N’affecte pas la copie.',
    newVersion:'Nouvelle version…',
    newVersionHelp:'Choisissez une source et les options de copie, puis créez une nouvelle version native.',
    refreshChanges:'Actualiser les modifications',
    refreshChangesHelp:'Relit le contenu modifié et recalcule les comparaisons affichées.',
    reloadVersions:'Recharger les versions',
    reloadVersionsHelp:'Recharge la liste des versions, les dates des blocs et les comparaisons.',
    noteTemplates:'Modèles de note',
    noteTemplatesHelp:'Configure les blocs enfants créés pour les nouvelles notes de révision.',
    createEdit:'Créer et modifier',
    cancel:'Annuler',
    close:'Fermer',
    command:'Version Studio : gérer les versions',
    setLanguage:'Langue',
    setLanguageDesc:'Langue de l’interface. Auto suit la langue du navigateur. Si cet onglet affiche encore l’ancienne langue, rechargez l’extension.',
    setShortcut:'Raccourci d’ouverture',
    setShortcutDesc:'Placez le curseur dans un bloc, puis utilisez ce raccourci. Exemple : Ctrl+Shift+Comma ou Alt+Shift+V. Laissez vide pour le désactiver. Évitez les raccourcis déjà utilisés par Roam.',
    setNoteTitle:'Titre de la note de révision',
    setNoteTitleDesc:'Titre des nouveaux blocs de note de révision.',
    setReason:'Modèle de motif',
    setReasonDesc:'Texte inséré comme bloc de motif. Configurez les preuves sur plusieurs lignes dans l’éditeur Modèles de note du panneau.',
    setEvidence:'Modèle de preuves',
    setEvidenceDesc:'Un bloc enfant par ligne. Dans ce champ, utilisez \\n pour les sauts de ligne. L’éditeur Modèles de note du panneau accepte aussi de vrais retours à la ligne.'
  },
  it: {
    defaults: {noteTitle:'Nota di revisione', reasonTemplate:'Motivo: ', evidenceTemplate:'Fonte: \nRiferimento: \nImpatto: ', evidence:'Evidenze'},
    errBusyReload:'Version Studio sta scrivendo. Attendi prima di ricaricare.',
    errNoRender:'Version Studio: l’API nativa renderBlock non è disponibile.',
    errMissing:'Questo blocco non esiste o il grafo non è pronto.',
    errPage:'Seleziona un blocco, non una pagina.',
    errNoVersions:'Non è stata trovata nessuna versione leggibile.',
    errSubtree:'Questo sottoalbero supera {max} blocchi. L’operazione è stata interrotta senza modificare l’origine.',
    errNoCurrent:'Impossibile identificare la versione attuale. Apri il blocco originale e riprova.',
    errNoBullet:'Il punto elenco nativo del blocco non è stato trovato. Apri il blocco originale e riprova.',
    errNoMenu:'Il menu nativo “Add version” non è comparso. Non è stato creato alcun blocco sostitutivo.',
    errMultiple:'Sono state rilevate più versioni nuove. La copia è stata interrotta; aggiorna per esaminarle.',
    errUnconfirmed:'L’azione nativa è stata eseguita, ma non è stato possibile confermare la creazione. Aggiorna prima di riprovare per evitare duplicati.',
    errCopyVerify:'Non è stato possibile verificare un blocco figlio copiato.',
    errPartial:'La versione {uid} è stata creata, ma la copia è incompleta. Controllala prima di riprovare. {detail}',
    errEditor:'Editor nativo non disponibile: {detail}',
    errAdmin:'Solo l’amministratore del grafo può modificare queste impostazioni.',
    errNoParent:'Il genitore originale non è disponibile. Nessuna versione è stata modificata.',
    errNotRendered:'Il blocco originale non è stato visualizzato nel suo genitore.',
    errNoControls:'I controlli nativi delle versioni non sono disponibili. Usa il punto elenco di versione originale per scegliere una versione.',
    errSwitch:'Non è stato possibile confermare il cambio di versione nativo. Nessun testo è stato sovrascritto.',
    errWorker:'Il calcolo delle differenze non è disponibile.',
    errDiffTimeout:'Il calcolo delle differenze ha superato il tempo limite. Confronta un ambito più ridotto.',
    msgCreating:'Creazione di una versione nativa di Roam…',
    msgCopying:'Copia dei blocchi di contenuto…',
    msgCreated:'Nuova versione creata. Le modifiche native vengono salvate subito.',
    msgCreatedCopied:'Nuova versione creata; copiati {count} blocchi figli di contenuto. Le modifiche native vengono salvate subito.',
    msgNoteStored:'La nota di revisione è salvata sotto questa versione. Modifica motivo ed evidenze direttamente qui.',
    msgTplSaved:'Modelli salvati.',
    msgTplSession:'Modelli applicati per questa sessione; le impostazioni persistenti non sono disponibili.',
    msgSwitched:'Versione attuale cambiata con i controlli nativi di Roam.',
    msgTimeline:'Cronologia: ogni versione è confrontata con quella precedente.',
    msgBaseline:'Base fissa: tutte le versioni sono confrontate con la versione selezionata.',
    msgChoose:'Il testo viene copiato per impostazione predefinita. I figli di contenuto sono facoltativi. La creazione scrive subito in Roam.',
    msgWaitClose:'È in corso una scrittura. Attendi prima di chiudere.',
    msgWaitWrite:'Attendi la fine della scrittura in corso.',
    msgFocus:'Posiziona il cursore in un blocco prima di aprire Version Studio.',
    times:'Creata il {created} · Modificata il {edited}',
    noteTimes:'Nota creata il {created} · Modificata il {edited}',
    unknownTime:'Data sconosciuta',
    showNote:'Mostra nota di revisione',
    addNote:'Aggiungi nota di revisione',
    addNoteHelp:'Crea un blocco figlio di nota di revisione se non esiste, poi lo mostra per la modifica nativa.',
    tplNoteTitle:'Titolo del blocco nota',
    tplReason:'Modello del motivo',
    tplEvidence:'Modello delle evidenze — un blocco figlio per riga',
    tplHint:'Si applica solo alle nuove note. {versionUid}: questa versione. {sourceUid}: il blocco da cui è stato aperto il pannello. Le note esistenti non cambiano.',
    saveTemplates:'Salva modelli',
    startVersion:'V1 · Versione iniziale',
    baselineSelf:'Base di confronto',
    calculating:'Calcolo delle modifiche…',
    diffLabel:'V{to} ← V{from} · {scope} · eliminato / aggiunto',
    scopeOutline:'Struttura del contenuto; note di revisione escluse',
    scopeText:'Modifiche al testo',
    noChanges:'Nessuna modifica al contenuto.',
    truncated:'Vengono confrontati solo i primi 80.000 caratteri.',
    current:'Attuale',
    currentHelp:'Questa è la versione mostrata nel blocco originale.',
    currentOption:'(attuale)',
    currentJump:'Attuale: V{n}',
    currentJumpHelp:'Scorri fino alla versione mostrata nel blocco originale.',
    currentUnknown:'Versione attuale non identificata',
    countOne:'1 versione',
    countMany:'{count} versioni',
    saveHint:'La modifica nativa viene salvata subito',
    loading:'Caricamento delle versioni…',
    statusIdle:'Le modifiche native vengono salvate subito.',
    newFrom:'Nuova versione da questa…',
    newFromHelp:'Scegli le opzioni di copia, poi crea una nuova versione nativa a partire da questa. Nessuna versione esistente viene sovrascritta.',
    setBaseline:'Imposta come base di confronto',
    setBaselineHelp:'Confronta tutte le versioni con questa in modalità Base fissa; la versione mostrata nella pagina non cambia.',
    useInBlock:'Usa nel blocco originale',
    useInBlockHelp:'Seleziona questa versione nella pagina originale con i controlli nativi di Roam. Version Studio resta aperto; nessun testo viene copiato o sovrascritto.',
    goTo:'Vai alla versione',
    goToHelp:'Apre il genitore originale, seleziona questa versione, la porta in vista e chiude Version Studio.',
    ariaBaseline:'Base di confronto',
    ariaSource:'Versione di origine',
    ariaMode:'Modalità di confronto',
    ariaOrder:'Ordine delle versioni',
    modeTimeline:'Cronologia',
    modeBaseline:'Base fissa',
    orderOldest:'Prima le più vecchie',
    orderNewest:'Prima le più recenti',
    showChanges:'Mostra modifiche',
    compareChildren:'Confronta i figli',
    includeChildren:'Includi i figli nella nuova versione (escluse le note di revisione)',
    modeHelp:'Cronologia confronta ogni versione con quella precedente. Base fissa confronta tutte le versioni con una versione scelta.',
    orderHelp:'Cambia solo l’ordine di lettura. I numeri di versione e i confronti cronologici restano invariati.',
    baseHelp:'Scegli la versione da usare come base di confronto fissa.',
    diffHelp:'Mostra o nasconde le differenze in sola lettura sopra ogni editor nativo.',
    subtreeHelp:'Include i discendenti di contenuto nei confronti, escluse le note di revisione. Non influisce sulla copia.',
    newVersion:'Nuova versione…',
    newVersionHelp:'Scegli un’origine e le opzioni di copia, poi crea una nuova versione nativa.',
    refreshChanges:'Aggiorna modifiche',
    refreshChangesHelp:'Rilegge il contenuto modificato e ricalcola i confronti visibili.',
    reloadVersions:'Ricarica versioni',
    reloadVersionsHelp:'Ricarica l’elenco delle versioni, le date dei blocchi e i confronti.',
    noteTemplates:'Modelli di nota',
    noteTemplatesHelp:'Configura i blocchi figli creati per le nuove note di revisione.',
    createEdit:'Crea e modifica',
    cancel:'Annulla',
    close:'Chiudi',
    command:'Version Studio: gestisci versioni',
    setLanguage:'Lingua',
    setLanguageDesc:'Lingua dell’interfaccia. Auto segue la lingua del browser. Se questa scheda mostra ancora la lingua precedente, ricarica l’estensione.',
    setShortcut:'Scorciatoia di apertura',
    setShortcutDesc:'Posiziona il cursore in un blocco, poi usa questa scorciatoia. Esempio: Ctrl+Shift+Comma o Alt+Shift+V. Lascia vuoto per disattivarla. Evita scorciatoie già usate da Roam.',
    setNoteTitle:'Titolo della nota di revisione',
    setNoteTitleDesc:'Titolo dei nuovi blocchi di nota di revisione.',
    setReason:'Modello del motivo',
    setReasonDesc:'Testo inserito come blocco del motivo. Configura evidenze su più righe nell’editor Modelli di nota del pannello.',
    setEvidence:'Modello delle evidenze',
    setEvidenceDesc:'Un blocco figlio per riga. In questo campo usa \\n per andare a capo. L’editor Modelli di nota del pannello accetta anche veri a capo.'
  },
  de: {
    defaults: {noteTitle:'Revisionsnotiz', reasonTemplate:'Grund: ', evidenceTemplate:'Quelle: \nReferenz: \nAuswirkung: ', evidence:'Belege'},
    errBusyReload:'Version Studio schreibt gerade. Warten Sie vor dem Neuladen.',
    errNoRender:'Version Studio: Die native renderBlock-API ist nicht verfügbar.',
    errMissing:'Dieser Block fehlt oder der Graph ist noch nicht bereit.',
    errPage:'Wählen Sie einen Block aus, keine Seite.',
    errNoVersions:'Es wurden keine lesbaren Versionen gefunden.',
    errSubtree:'Dieser Teilbaum umfasst mehr als {max} Blöcke. Der Vorgang wurde ohne Änderung der Quelle abgebrochen.',
    errNoCurrent:'Die aktuelle Version konnte nicht ermittelt werden. Öffnen Sie den ursprünglichen Block und versuchen Sie es erneut.',
    errNoBullet:'Der native Aufzählungspunkt des Blocks wurde nicht gefunden. Öffnen Sie den ursprünglichen Block und versuchen Sie es erneut.',
    errNoMenu:'Das native Menü „Add version“ ist nicht erschienen. Es wurde kein Ersatzblock erstellt.',
    errMultiple:'Mehrere neue Versionen wurden erkannt. Das Kopieren wurde gestoppt; aktualisieren Sie, um sie zu prüfen.',
    errUnconfirmed:'Die native Aktion wurde ausgeführt, die Erstellung konnte aber nicht bestätigt werden. Aktualisieren Sie vor einem neuen Versuch, um Duplikate zu vermeiden.',
    errCopyVerify:'Ein kopierter Unterblock konnte nicht überprüft werden.',
    errPartial:'Version {uid} wurde erstellt, aber das Kopieren ist unvollständig. Prüfen Sie sie vor einem neuen Versuch. {detail}',
    errEditor:'Nativer Editor nicht verfügbar: {detail}',
    errAdmin:'Nur die Graph-Administration kann diese Einstellungen ändern.',
    errNoParent:'Der ursprüngliche übergeordnete Block ist nicht verfügbar. Keine Version wurde geändert.',
    errNotRendered:'Der ursprüngliche Block wurde in seinem übergeordneten Block nicht angezeigt.',
    errNoControls:'Die nativen Versionssteuerelemente sind nicht verfügbar. Wählen Sie die Version über den ursprünglichen Versions-Aufzählungspunkt.',
    errSwitch:'Der native Versionswechsel konnte nicht bestätigt werden. Es wurde kein Text überschrieben.',
    errWorker:'Die Unterschiedsberechnung ist nicht verfügbar.',
    errDiffTimeout:'Zeitüberschreitung bei der Unterschiedsberechnung. Vergleichen Sie einen kleineren Umfang.',
    msgCreating:'Native Roam-Version wird erstellt…',
    msgCopying:'Inhaltsblöcke werden kopiert…',
    msgCreated:'Neue Version erstellt. Native Bearbeitungen werden sofort gespeichert.',
    msgCreatedCopied:'Neue Version erstellt; {count} Inhalts-Unterblöcke kopiert. Native Bearbeitungen werden sofort gespeichert.',
    msgNoteStored:'Die Revisionsnotiz ist unter dieser Version gespeichert. Bearbeiten Sie Grund und Belege direkt hier.',
    msgTplSaved:'Vorlagen gespeichert.',
    msgTplSession:'Vorlagen für diese Sitzung übernommen; dauerhafte Einstellungen sind nicht verfügbar.',
    msgSwitched:'Aktuelle Version mit den nativen Roam-Steuerelementen geändert.',
    msgTimeline:'Zeitleiste: Jede Version wird mit der vorherigen verglichen.',
    msgBaseline:'Feste Basis: Alle Versionen werden mit der ausgewählten Version verglichen.',
    msgChoose:'Der Text wird standardmäßig kopiert. Inhalts-Unterblöcke sind optional. Das Erstellen schreibt sofort in Roam.',
    msgWaitClose:'Ein Schreibvorgang läuft. Warten Sie vor dem Schließen.',
    msgWaitWrite:'Warten Sie, bis der aktuelle Schreibvorgang abgeschlossen ist.',
    msgFocus:'Setzen Sie den Cursor in einen Block, bevor Sie Version Studio öffnen.',
    times:'Erstellt {created} · Bearbeitet {edited}',
    noteTimes:'Notiz erstellt {created} · Bearbeitet {edited}',
    unknownTime:'Unbekannte Zeit',
    showNote:'Revisionsnotiz anzeigen',
    addNote:'Revisionsnotiz hinzufügen',
    addNoteHelp:'Erstellt einen Revisionsnotiz-Unterblock, falls keiner existiert, und zeigt ihn zur nativen Bearbeitung an.',
    tplNoteTitle:'Titel des Notizblocks',
    tplReason:'Vorlage für den Grund',
    tplEvidence:'Vorlage für Belege — ein Unterblock pro Zeile',
    tplHint:'Gilt nur für neue Notizen. {versionUid}: diese Version. {sourceUid}: der Block, aus dem dieses Panel geöffnet wurde. Bestehende Notizen bleiben unverändert.',
    saveTemplates:'Vorlagen speichern',
    startVersion:'V1 · Ausgangsversion',
    baselineSelf:'Vergleichsbasis',
    calculating:'Änderungen werden berechnet…',
    diffLabel:'V{to} ← V{from} · {scope} · gelöscht / hinzugefügt',
    scopeOutline:'Inhaltsgliederung; Revisionsnotizen ausgenommen',
    scopeText:'Textänderungen',
    noChanges:'Keine inhaltlichen Änderungen.',
    truncated:'Nur die ersten 80.000 Zeichen werden verglichen.',
    current:'Aktuell',
    currentHelp:'Diese Version wird im ursprünglichen Block angezeigt.',
    currentOption:'(aktuell)',
    currentJump:'Aktuell: V{n}',
    currentJumpHelp:'Zur im ursprünglichen Block angezeigten Version scrollen.',
    currentUnknown:'Aktuelle Version nicht ermittelt',
    countOne:'1 Version',
    countMany:'{count} Versionen',
    saveHint:'Native Bearbeitung wird sofort gespeichert',
    loading:'Versionen werden geladen…',
    statusIdle:'Native Bearbeitungen werden sofort gespeichert.',
    newFrom:'Neue Version hieraus…',
    newFromHelp:'Kopieroptionen wählen und dann aus dieser Version eine neue native Version erstellen. Bestehende Versionen werden nicht überschrieben.',
    setBaseline:'Als Vergleichsbasis festlegen',
    setBaselineHelp:'Vergleicht im Modus „Feste Basis“ alle Versionen mit dieser; die auf Ihrer Seite angezeigte Version bleibt unverändert.',
    useInBlock:'Im ursprünglichen Block verwenden',
    useInBlockHelp:'Wählt diese Version auf der ursprünglichen Seite mit den nativen Roam-Steuerelementen aus. Version Studio bleibt geöffnet; kein Text wird kopiert oder überschrieben.',
    goTo:'Zur Version',
    goToHelp:'Öffnet den ursprünglichen übergeordneten Block, wählt diese Version aus, scrollt zu ihr und schließt Version Studio.',
    ariaBaseline:'Vergleichsbasis',
    ariaSource:'Quellversion',
    ariaMode:'Vergleichsmodus',
    ariaOrder:'Reihenfolge der Versionen',
    modeTimeline:'Zeitleiste',
    modeBaseline:'Feste Basis',
    orderOldest:'Älteste zuerst',
    orderNewest:'Neueste zuerst',
    showChanges:'Änderungen anzeigen',
    compareChildren:'Unterblöcke vergleichen',
    includeChildren:'Unterblöcke in die neue Version übernehmen (ohne Revisionsnotizen)',
    modeHelp:'Zeitleiste vergleicht jede Version mit ihrer Vorgängerin. Feste Basis vergleicht alle Versionen mit einer ausgewählten Version.',
    orderHelp:'Ändert nur die Lesereihenfolge. Versionsnummern und chronologische Vergleiche bleiben gleich.',
    baseHelp:'Version auswählen, die als feste Vergleichsbasis dient.',
    diffHelp:'Blendet die schreibgeschützten Unterschiede über jedem nativen Editor ein oder aus.',
    subtreeHelp:'Bezieht Inhalts-Unterblöcke in Vergleiche ein, ohne Revisionsnotizen. Steuert nicht das Kopieren.',
    newVersion:'Neue Version…',
    newVersionHelp:'Quelle und Kopieroptionen wählen und dann eine neue native Version erstellen.',
    refreshChanges:'Änderungen aktualisieren',
    refreshChangesHelp:'Liest bearbeitete Inhalte erneut und berechnet die sichtbaren Vergleiche neu.',
    reloadVersions:'Versionen neu laden',
    reloadVersionsHelp:'Lädt Versionsliste, Block-Zeitstempel und Vergleiche neu.',
    noteTemplates:'Notizvorlagen',
    noteTemplatesHelp:'Unterblöcke konfigurieren, die für neue Revisionsnotizen erstellt werden.',
    createEdit:'Erstellen und bearbeiten',
    cancel:'Abbrechen',
    close:'Schließen',
    command:'Version Studio: Versionen verwalten',
    setLanguage:'Sprache',
    setLanguageDesc:'Sprache der Oberfläche. Auto folgt der Browsersprache. Falls dieser Tab noch die vorherige Sprache zeigt, laden Sie die Erweiterung neu.',
    setShortcut:'Tastenkürzel zum Öffnen',
    setShortcutDesc:'Cursor in einen Block setzen und dann dieses Kürzel verwenden. Beispiel: Ctrl+Shift+Comma oder Alt+Shift+V. Leer lassen zum Deaktivieren. Vermeiden Sie Kürzel, die Roam bereits verwendet.',
    setNoteTitle:'Titel der Revisionsnotiz',
    setNoteTitleDesc:'Titel neu erstellter Revisionsnotiz-Blöcke.',
    setReason:'Vorlage für den Grund',
    setReasonDesc:'Text, der als Grund-Block eingefügt wird. Mehrzeilige Belege konfigurieren Sie im Editor „Notizvorlagen“ des Panels.',
    setEvidence:'Vorlage für Belege',
    setEvidenceDesc:'Ein Unterblock pro Zeile. Verwenden Sie in diesem Feld \\n für Zeilenumbrüche. Der Editor „Notizvorlagen“ im Panel unterstützt auch echte Zeilenumbrüche.'
  },
  es: {
    defaults: {noteTitle:'Nota de revisión', reasonTemplate:'Motivo: ', evidenceTemplate:'Fuente: \nReferencia: \nImpacto: ', evidence:'Evidencia'},
    errBusyReload:'Version Studio está escribiendo. Espera antes de recargar.',
    errNoRender:'Version Studio: la API nativa renderBlock no está disponible.',
    errMissing:'Este bloque no existe o el grafo no está listo.',
    errPage:'Selecciona un bloque, no una página.',
    errNoVersions:'No se encontró ninguna versión legible.',
    errSubtree:'Este subárbol supera los {max} bloques. La operación se detuvo sin modificar el origen.',
    errNoCurrent:'No se pudo identificar la versión actual. Abre el bloque original e inténtalo de nuevo.',
    errNoBullet:'No se encontró la viñeta nativa del bloque. Abre el bloque original e inténtalo de nuevo.',
    errNoMenu:'No apareció el menú nativo «Add version». No se creó ningún bloque de reemplazo.',
    errMultiple:'Se detectaron varias versiones nuevas. La copia se detuvo; actualiza para revisarlas.',
    errUnconfirmed:'La acción nativa se ejecutó, pero no se pudo confirmar la creación. Actualiza antes de volver a intentarlo para evitar duplicados.',
    errCopyVerify:'No se pudo verificar un bloque hijo copiado.',
    errPartial:'Se creó la versión {uid}, pero la copia está incompleta. Revísala antes de volver a intentarlo. {detail}',
    errEditor:'Editor nativo no disponible: {detail}',
    errAdmin:'Solo el administrador del grafo puede cambiar esta configuración.',
    errNoParent:'El bloque padre original no está disponible. No se cambió ninguna versión.',
    errNotRendered:'El bloque original no se mostró dentro de su padre.',
    errNoControls:'Los controles nativos de versión no están disponibles. Usa la viñeta de versión original para elegir una versión.',
    errSwitch:'No se pudo confirmar el cambio de versión nativo. No se sobrescribió ningún texto.',
    errWorker:'El cálculo de diferencias no está disponible.',
    errDiffTimeout:'El cálculo de diferencias superó el tiempo límite. Compara un ámbito más pequeño.',
    msgCreating:'Creando una versión nativa de Roam…',
    msgCopying:'Copiando bloques de contenido…',
    msgCreated:'Nueva versión creada. Las ediciones nativas se guardan de inmediato.',
    msgCreatedCopied:'Nueva versión creada; se copiaron {count} bloques hijos de contenido. Las ediciones nativas se guardan de inmediato.',
    msgNoteStored:'La nota de revisión se guarda bajo esta versión. Edita el motivo y la evidencia aquí mismo.',
    msgTplSaved:'Plantillas guardadas.',
    msgTplSession:'Plantillas aplicadas para esta sesión; la configuración persistente no está disponible.',
    msgSwitched:'Versión actual cambiada con los controles nativos de Roam.',
    msgTimeline:'Cronología: cada versión se compara con la anterior.',
    msgBaseline:'Base fija: todas las versiones se comparan con la versión seleccionada.',
    msgChoose:'El texto se copia por defecto. Los hijos de contenido son opcionales. Crear escribe en Roam de inmediato.',
    msgWaitClose:'Hay una escritura en curso. Espera antes de cerrar.',
    msgWaitWrite:'Espera a que termine la escritura en curso.',
    msgFocus:'Coloca el cursor en un bloque antes de abrir Version Studio.',
    times:'Creada {created} · Editada {edited}',
    noteTimes:'Nota creada {created} · Editada {edited}',
    unknownTime:'Fecha desconocida',
    showNote:'Mostrar nota de revisión',
    addNote:'Añadir nota de revisión',
    addNoteHelp:'Crea un bloque hijo de nota de revisión si no existe y lo muestra para editarlo de forma nativa.',
    tplNoteTitle:'Título del bloque de nota',
    tplReason:'Plantilla del motivo',
    tplEvidence:'Plantilla de evidencia — un bloque hijo por línea',
    tplHint:'Solo se aplica a notas nuevas. {versionUid}: esta versión. {sourceUid}: el bloque desde el que se abrió este panel. Las notas existentes no cambian.',
    saveTemplates:'Guardar plantillas',
    startVersion:'V1 · Versión inicial',
    baselineSelf:'Base de comparación',
    calculating:'Calculando cambios…',
    diffLabel:'V{to} ← V{from} · {scope} · eliminado / añadido',
    scopeOutline:'Esquema del contenido; notas de revisión excluidas',
    scopeText:'Cambios en el texto',
    noChanges:'Sin cambios en el contenido.',
    truncated:'Solo se comparan los primeros 80.000 caracteres.',
    current:'Actual',
    currentHelp:'Esta es la versión que se muestra en el bloque original.',
    currentOption:'(actual)',
    currentJump:'Actual: V{n}',
    currentJumpHelp:'Desplazarse hasta la versión que se muestra en el bloque original.',
    currentUnknown:'Versión actual no identificada',
    countOne:'1 versión',
    countMany:'{count} versiones',
    saveHint:'La edición nativa se guarda de inmediato',
    loading:'Cargando versiones…',
    statusIdle:'Las ediciones nativas se guardan de inmediato.',
    newFrom:'Nueva versión a partir de esta…',
    newFromHelp:'Elige las opciones de copia y crea una nueva versión nativa a partir de esta. No se sobrescribe ninguna versión existente.',
    setBaseline:'Usar como base de comparación',
    setBaselineHelp:'Compara todas las versiones con esta en modo Base fija; la versión que se muestra en tu página no cambia.',
    useInBlock:'Usar en el bloque original',
    useInBlockHelp:'Selecciona esta versión en la página original con los controles nativos de Roam. Version Studio sigue abierto; no se copia ni sobrescribe texto.',
    goTo:'Ir a la versión',
    goToHelp:'Abre el padre original, selecciona esta versión, la muestra en pantalla y cierra Version Studio.',
    ariaBaseline:'Base de comparación',
    ariaSource:'Versión de origen',
    ariaMode:'Modo de comparación',
    ariaOrder:'Orden de las versiones',
    modeTimeline:'Cronología',
    modeBaseline:'Base fija',
    orderOldest:'Más antiguas primero',
    orderNewest:'Más recientes primero',
    showChanges:'Mostrar cambios',
    compareChildren:'Comparar hijos',
    includeChildren:'Incluir los hijos en la nueva versión (sin notas de revisión)',
    modeHelp:'Cronología compara cada versión con la anterior. Base fija compara todas las versiones con una versión elegida.',
    orderHelp:'Cambia solo el orden de lectura. Los números de versión y las comparaciones cronológicas no cambian.',
    baseHelp:'Elige la versión que se usa como base de comparación fija.',
    diffHelp:'Muestra u oculta las diferencias de solo lectura encima de cada editor nativo.',
    subtreeHelp:'Incluye los descendientes de contenido en las comparaciones, sin notas de revisión. No afecta a la copia.',
    newVersion:'Nueva versión…',
    newVersionHelp:'Elige un origen y las opciones de copia, y crea una nueva versión nativa.',
    refreshChanges:'Actualizar cambios',
    refreshChangesHelp:'Vuelve a leer el contenido editado y recalcula las comparaciones visibles.',
    reloadVersions:'Recargar versiones',
    reloadVersionsHelp:'Recarga la lista de versiones, las fechas de los bloques y las comparaciones.',
    noteTemplates:'Plantillas de nota',
    noteTemplatesHelp:'Configura los bloques hijos que se crean para las nuevas notas de revisión.',
    createEdit:'Crear y editar',
    cancel:'Cancelar',
    close:'Cerrar',
    command:'Version Studio: gestionar versiones',
    setLanguage:'Idioma',
    setLanguageDesc:'Idioma de la interfaz. Auto sigue el idioma del navegador. Si esta pestaña sigue mostrando el idioma anterior, recarga la extensión.',
    setShortcut:'Atajo para abrir',
    setShortcutDesc:'Coloca el cursor en un bloque y usa este atajo. Ejemplo: Ctrl+Shift+Comma o Alt+Shift+V. Déjalo vacío para desactivarlo. Evita atajos que Roam ya usa.',
    setNoteTitle:'Título de la nota de revisión',
    setNoteTitleDesc:'Título de los nuevos bloques de nota de revisión.',
    setReason:'Plantilla del motivo',
    setReasonDesc:'Texto que se inserta como bloque del motivo. Configura la evidencia en varias líneas en el editor Plantillas de nota del panel.',
    setEvidence:'Plantilla de evidencia',
    setEvidenceDesc:'Un bloque hijo por línea. En este campo, usa \\n para los saltos de línea. El editor Plantillas de nota del panel también admite saltos de línea reales.'
  }
};
function pickLanguage(value){
  const raw=String(value??'auto').trim();
  const code=Object.keys(LANGUAGES).find(key=>key===raw.toLowerCase()||LANGUAGES[key]===raw)||'auto';
  if(code!=='auto')return code;
  for(const tag of [...(navigator.languages||[]),navigator.language||'']){const base=String(tag).toLowerCase().split('-')[0];if(I18N[base])return base;}
  return 'en';
}
async function startVersionStudio(extensionAPI) {
  'use strict';
  let lang = pickLanguage(extensionAPI?.settings?.get('language'));
  const tr = (key, vars={}) => String(I18N[lang]?.[key] ?? I18N.en[key] ?? key).replace(/\{(\w+)\}/g,(m,k)=>k in vars?vars[k]:m);
  const KEY = '__roamVersionStudio';
  if (window[KEY]?.isBusy) throw new Error(tr('errBusyReload'));
  await window[KEY]?.unload();
  const api = window.roamAlphaAPI;
  if (!api?.ui?.components?.renderBlock) throw new Error(tr('errNoRender'));
  const VERSION = '1.4.2';
  const LABEL = 'Version Studio…';
  const NATIVE = /^(Add version|Add a version|添加版本|新增版本)$/i;
  const META = '[:block/uid :block/string :create/time :edit/time :block/heading :block/open :block/text-align :children/view-type :block/props {:block/children [:block/uid :block/order :block/string :create/time :edit/time]} {:block/_children [:block/uid]} {:vc/blocks [:block/uid]} {:vc/_blocks [:block/uid]}]';
  const NODE = '[:block/uid :block/string :block/order :block/heading :block/open :block/text-align :children/view-type :block/props {:block/children [:block/uid :block/order]}]';
  let destroyed = false, panel = null, context = null, menuObserver = null, menuTimer = null, nativePass = false, busy = false;
  let serial = 0, menuFrame = null;
  const menuEntries = new Set();
  const idleWaiters = new Set();
  const palette = extensionAPI?.ui?.commandPalette || api.ui.commandPalette;
  const settings = extensionAPI?.settings;
  const defaults = {noteTitle:I18N[lang].defaults.noteTitle, reasonTemplate:I18N[lang].defaults.reasonTemplate, evidenceTemplate:I18N[lang].defaults.evidenceTemplate, shortcut:'Ctrl+Shift+Comma', versionOrder:'oldest'};
  const config = Object.fromEntries(Object.entries(defaults).map(([key,value])=>[key,String(settings?.get(key)??value)]));
  const savedTitles=settings?.get('noteTitles');
  const noteTitles=new Set(['修改说明','Revision note',...Object.values(I18N).map(d=>d.defaults.noteTitle),config.noteTitle,...(Array.isArray(savedTitles)?savedTitles.filter(x=>typeof x==='string'):[])]);
  const isNote = node => noteTitles.has(strOf(node).trim().replace(/^\*\*|\*\*$/g,''));
  const off = [];
  const css = document.createElement('style');
  css.id = 'rvs-style';
  css.textContent = `
  #rvs-panel{--vs-bg:var(--mag-paper,#fefcf6);--vs-fg:var(--mag-ink,#1a1a2e);--vs-muted:var(--mag-muted,#666675);--vs-line:color-mix(in srgb,var(--vs-fg) 17%,transparent);--vs-tint:color-mix(in srgb,var(--vs-fg) 4%,var(--vs-bg));--vs-accent:var(--mag-accent,#2f6f8f);position:fixed!important;top:6vh;left:50%;transform:translateX(-50%);width:min(820px,calc(100vw - 32px));height:88vh;z-index:40;display:flex;flex-direction:column;background:var(--vs-bg);color:var(--vs-fg);border:1px solid var(--vs-line);border-radius:6px;box-shadow:0 12px 48px #0002;font:14px/1.55 system-ui,sans-serif;text-align:left}
  .bp3-dark #rvs-panel{--vs-bg:var(--mag-paper,#252526);--vs-fg:var(--mag-ink,#e9e6df);--vs-muted:var(--mag-muted,#b3b0a8);--vs-accent:var(--mag-accent,#7fb3cf)}
  #rvs-panel,#rvs-panel *{box-sizing:border-box}#rvs-panel>header{padding:16px 20px 12px!important;margin:0!important;display:block!important;border-bottom:1px solid var(--vs-line);background:var(--vs-bg);border-radius:5px 5px 0 0!important;background-clip:padding-box}#rvs-panel h2{margin:0!important;padding:0!important;border:0!important;font:500 23px/1.25 Georgia,serif!important;letter-spacing:0!important;color:inherit!important}#rvs-panel h2::before,#rvs-panel h2::after{display:none!important;content:none!important}
  #rvs-panel .rvs-titlebar{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:6px}#rvs-panel header .rvs-toolbar{display:flex;flex-direction:column;align-items:stretch;gap:9px;margin-top:13px}#rvs-panel .rvs-toolbar-row{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}#rvs-panel .rvs-control-group{display:flex;align-items:center;gap:8px;flex-wrap:wrap}#rvs-panel .rvs-toolbar-row+ .rvs-toolbar-row{padding-top:9px;border-top:1px solid var(--vs-line)}#rvs-panel .rvs-utilities{gap:4px}#rvs-panel .rvs-utilities button{font-size:11px!important;padding:4px 6px!important}#rvs-panel .rvs-control-group label{font-weight:400!important}#rvs-panel .rvs-toolbar{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px}#rvs-panel .rvs-toolbar label{display:inline-flex;align-items:center;gap:5px;margin:0;font-size:12px;white-space:nowrap}
  #rvs-panel button,#rvs-panel select{font:12px/1.4 system-ui,sans-serif!important;letter-spacing:0!important;text-transform:none!important;box-shadow:none!important;color:inherit!important;background:var(--vs-bg)!important;border:1px solid var(--vs-line)!important;border-radius:3px!important;margin:0!important;padding:5px 8px!important;min-height:29px;cursor:pointer;max-width:100%}#rvs-panel button:hover{background:var(--vs-tint)!important}#rvs-panel button:disabled{opacity:.5;cursor:wait}#rvs-panel .rvs-primary{border-color:var(--vs-fg)!important}#rvs-panel select{max-width:220px;text-overflow:ellipsis}#rvs-panel input[type=checkbox]{margin:0;width:13px;height:13px}
  #rvs-panel .rvs-scroll{overflow:auto;min-height:0;flex:1;padding:0 20px 16px;overscroll-behavior:contain}#rvs-panel .rvs-card{border-bottom:1px solid var(--vs-line);padding:18px 0;margin:0}#rvs-panel .rvs-head{display:grid;grid-template-columns:auto minmax(0,1fr) auto;gap:4px 10px;align-items:baseline;margin-bottom:4px}#rvs-panel .rvs-name{font:500 14px/1.5 system-ui,sans-serif;color:inherit}#rvs-panel .rvs-time,#rvs-panel .rvs-hint{font:11px/1.5 system-ui,sans-serif;color:var(--vs-muted)}#rvs-panel .rvs-head>.rvs-time{grid-column:2}#rvs-panel .rvs-actions{display:flex;gap:3px 8px;flex-wrap:wrap;margin:8px 0 10px;padding-left:0;max-width:100%}#rvs-panel .rvs-actions button{border:0!important;padding:3px 6px!important;background:transparent!important;color:var(--vs-muted)!important}#rvs-panel .rvs-actions button:hover{color:var(--vs-fg)!important;background:var(--vs-tint)!important}#rvs-panel .rvs-badge{font:600 11px/1.5 system-ui,sans-serif;grid-column:3;color:var(--vs-bg);background:var(--vs-accent);padding:1px 9px;border-radius:999px;white-space:nowrap;letter-spacing:.02em}
  #rvs-panel .rvs-preview{white-space:pre-wrap;overflow-wrap:anywhere;padding:6px 0;min-height:60px}#rvs-panel .rvs-native{padding:6px 0;min-height:60px;overflow:visible}#rvs-panel .rvs-native .rm-block-text,#rvs-panel .rvs-native textarea{overflow-wrap:anywhere;font-family:inherit}#rvs-panel .rvs-native .roam-block-container{max-width:100%}#rvs-panel .rvs-native .rm-block-main{margin-left:0!important}#rvs-panel .rvs-native .rm-block__controls{min-width:24px}#rvs-panel .rvs-native .rm-block-children{margin-left:16px}
  #rvs-panel .rvs-diff{margin:10px 0;padding:10px 12px;border-left:2px solid var(--vs-line);background:var(--vs-tint);white-space:pre-wrap;overflow-wrap:anywhere;font:13px/1.65 system-ui,sans-serif}#rvs-panel .rvs-diff .rvs-hint{margin-bottom:7px}#rvs-panel ins{background:#6e8a3a24;text-decoration:underline;text-decoration-color:#6e8a3a}#rvs-panel del{background:#ad565020;text-decoration:line-through}#rvs-panel .rvs-error{border-left:2px solid #ad5650;padding:8px}
  #rvs-panel .rvs-card.rvs-current{margin:10px -12px;padding:16px 12px 16px 14px;background:color-mix(in srgb,var(--vs-accent) 8%,var(--vs-bg));border:1px solid color-mix(in srgb,var(--vs-accent) 40%,transparent);border-left:4px solid var(--vs-accent);border-radius:4px}#rvs-panel .rvs-current .rvs-name{font-weight:700;color:var(--vs-accent)}#rvs-panel .rvs-current .rvs-diff{background:var(--vs-bg)}
  #rvs-panel .rvs-jump{border:0!important;background:transparent!important;padding:0 2px!important;min-height:0!important;font:600 11px/1.5 system-ui,sans-serif!important;color:var(--vs-accent)!important;text-decoration:underline;text-underline-offset:2px}#rvs-panel .rvs-jump:hover{background:var(--vs-tint)!important}
  #rvs-panel>footer{padding:8px 20px!important;margin:0!important;border-top:1px solid var(--vs-line);border-radius:0 0 5px 5px!important;background:var(--vs-bg);display:flex!important;align-items:center;gap:12px;font:11px/1.5 system-ui,sans-serif!important;color:var(--vs-muted)}#rvs-panel footer [role=status]{flex:1}#rvs-panel [hidden]{display:none!important}
  #rvs-panel .rvs-settings{padding:14px 0;border-bottom:1px solid var(--vs-line);display:grid;gap:10px}#rvs-panel .rvs-settings label{display:grid;gap:4px;font:12px/1.5 system-ui,sans-serif}#rvs-panel .rvs-settings input,#rvs-panel .rvs-settings textarea{font:13px/1.5 system-ui,sans-serif;color:var(--vs-fg);background:var(--vs-bg);padding:7px;border:1px solid var(--vs-line);border-radius:3px;width:100%;resize:vertical}
  .rvs-autocomplete-top{position:fixed!important;inset:auto!important;transform:none!important;translate:none!important;margin:0!important;z-index:2147483000!important;max-height:280px!important;overflow:auto!important;background:var(--mag-paper,#fefcf6)!important;color:var(--mag-ink,#1a1a2e)!important;border:1px solid color-mix(in srgb,var(--mag-ink,#1a1a2e) 20%,transparent)!important;box-shadow:0 8px 28px #0002!important}
  @media(max-width:620px){#rvs-panel{width:calc(100vw - 16px);top:2vh;height:96vh}#rvs-panel .rvs-head{grid-template-columns:auto 1fr}#rvs-panel .rvs-head>.rvs-time{grid-column:1/-1}#rvs-panel .rvs-badge{grid-column:2;grid-row:1;justify-self:end}#rvs-panel>header{padding:12px!important}#rvs-panel .rvs-scroll{padding:0 12px 12px}#rvs-panel .rvs-card.rvs-current{margin:10px -6px;padding:14px 8px 14px 10px}#rvs-panel select{max-width:180px}}@media(pointer:coarse){#rvs-panel button,#rvs-panel select{min-height:40px}}
  `;
  document.head.append(css);
  const $ = (tag, cls, text) => { const el = document.createElement(tag); if (cls) el.className = cls; if (text != null) el.textContent = text; return el; };
  const uidOf = obj => obj?.[':block/uid'];
  const strOf = obj => obj?.[':block/string'] ?? '';
  const children = obj => [...(obj?.[':block/children'] || [])].sort((a,b) => (a[':block/order']||0)-(b[':block/order']||0));
  const noteOf = obj => children(obj).find(isNote);
  const listen = (el, type, fn, opts) => { el.addEventListener(type, fn, opts); return () => el.removeEventListener(type, fn, opts); };
  function readFunction(name) { const owner = api.data?.async?.[name] ? api.data.async : api.data?.[name] ? api.data : api; return (...args) => owner[name](...args); }
  const pull = readFunction('pull');
  const pullMany = async (pattern, uids) => {
    if (!uids.length) return [];
    const owner = api.data?.async?.pull_many ? api.data.async : api.data?.pull_many ? api.data : null;
    if (owner) return owner.pull_many(pattern, uids.map(uid => [':block/uid',uid]));
    const result = []; for (let i=0;i<uids.length;i+=16) result.push(...await Promise.all(uids.slice(i,i+16).map(uid=>pull(pattern,[':block/uid',uid])))); return result;
  };
  const blockWrite = (method, arg) => api.data?.block?.[method] ? api.data.block[method](arg) : api[{create:'createBlock',update:'updateBlock'}[method]](arg);
  const date = t => typeof t === 'number' ? new Intl.DateTimeFormat(DATE_LOCALES[lang]||'en-GB',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'}).format(t) : tr('unknownTime');
  const message = text => { if (panel) panel.status.textContent = text; else window.alert(text); };
  const fail = e => { if(destroyed||e?.message==='Panel closed.')return;console.error('[Version Studio]',e); message(e?.message || String(e)); };
  const button = (text, fn, cls='', help='') => { const b=$('button',cls,text); b.type='button';if(help){b.title=help;b.setAttribute('aria-description',help);} b.onclick=()=>{if(!destroyed)Promise.resolve().then(fn).catch(fail);}; return b; };
  const frame = () => new Promise(r => requestAnimationFrame(r));
  function getUid(el) {
    const block = el?.closest?.('.roam-block-container,[data-block-uid]');
    const explicit = block?.getAttribute('data-block-uid');
    if (explicit) return explicit;
    const input = block?.querySelector('[id^="block-input-"]');
    return input?.id?.slice(-9) || null;
  }
  async function resolve(uid) {
    const root = await pull(META, [':block/uid',uid]);
    if (!root || !uidOf(root)) throw new Error(tr('errMissing'));
    if (root[':node/title']) throw new Error(tr('errPage'));
    const group = root[':vc/blocks']?.length ? root : root[':vc/_blocks']?.[0] ? await pull(META,[':block/uid',uidOf(root[':vc/_blocks'][0])]) : null;
    const uids = group ? group[':vc/blocks'].map(uidOf) : [uid];
    const versions = group ? await pullMany(META,uids) : [root];
    const good = versions.filter(v => uidOf(v) && typeof v[':block/string']==='string');
    if (!good.length) throw new Error(tr('errNoVersions'));
    good.sort((a,b)=>(a[':create/time']||0)-(b[':create/time']||0));
    const active = good.filter(v=>v[':block/_children']?.length);
    return {groupUid:uidOf(group), versions:good, currentUid:active.length===1?uidOf(active[0]):null};
  }
  // Fetch only a requested subtree; bounded, iterative, batched, no recursive graph queries.
  async function tree(uid, max=600) {
    const map = new Map(); let pending=[uid];
    while (pending.length) {
      const batch=[...new Set(pending.splice(0,48))].filter(x=>!map.has(x));
      if (!batch.length) continue;
      if (map.size+batch.length>max) throw new Error(tr('errSubtree',{max}));
      const rows=await pullMany(NODE,batch);
      rows.forEach(v=>{if(uidOf(v)){map.set(uidOf(v),v);pending.push(...children(v).map(uidOf));}});
      await frame();
    }
    return {root:uid,map};
  }
  function flatten(t, excludeNote=false) {
    const result=[], stack=[{uid:t.root,depth:0}]; const seen=new Set();
    while(stack.length){const it=stack.pop(),node=t.map.get(it.uid);if(!node||seen.has(it.uid))continue;seen.add(it.uid);
      if(excludeNote&&it.depth&&isNote(node))continue;
      result.push({...it,node});children(node).reverse().forEach(c=>stack.push({uid:uidOf(c),depth:it.depth+1}));}
    return result;
  }
  function stopMenuWatch(){menuObserver?.disconnect();menuObserver=null;clearTimeout(menuTimer);menuTimer=null;if(menuFrame!==null){cancelAnimationFrame(menuFrame);menuFrame=null;}}
  function nativeItems(scope=document){return [...scope.querySelectorAll('.bp3-menu-item,.bp4-menu-item,[role="menuitem"]')].filter(el=>NATIVE.test((el.querySelector('.bp3-fill,.bp4-fill,.bp3-text-overflow-ellipsis,.bp4-text-overflow-ellipsis')?.textContent||el.textContent||'').replace(/Ctrl[-+ ]?Comma|Ctrl[-+ ]?,/gi,'').trim()));}
  function extendMenu(){
    if(nativePass||!context)return;
    for(const entry of menuEntries)if(!entry.isConnected)menuEntries.delete(entry);
    for(const item of nativeItems()){
      const row=item.closest('li')||item;
      if(row.nextElementSibling?.matches('[data-rvs-menu-row]'))continue;
      const bp=item.classList.contains('bp4-menu-item')?'bp4':'bp3',entry=$('a',`${bp}-menu-item bp3-popover-dismiss bp4-popover-dismiss`);
      entry.append($('div',`${bp}-text-overflow-ellipsis ${bp}-fill`,LABEL));
      const hint=shortcutHint(item.querySelector('.bp3-menu-item-label,.bp4-menu-item-label')?.textContent);if(hint)entry.append($('span',`${bp}-menu-item-label`,hint));
      entry.dataset.rvsEntry='true';entry.setAttribute('role','menuitem');entry.tabIndex=0;
      const wrapper=row.tagName==='LI'?$('li'):entry;
      wrapper.dataset.rvsMenuRow='true';if(wrapper!==entry)wrapper.append(entry);
      row.after(wrapper);menuEntries.add(wrapper);
    }
  }
  function onContext(e){
    const target=e.target instanceof Element?e.target:null;
    if(!target?.closest('.rm-bullet,.version-bullet'))return;
    const uid=getUid(target);if(!uid)return;
    context={uid,bullet:target.closest('.rm-bullet,.version-bullet')};
    if(nativePass)return;
    stopMenuWatch();menuObserver=new MutationObserver(()=>{if(menuFrame===null)menuFrame=requestAnimationFrame(()=>{menuFrame=null;extendMenu();});});menuObserver.observe(document.body,{childList:true,subtree:true});
    queueMicrotask(extendMenu);menuTimer=setTimeout(stopMenuWatch,1800);
  }
  function onClick(e){
    if(nativePass)return;
    const target=e.target instanceof Element?e.target:null;
    if(!target?.closest('[data-rvs-entry]')||!context)return;
    e.preventDefault();stopMenuWatch();const uid=context.uid;
    // Let Blueprint's native popover-dismiss handler receive the click first.
    setTimeout(()=>{
      if(destroyed)return;
      document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',code:'Escape',keyCode:27,which:27,bubbles:true}));
      document.body.dispatchEvent(new MouseEvent('mousedown',{bubbles:true,button:0}));
      document.body.dispatchEvent(new MouseEvent('mouseup',{bubbles:true,button:0}));
      document.body.dispatchEvent(new MouseEvent('click',{bubbles:true,button:0}));
      open(uid).catch(fail);
    },0);
  }
  function findBullet(uid){
    // Scope to mounted blocks, never scan graph data or inspect application internals.
    const containers=document.querySelectorAll(`[data-block-uid="${CSS.escape(uid)}"]`);
    for(const container of containers){const bullet=container.querySelector('.rm-block-main .rm-bullet,.rm-block-main .version-bullet');if(bullet)return bullet;}
    for(const el of document.querySelectorAll('[id^="block-input-"]')){if(el.id.endsWith(uid)){const bullet=el.closest('.roam-block-container')?.querySelector('.rm-bullet,.version-bullet');if(bullet)return bullet;}}
    return null;
  }
  async function nativeCreate(sourceUid){
    const before=await resolve(sourceUid), old=new Set(before.versions.map(uidOf));
    if(before.groupUid&&!before.currentUid)throw new Error(tr('errNoCurrent'));
    // The native action requires the version actually attached to its parent.
    // Copy-source selection is independent of this native creation target.
    const targetUid=before.currentUid||sourceUid;
    const p=panel; if(p)p.pinned=targetUid;
    const card=p?.cards.get(targetUid);if(card)await mount(p,card);
    const bullet=findBullet(targetUid);if(!bullet){if(p)p.pinned=null;throw new Error(tr('errNoBullet'));}
    nativePass=true;
    try{
      const item=await new Promise((resolveItem,reject)=>{
        let timer,observer;const done=(err,value)=>{clearTimeout(timer);observer?.disconnect();err?reject(err):resolveItem(value);};
        const check=()=>{const hit=nativeItems().find(el=>el.isConnected&&el.getClientRects().length);if(hit)done(null,hit);};
        observer=new MutationObserver(check);observer.observe(document.body,{childList:true,subtree:true});
        timer=setTimeout(()=>done(new Error(tr('errNoMenu'))),1800);
        bullet.dispatchEvent(new MouseEvent('contextmenu',{bubbles:true,cancelable:true,view:window,button:2,clientX:Math.max(1,bullet.getBoundingClientRect().left),clientY:Math.max(1,bullet.getBoundingClientRect().top)}));check();
      });
      item.click();
      // Bounded verification after one native action; never retry creation on a timeout.
      for(let i=0;i<18;i++){
        await new Promise(r=>setTimeout(r,90));
        const after=await resolve(sourceUid);const added=after.versions.filter(v=>!old.has(uidOf(v)));
        if(added.length===1)return uidOf(added[0]);
        if(added.length>1)throw new Error(tr('errMultiple'));
      }
      throw new Error(tr('errUnconfirmed'));
    }finally{nativePass=false;if(p)p.pinned=null;}
  }
  async function cloneChildren(sourceTree,newUid){
    const entries=flatten(sourceTree,true).slice(1), ids=new Map([[sourceTree.root,newUid]]);
    entries.forEach(it=>ids.set(it.uid,api.util.generateUID()));
    const parentById=new Map();sourceTree.map.forEach((node,uid)=>children(node).forEach(c=>parentById.set(uidOf(c),uid)));
    for(const entry of entries){
      const n=entry.node,parent=ids.get(parentById.get(entry.uid));if(!parent)continue;
      const text=strOf(n).replace(/\(\(([^()]+)\)\)/g,(whole,ref)=>ids.has(ref)?`((${ids.get(ref)}))`:whole);
      const block={uid:ids.get(entry.uid),string:text,open:n[':block/open']!==false};
      for(const [attr,key] of [[':block/heading','heading'],[':block/text-align','text-align'],[':children/view-type','children-view-type']])if(n[attr]!=null)block[key]=n[attr];
      await blockWrite('create',{location:{'parent-uid':parent,order:'last'},block});
    }
    const rootText=strOf(sourceTree.map.get(sourceTree.root)).replace(/\(\(([^()]+)\)\)/g,(whole,ref)=>ids.has(ref)?`((${ids.get(ref)}))`:whole);
    await blockWrite('update',{block:{uid:newUid,string:rootText}});
    const copied=await pullMany(NODE,[newUid,...entries.map(it=>ids.get(it.uid))]);
    const actual=new Map(copied.filter(Boolean).map(node=>[uidOf(node),node]));
    for(const entry of entries){const parent=ids.get(parentById.get(entry.uid)),id=ids.get(entry.uid);
      if(!actual.has(id)||!children(actual.get(parent)).some(child=>uidOf(child)===id))throw new Error(tr('errCopyVerify'));}
    return entries.length;
  }
  async function createVersion(sourceUid,copyChildren){
    if(busy)return;busy=true;const p=panel;setBusy(p,true);let created=null;
    try{
      // Blur commits any pending native edit before taking the source text.
      if(p?.el.contains(document.activeElement))document.activeElement.blur();await frame();
      const source=await pull(META,[':block/uid',sourceUid]);
      const sourceTree=copyChildren?await tree(sourceUid):null;
      message(tr('msgCreating'));created=await nativeCreate(sourceUid);
      await blockWrite('update',{block:{uid:created,string:strOf(source)}});
      let copied=0;if(sourceTree){message(tr('msgCopying'));copied=await cloneChildren(sourceTree,created);}
      if(panel===p){p.pinned=created;await refresh(p,created);const card=p.cards.get(created);card?.el.scrollIntoView({block:'center'});if(card)await focusCard(p,card);message(sourceTree?tr('msgCreatedCopied',{count:copied}):tr('msgCreated'));}
    }catch(e){if(created)e=new Error(tr('errPartial',{uid:created,detail:e.message}));throw e;}
    finally{if(p)p.pinned=null;busy=false;setBusy(panel,false);for(const resolveIdle of idleWaiters)resolveIdle();idleWaiters.clear();}
  }
  function setBusy(p,value){if(!p)return;for(const b of p.el.querySelectorAll('button'))if(!b.classList.contains('rvs-close'))b.disabled=value;}
  async function addNote(p,card){
    if(busy)return;busy=true;setBusy(p,true);
    try{
      const root=await pull(META,[':block/uid',card.uid]);let note=noteOf(root);
      if(!note){const uid=api.util.generateUID();await blockWrite('create',{location:{'parent-uid':card.uid,order:0},block:{uid,string:config.noteTitle||defaults.noteTitle,open:true}});
        const expand=text=>text.replace(/\{versionUid\}/g,card.uid).replace(/\{sourceUid\}/g,p.originUid);
        await blockWrite('create',{location:{'parent-uid':uid,order:'last'},block:{string:expand(config.reasonTemplate)}});
        const evidenceUid=api.util.generateUID();await blockWrite('create',{location:{'parent-uid':uid,order:'last'},block:{uid:evidenceUid,string:I18N[lang].defaults.evidence,open:true}});
        const lines=config.evidenceTemplate.replace(/\\n/g,'\n').split('\n').filter(line=>line.trim());
        for(const text of lines.slice(0,40))await blockWrite('create',{location:{'parent-uid':evidenceUid,order:'last'},block:{string:expand(text.replace(/^\s*[-*]\s+/,''))}});
        note={':block/uid':uid};}
      await mount(p,card);await pullCardTime(p,card);message(tr('msgNoteStored'));
      const node=card.host.querySelector(`[data-block-uid="${CSS.escape(uidOf(note))}"]`);node?.scrollIntoView({block:'nearest'});
    }finally{busy=false;setBusy(panel,false);for(const resolveIdle of idleWaiters)resolveIdle();idleWaiters.clear();}
  }
  async function mount(p,card){
    if(panel!==p||p.closed)return;
    if(card.mounted)return card.mounting;
    if(card.mounting)return card.mounting;
    card.host.hidden=false;card.preview.hidden=true;
    card.mounting=Promise.resolve(api.ui.components.renderBlock({uid:card.uid,el:card.host,'open?':p.showChildren})).then(()=>{
      card.mounted=true;
      if(p.closed||panel!==p)return unmount(card);
      if(card.near===false&&p.pinned!==card.uid&&!card.host.contains(document.activeElement))return unmount(card);
    }).catch(e=>{card.host.hidden=true;card.preview.hidden=false;card.preview.textContent=`${strOf(card.data)}\n${tr('errEditor',{detail:e.message})}`;throw e;}).finally(()=>{card.mounting=null;});
    return card.mounting;
  }
  async function focusCard(p,card){
    await mount(p,card);await frame();
    const find=()=>[...card.host.querySelectorAll('[id^="block-input-"],.rm-block-text')].find(el=>el.id?.endsWith(`-${card.uid}`))||card.host.querySelector('.rm-block-text');
    let input=find();input?.click();await frame();input=find();
    const suffix=`-${card.uid}`,id=input?.id||'';
    if(id.startsWith('block-input-')&&id.endsWith(suffix)&&api.ui.setBlockFocusAndSelection){
      const end=strOf(card.data).length;
      await api.ui.setBlockFocusAndSelection({location:{'block-uid':card.uid,'window-id':id.slice(12,-suffix.length)},selection:{start:end,end}});
    }
    await frame();input=find();input?.focus();
    if(input?.setSelectionRange){const end=input.value.length;input.setSelectionRange(end,end);}
  }
  async function unmount(card){
    if(!card.mounted)return;
    card.preview.style.minHeight=`${Math.max(card.host.offsetHeight,65)}px`;
    await api.ui.components.unmountNode({el:card.host});card.mounted=false;card.host.hidden=true;card.preview.hidden=false;
  }
  async function pullCardTime(p,card){
    const data=await pull(META,[':block/uid',card.uid]);if(panel!==p||p.closed||!data)return;
    card.data=data;card.time.textContent=tr('times',{created:date(data[':create/time']),edited:date(data[':edit/time'])});
    card.preview.textContent=strOf(data);card.note.textContent=noteOf(data)?tr('showNote'):tr('addNote');
    const note=noteOf(data);card.noteTime.textContent=note?tr('noteTimes',{created:date(note[':create/time']),edited:date(note[':edit/time'])}):'';
  }
  function autocompleteBridge(p){
    let anchor=null,observer=null,raf=null;
    const lifted=new Map(),originalPadding=p.scroll.style.paddingBottom;
    const restore=()=>{for(const [node,original] of lifted){try{if(original.opened&&node.matches(':popover-open'))node.hidePopover();}catch{}node.classList.remove('rvs-autocomplete-top');if(original.style==null)node.removeAttribute('style');else node.setAttribute('style',original.style);if(original.popover==null)node.removeAttribute('popover');else node.setAttribute('popover',original.popover);}lifted.clear();};
    const position=()=>{raf=null;if(p.closed)return;
      const active=document.activeElement;
      if(active?.matches?.('textarea,input[id^="block-input-"]')&&active.closest('.rvs-native'))anchor=active;
      if(!anchor?.isConnected&&anchor?.id)anchor=document.getElementById(anchor.id);
      if(!anchor?.isConnected)return;
      const r=anchor.getBoundingClientRect(),width=Math.min(450,window.innerWidth-24),left=Math.max(12,Math.min(r.left,window.innerWidth-width-12));
      // Roam/other autocomplete extensions can portal results outside renderBlock.
      // Promote the original popup (never clone it), preserving native selection events.
      for(const node of document.querySelectorAll('.rm-autocomplete__results')){
        if(!node.getClientRects().length||node.closest('[hidden]'))continue;
        if(!lifted.has(node)){const original={style:node.getAttribute('style'),popover:node.getAttribute('popover'),opened:false};lifted.set(node,original);node.classList.add('rvs-autocomplete-top');
          if(node.showPopover&&!node.hasAttribute('popover')){try{node.setAttribute('popover','manual');node.showPopover();original.opened=true;}catch{node.removeAttribute('popover');}}}
        const below=r.bottom+6,height=Math.max(48,Math.min(280,window.innerHeight-below-12));
        node.style.setProperty('transform','none','important');node.style.setProperty('translate','none','important');node.style.setProperty('left',`${left}px`,'important');node.style.setProperty('top',`${below}px`,'important');node.style.setProperty('width',`${width}px`,'important');node.style.setProperty('max-height',`${height}px`,'important');
      }
    };
    const schedule=()=>{if(raf==null)raf=requestAnimationFrame(position);};
    const begin=async e=>{const input=e.target;if(!input.matches?.('textarea,input[id^="block-input-"]'))return;
      if(!input.closest('.rvs-native'))return;anchor=input;p.scroll.style.paddingBottom='240px';
      // Leave room below the editor rather than flipping the result list above it.
      const rect=input.getBoundingClientRect();if(rect.bottom>window.innerHeight-180&&p.scroll.scrollBy)p.scroll.scrollBy({top:rect.bottom-(window.innerHeight-220),behavior:'instant'});
      if(!observer){observer=new MutationObserver(schedule);observer.observe(document.body,{childList:true,subtree:true});}
      const uid=getUid(input),id=input.id||'',suffix=`-${uid}`;
      if(uid&&id.startsWith('block-input-')&&id.endsWith(suffix)&&api.ui.setBlockFocusAndSelection){const windowId=id.slice('block-input-'.length,-suffix.length),focused=api.ui.getFocusedBlock();
        if(focused?.['window-id']!==windowId)try{await api.ui.setBlockFocusAndSelection({location:{'block-uid':uid,'window-id':windowId},selection:{start:input.selectionStart||0,end:input.selectionEnd||0}});}catch(e){console.warn('[Version Studio] Native focus',e);}}
      schedule();
    };
    const end=()=>{queueMicrotask(()=>{if(p.closed)return;const active=document.activeElement;if(p.el.contains(active)&&active?.matches?.('textarea,input[id^="block-input-"]'))return;
      if([...lifted.keys()].some(node=>node.contains(active)))return;observer?.disconnect();observer=null;anchor=null;p.scroll.style.paddingBottom=originalPadding;if(raf!=null)cancelAnimationFrame(raf);raf=null;restore();});};
    const disposers=[listen(p.el,'focusin',e=>begin(e).catch(fail)),listen(p.el,'input',schedule),listen(p.el,'keyup',schedule),listen(p.el,'focusout',end),listen(p.scroll,'scroll',schedule,{passive:true}),listen(window,'resize',schedule)];
    return ()=>{disposers.forEach(fn=>fn());observer?.disconnect();if(raf!=null)cancelAnimationFrame(raf);anchor=null;p.scroll.style.paddingBottom=originalPadding;restore();};
  }
  function templateEditor(p){
    const box=$('section','rvs-settings');box.hidden=true;const fields={};
    for(const [key,label,rows] of [['noteTitle',tr('tplNoteTitle'),0],['reasonTemplate',tr('tplReason'),2],['evidenceTemplate',tr('tplEvidence'),4]]){
      const wrap=$('label','',label),input=$(rows?'textarea':'input');input.value=config[key];input.setAttribute('aria-label',label);if(rows)input.rows=rows;wrap.append(input);box.append(wrap);fields[key]=input;}
    box.append($('div','rvs-hint',tr('tplHint')));
    box.append(button(tr('saveTemplates'),async()=>{if(settings?.canSet===false)throw new Error(tr('errAdmin'));const next=Object.fromEntries(Object.entries(fields).map(([k,input])=>[k,input.value]));next.noteTitle=next.noteTitle.trim()||defaults.noteTitle;
      if(settings?.set){for(const [key,value] of Object.entries(next))await settings.set(key,value);await settings.set('noteTitles',[...new Set([...noteTitles,next.noteTitle])].slice(-40));}
      noteTitles.add(next.noteTitle);
      Object.assign(config,next);message(settings?.set?tr('msgTplSaved'):tr('msgTplSession'));box.hidden=true;}));
    return box;
  }
  async function selectInPage(uid,model){
      const active=model.versions.find(v=>uidOf(v)===model.currentUid)||model.versions[0];
      const parentUid=uidOf(active[':block/_children']?.[0]);if(!parentUid)throw new Error(tr('errNoParent'));
      await api.ui.mainWindow.openBlock({block:{uid:parentUid}});
      const getContainer=target=>[...document.querySelectorAll(`[data-block-uid="${CSS.escape(target)}"]`)].find(el=>!el.closest('#rvs-panel'));
      let container;
      for(let i=0;i<20;i++){container=getContainer(uidOf(active));if(container)break;await new Promise(r=>setTimeout(r,60));}
      if(!container)throw new Error(tr('errNotRendered'));
      if(model.groupUid&&uid!==model.currentUid){
        let choices=container.querySelectorAll('.rm-select-version-button');
        if(!choices.length){container.querySelector('.version-bullet')?.click();await frame();choices=container.querySelectorAll('.rm-select-version-button');}
        const targetIndex=model.versions.findIndex(v=>uidOf(v)===uid),choice=[...choices].find(el=>el.textContent.trim()===String(targetIndex+1));
        if(!choice)throw new Error(tr('errNoControls'));
        choice.click();let verified=false;
        for(let i=0;i<18;i++){await new Promise(r=>setTimeout(r,70));if((await resolve(uid)).currentUid===uid){verified=true;break;}}
        if(!verified)throw new Error(tr('errSwitch'));
      }
      getContainer(uid)?.scrollIntoView({block:'center'});
  }
  async function showInPage(uid,leavePanel=true){
    if(busy)return;const p=panel;busy=true;setBusy(p,true);
    try{
      await selectInPage(uid,await resolve(uid));
      if(!leavePanel&&p&&panel===p){await refresh(p);message(tr('msgSwitched'));}
    }finally{busy=false;setBusy(panel,false);for(const done of idleWaiters)done();idleWaiters.clear();}
    if(leavePanel)await close();
  }
  function workerProgram(){
    function diff(a,b,mode){
      const tokenize=s=>mode==='lines'?s.split('\n').map(x=>x+'\n'):Array.from(s.matchAll(/[A-Za-z0-9_]+|\s+|[^\x00-\x7F]|./gu),m=>m[0]);
      const x=tokenize(a),y=tokenize(b);let head=0;while(head<x.length&&head<y.length&&x[head]===y[head])head++;
      let endX=x.length,endY=y.length;while(endX>head&&endY>head&&x[endX-1]===y[endY-1]){endX--;endY--;}
      const out=[];const emit=(type,text)=>{if(!text)return;const last=out[out.length-1];if(last?.type===type)last.text+=text;else out.push({type,text});};
      emit('same',x.slice(0,head).join(''));const n=endX-head,m=endY-head;
      if(n*m>350000){emit('del',x.slice(head,endX).join(''));emit('ins',y.slice(head,endY).join(''));}
      else {const dp=Array.from({length:n+1},()=>new Uint32Array(m+1));for(let i=n-1;i>=0;i--)for(let j=m-1;j>=0;j--)dp[i][j]=x[head+i]===y[head+j]?dp[i+1][j+1]+1:Math.max(dp[i+1][j],dp[i][j+1]);
        let i=0,j=0;while(i<n||j<m){if(i<n&&j<m&&x[head+i]===y[head+j]){emit('same',x[head+i]);i++;j++;}else if(i<n&&(j===m||dp[i+1][j]>=dp[i][j+1]))emit('del',x[head+i++]);else emit('ins',y[head+j++]);}}
      emit('same',x.slice(endX).join(''));return out;
    }
    self.onmessage=e=>{const {id,a,b,mode}=e.data;try{self.postMessage({id,result:diff(a,b,mode)});}catch(err){self.postMessage({id,error:err.message});}};
  }
  function makeDiffer(){
    let worker=null,url=null,id=0;const tasks=new Map();
    try{url=URL.createObjectURL(new Blob([`(${workerProgram.toString()})()`],{type:'text/javascript'}));worker=new Worker(url);worker.onmessage=e=>{const task=tasks.get(e.data.id);if(task){tasks.delete(e.data.id);clearTimeout(task.timer);e.data.error?task.reject(new Error(e.data.error)):task.resolve(e.data.result);}};worker.onerror=()=>{worker?.terminate();worker=null;for(const task of tasks.values()){clearTimeout(task.timer);task.reject(new Error(tr('errWorker')));}tasks.clear();};}catch{}
    return {run(a,b,mode){if(!worker)return Promise.resolve(a===b?[{type:'same',text:b}]:[{type:'del',text:a},{type:'ins',text:b}]);return new Promise((resolve,reject)=>{const taskId=++id;const timer=setTimeout(()=>{tasks.delete(taskId);reject(new Error(tr('errDiffTimeout')));},8000);tasks.set(taskId,{resolve,reject,timer});worker.postMessage({id:taskId,a,b,mode});});},close(){worker?.terminate();if(url)URL.revokeObjectURL(url);for(const task of tasks.values()){clearTimeout(task.timer);task.reject(new Error('Panel closed.'));}tasks.clear();}};
  }
  async function compare(p,reread=true){
    const ticket=++p.diffTicket;
    p.base.hidden=p.mode.value==='timeline';
    if(!p.diff.checked){for(const c of p.cards.values())c.diff.hidden=true;return;}
    const cards=p.model.versions.map(v=>p.cards.get(uidOf(v))).filter(Boolean),texts=new Map();
    if(reread){const rows=await pullMany(META,cards.map(card=>card.uid));if(p.closed||ticket!==p.diffTicket)return;for(const row of rows){const card=p.cards.get(uidOf(row));if(card)card.data=row;}}
    const getText=uid=>{if(!texts.has(uid))texts.set(uid,(async()=>{
      if(p.subtree.checked){const t=await tree(uid);return flatten(t,true).map(e=>'  '.repeat(e.depth)+strOf(e.node)).join('\n');}
      return strOf(p.cards.get(uid).data);
    })());return texts.get(uid);};
    for(let index=0;index<cards.length;index++){
      if(p.closed||ticket!==p.diffTicket)return;
      const card=cards[index],baseline=p.mode.value==='timeline'?cards[index-1]:p.cards.get(p.base.value);
      card.diff.replaceChildren();card.diff.hidden=false;
      if(!baseline||baseline.uid===card.uid){card.diff.textContent=p.mode.value==='timeline'?tr('startVersion'):tr('baselineSelf');continue;}
      card.diff.textContent=tr('calculating');
      const [a,b]=await Promise.all([getText(baseline.uid),getText(card.uid)]);
      const parts=await p.differ.run(a.slice(0,80000),b.slice(0,80000),p.subtree.checked?'lines':'tokens');
      if(p.closed||ticket!==p.diffTicket)return;card.diff.replaceChildren();
      const from=cards.indexOf(baseline)+1;
      const label=$('div','rvs-hint',tr('diffLabel',{to:index+1,from,scope:p.subtree.checked?tr('scopeOutline'):tr('scopeText')}));card.diff.append(label);
      if(a===b)card.diff.append($('span','',tr('noChanges')));
      else for(const part of parts)card.diff.append($(part.type==='del'?'del':part.type==='ins'?'ins':'span','',part.text));
      if(a.length>80000||b.length>80000)card.diff.append($('div','rvs-hint',tr('truncated')));
      await frame();
    }
    message(p.mode.value==='timeline'?tr('msgTimeline'):tr('msgBaseline'));
  }
  function cardView(p,data,index){
    const uid=uidOf(data),el=$('section','rvs-card');el.dataset.versionUid=uid;
    const head=$('div','rvs-head'),name=$('span','rvs-name',`V${index+1}`),time=$('span','rvs-time');
    head.append(name,time);
    const actions=$('div','rvs-actions'),host=$('div','rvs-native'),preview=$('div','rvs-preview',strOf(data)),diff=$('div','rvs-diff');host.hidden=true;diff.hidden=true;
    const noteTime=$('div','rvs-time');const note=noteOf(data);noteTime.textContent=note?tr('noteTimes',{created:date(note[':create/time']),edited:date(note[':edit/time'])}):'';
    const card={uid,el,host,preview,diff,data,time,noteTime,mounted:false,mounting:null,note:null};
    card.note=button(noteOf(data)?tr('showNote'):tr('addNote'),()=>addNote(p,card),'',tr('addNoteHelp'));
    actions.append(card.note,button(tr('newFrom'),()=>chooseCreate(p,uid),'',tr('newFromHelp')),button(tr('setBaseline'),()=>{p.mode.value='baseline';p.base.value=uid;p.diff.checked=true;return compare(p);},'',tr('setBaselineHelp')),button(tr('useInBlock'),()=>showInPage(uid,false),'',tr('useInBlockHelp')),button(tr('goTo'),()=>showInPage(uid,true),'',tr('goToHelp')));
    el.append(head,actions,noteTime,diff,preview,host);time.textContent=tr('times',{created:date(data[':create/time']),edited:date(data[':edit/time'])});
    return card;
  }
  function chooseCreate(p,uid){
    p.source.value=uid;p.createBox.hidden=false;p.createBox.scrollIntoView({block:'nearest'});message(tr('msgChoose'));
  }
  function orderCards(p){
    const versions=p.order.value==='newest'?[...p.model.versions].reverse():p.model.versions;
    const fragment=document.createDocumentFragment();for(const data of versions){const card=p.cards.get(uidOf(data));if(card)fragment.append(card.el);}p.list.append(fragment);
  }
  function markCurrent(card,isCurrent){
    card.el.classList.toggle('rvs-current',isCurrent);
    if(isCurrent)card.el.setAttribute('aria-current','true');else card.el.removeAttribute('aria-current');
    card.el.querySelector('.rvs-badge')?.remove();
    if(isCurrent){const badge=$('span','rvs-badge',tr('current'));badge.title=tr('currentHelp');card.el.querySelector('.rvs-head').append(badge);}
  }
  function renderCount(p,model){
    const index=model.versions.findIndex(v=>uidOf(v)===model.currentUid);
    const parts=[document.createTextNode(`${model.versions.length===1?tr('countOne'):tr('countMany',{count:model.versions.length})} · `)];
    if(index>=0)parts.push(button(tr('currentJump',{n:index+1}),()=>{const card=p.cards.get(model.currentUid);card?.el.scrollIntoView({block:'center'});},'rvs-jump',tr('currentJumpHelp')));
    else parts.push(document.createTextNode(tr('currentUnknown')));
    parts.push(document.createTextNode(` · ${tr('saveHint')}`));
    p.count.replaceChildren(...parts);
  }
  async function refresh(p,preferUid){
    if(p.closed)return;++p.diffTicket;const model=await resolve(preferUid||p.originUid);if(p.closed||panel!==p)return;
    p.model=model;renderCount(p,model);
    const wasBase=p.base.value,wasSource=preferUid||p.source.value;
    p.base.replaceChildren();p.source.replaceChildren();
    const keep=new Set();
    for (let index=0;index<model.versions.length;index++) {
      if(p.closed||panel!==p)return;
      const data=model.versions[index];
      const uid=uidOf(data);keep.add(uid);let card=p.cards.get(uid);
      if(!card){card=cardView(p,data,index);p.cards.set(uid,card);p.list.append(card.el);p.observer?.observe(card.el);}else{card.data=data;card.el.querySelector('.rvs-name').textContent=`V${index+1}`;card.time.textContent=tr('times',{created:date(data[':create/time']),edited:date(data[':edit/time'])});card.preview.textContent=strOf(data);card.note.textContent=noteOf(data)?tr('showNote'):tr('addNote');}
      markCurrent(card,uid===model.currentUid);
      const opt=$('option','',`V${index+1}${uid===model.currentUid?` ${tr('currentOption')}`:''} · ${date(data[':create/time'])} · ${strOf(data).replace(/\s+/g,' ').slice(0,24)}`);opt.value=uid;p.base.append(opt);p.source.append(opt.cloneNode(true));
      if(index%12===11)await frame();
    }
    for(const [uid,card] of p.cards)if(!keep.has(uid)){p.observer?.unobserve(card.el);await unmount(card);card.el.remove();p.cards.delete(uid);}
    orderCards(p);
    p.base.value=keep.has(wasBase)?wasBase:uidOf(model.versions[0]);p.source.value=keep.has(wasSource)?wasSource:model.currentUid||uidOf(model.versions.at(-1));
    if(!p.observer){for(const card of p.cards.values())await mount(p,card);}
    if(preferUid&&p.cards.has(preferUid))await mount(p,p.cards.get(preferUid));
    if(p.diff.checked)await compare(p,false);
  }
  async function close(){
    const p=panel;if(!p)return;if(p.closeTask)return p.closeTask;
    if(busy){message(tr('msgWaitClose'));return;}
    p.closeTask=(async()=>{
      // Blur before unmount so the native editor can commit its pending input.
      if(p.el.contains(document.activeElement))document.activeElement.blur();await frame();
      p.closed=true;if(panel===p)panel=null;p.observer?.disconnect();clearTimeout(p.editTimer);p.differ.close();p.off.forEach(fn=>fn());
      await Promise.all([...p.cards.values()].map(async c=>{if(c.mounting)await c.mounting.catch(()=>{});await unmount(c);}));p.el.remove();
      if(p.previousFocus?.isConnected)p.previousFocus.focus();
    })();return p.closeTask;
  }
  async function open(uid){
    if(destroyed)return;const token=++serial;if(busy){message(tr('msgWaitWrite'));return;}
    await close();if(destroyed||token!==serial)return;
    const previousFocus=document.activeElement,el=$('div');el.id='rvs-panel';el.setAttribute('role','dialog');el.setAttribute('aria-label','Version Studio');
    const header=$('header'),title=$('h2','','Version Studio'),count=$('div','rvs-hint',tr('loading')),toolbar=$('div','rvs-toolbar');
    const scroll=$('div','rvs-scroll'),list=$('div'),status=$('span','',tr('statusIdle')),footer=$('footer');status.setAttribute('role','status');status.setAttribute('aria-live','polite');
    const base=$('select'),source=$('select');base.setAttribute('aria-label',tr('ariaBaseline'));source.setAttribute('aria-label',tr('ariaSource'));
    const mode=$('select');mode.setAttribute('aria-label',tr('ariaMode'));for(const [value,label] of [['timeline',tr('modeTimeline')],['baseline',tr('modeBaseline')]]){const option=$('option','',label);option.value=value;mode.append(option);}
    const diff=$('input');diff.type='checkbox';diff.checked=true;const diffLabel=$('label');diffLabel.append(diff,document.createTextNode(` ${tr('showChanges')}`));
    const subtree=$('input');subtree.type='checkbox';const subtreeLabel=$('label');subtreeLabel.append(subtree,document.createTextNode(` ${tr('compareChildren')}`));
    const createBox=$('div','rvs-toolbar');createBox.style.padding='12px 0';createBox.hidden=true;
    const copy=$('input');copy.type='checkbox';copy.checked=true;const copyLabel=$('label');copyLabel.append(copy,document.createTextNode(` ${tr('includeChildren')}`));
    const order=$('select');order.setAttribute('aria-label',tr('ariaOrder'));for(const [value,label] of [['oldest',tr('orderOldest')],['newest',tr('orderNewest')]]){const option=$('option','',label);option.value=value;order.append(option);}order.value=config.versionOrder==='newest'?'newest':'oldest';
    const p={el,count,scroll,list,status,base,source,mode,order,diff,subtree,createBox,cards:new Map(),originUid:uid,closed:false,showChildren:true,diffTicket:0,differ:makeDiffer(),off:[],previousFocus,observer:null,editTimer:null};panel=p;
    const viewRow=$('div','rvs-toolbar-row'),compareRow=$('div','rvs-toolbar-row'),viewControls=$('div','rvs-control-group'),compareControls=$('div','rvs-control-group'),utilities=$('div','rvs-control-group rvs-utilities');
    mode.title=tr('modeHelp');
    order.title=tr('orderHelp');
    base.title=tr('baseHelp');
    diff.title=tr('diffHelp');
    subtree.title=tr('subtreeHelp');
    viewControls.append(mode,order);viewRow.append(button(tr('newVersion'),()=>{if(p.model)chooseCreate(p,p.model.currentUid||p.source.value);},'rvs-primary',tr('newVersionHelp')),viewControls);
    compareControls.append(diffLabel,subtreeLabel,base);
    utilities.append(button(tr('refreshChanges'),()=>compare(p),'',tr('refreshChangesHelp')),button(tr('reloadVersions'),()=>refresh(p),'',tr('reloadVersionsHelp')),button(tr('noteTemplates'),()=>{p.settingsBox.hidden=!p.settingsBox.hidden;},'',tr('noteTemplatesHelp')));
    compareRow.append(compareControls,utilities);toolbar.append(viewRow,compareRow);
    createBox.append(source,copyLabel,button(tr('createEdit'),async()=>{createBox.hidden=true;await createVersion(source.value,copy.checked);},'rvs-primary'),button(tr('cancel'),()=>{createBox.hidden=true;}));
    const titlebar=$('div','rvs-titlebar');titlebar.append(title,button(tr('close'),close,'rvs-close'));header.append(titlebar,count,toolbar);p.settingsBox=templateEditor(p);scroll.append(createBox,p.settingsBox,list);footer.append(status,$('span','',`Version Studio ${VERSION}`));el.append(header,scroll,footer);document.body.append(el);
    p.off.push(autocompleteBridge(p));
    p.off.push(listen(order,'change',()=>{orderCards(p);config.versionOrder=order.value;if(settings?.set)Promise.resolve(settings.set('versionOrder',order.value)).catch(fail);}));
    p.off.push(listen(document,'pointerdown',e=>{
      if(busy||nativePass||e.button!==0||p.el.contains(e.target)||e.target.closest?.('.rm-autocomplete__results,[data-rvs-entry]'))return;
      close().catch(fail);
    },true));
    p.off.push(listen(mode,'change',()=>compare(p).catch(fail)));
    p.off.push(listen(diff,'change',()=>compare(p).catch(fail)),listen(base,'change',()=>{if(diff.checked)compare(p).catch(fail);}),listen(subtree,'change',()=>{if(diff.checked)compare(p).catch(fail);}));
    p.off.push(listen(el,'focusout',e=>{const uid=e.target.closest?.('.rvs-card')?.dataset.versionUid;if(!uid)return;clearTimeout(p.editTimer);p.editTimer=setTimeout(()=>{const card=p.cards.get(uid);if(card&&!p.closed)pullCardTime(p,card).catch(fail);},700);}));
    // At most nearby editors mounted. Offscreen versions retain readable text placeholders.
    if(window.IntersectionObserver)p.observer=new IntersectionObserver(entries=>{for(const entry of entries){const card=p.cards.get(entry.target.dataset.versionUid);if(!card)continue;card.near=entry.isIntersecting;if(entry.isIntersecting)mount(p,card).catch(fail);else if(p.pinned!==card.uid&&!card.host.contains(document.activeElement))unmount(card).catch(fail);}},{root:scroll,rootMargin:'600px 0px'});
    try{await refresh(p);}catch(e){status.textContent=e.message;list.append($('p','rvs-error',e.message));}
  }
  function keyMatches(e,key){const named=NAMED_KEYS[key];return named?(e.code===named.code||e.key===named.key):e.key.toLowerCase()===key;}
  // Menu hint in the style of Roam's own label next to Add version (e.g. "Ctrl-Comma").
  function shortcutHint(nativeLabel){
    const keys=config.shortcut.split('+').map(x=>x.trim()).filter(Boolean);if(!keys.length)return '';
    const names={ctrl:'Ctrl',control:'Ctrl',alt:'Alt',shift:'Shift',meta:'Cmd',cmd:'Cmd',command:'Cmd'};
    return keys.map(x=>{const low=x.toLowerCase(),named=NAMED_KEYS[PUNCTUATION[low]||low];return names[low]||named?.label||(x.length===1?x.toUpperCase():x[0].toUpperCase()+x.slice(1));}).join(/\+/.test(nativeLabel||'')?'+':'-');
  }
  off.push(listen(document,'contextmenu',onContext,true),listen(document,'dblclick',onContext,true),listen(document,'click',onClick,true));
  let commandLabel=tr('command');
  off.push(listen(document,'keydown',e=>{
    if(e.repeat||e.isComposing||e.key==='Dead'||!config.shortcut.trim())return;
    const parts=config.shortcut.toLowerCase().split('+').map(x=>x.trim()),last=parts.pop(),key=PUNCTUATION[last]||last;
    if(!key||parts.some(x=>!['ctrl','control','alt','shift','meta','cmd','command'].includes(x)))return;
    if(!keyMatches(e,key)||e.ctrlKey!==(parts.includes('ctrl')||parts.includes('control'))||e.altKey!==parts.includes('alt')||e.shiftKey!==parts.includes('shift')||e.metaKey!==(parts.includes('meta')||parts.includes('cmd')||parts.includes('command')))return;
    const uid=api.ui.getFocusedBlock()?.['block-uid'];if(!uid)return;e.preventDefault();open(uid).catch(fail);
  },true));
  const instance = {version:VERSION,open,get isBusy(){return busy;},async unload(){
    destroyed=true;serial++;stopMenuWatch();off.splice(0).forEach(fn=>fn());
    if(busy)await new Promise(resolveIdle=>idleWaiters.add(resolveIdle));
    await close();
    for(const item of menuEntries)item.remove();menuEntries.clear();
    await palette.removeCommand({label:commandLabel});css.remove();
    if(window[KEY]===instance)delete window[KEY];
  }};
  window[KEY]=instance;
  function settingsPanel(){return {tabTitle:'Version Studio',settings:[
      {id:'language',name:tr('setLanguage'),description:tr('setLanguageDesc'),action:{type:'select',items:Object.values(LANGUAGES),onChange:e=>{switchLanguage(typeof e==='string'?e:e?.target?.value).catch(err=>console.error('[Version Studio]',err));}}},
      {id:'shortcut',name:tr('setShortcut'),description:tr('setShortcutDesc'),action:{type:'input',placeholder:defaults.shortcut,onChange:e=>{config.shortcut=e.target?.value??'';}}},
      {id:'noteTitle',name:tr('setNoteTitle'),description:tr('setNoteTitleDesc'),action:{type:'input',placeholder:defaults.noteTitle,onChange:e=>{config.noteTitle=e.target?.value||defaults.noteTitle;noteTitles.add(config.noteTitle);}}},
      {id:'reasonTemplate',name:tr('setReason'),description:tr('setReasonDesc'),action:{type:'input',placeholder:defaults.reasonTemplate,onChange:e=>{config.reasonTemplate=e.target?.value??defaults.reasonTemplate;}}},
      {id:'evidenceTemplate',name:tr('setEvidence'),description:tr('setEvidenceDesc'),action:{type:'input',placeholder:defaults.evidenceTemplate.replace(/\n/g,'\\n'),onChange:e=>{config.evidenceTemplate=e.target?.value??defaults.evidenceTemplate;}}}
    ]};}
  const runCommand=()=>{const uid=api.ui.getFocusedBlock()?.['block-uid'];return uid?open(uid).catch(fail):message(tr('msgFocus'));};
  // Switching language updates the Settings tab, command palette entry and note templates at once.
  // Templates still at a built-in default follow the new language; customized templates stay as written.
  let switching=Promise.resolve();
  function switchLanguage(value){
    switching=switching.catch(()=>{}).then(async()=>{
      const next=pickLanguage(value);if(destroyed||next===lang)return;
      lang=next;
      for(const key of ['noteTitle','reasonTemplate','evidenceTemplate']){
        if(Object.values(I18N).some(d=>d.defaults[key]===config[key]))config[key]=I18N[lang].defaults[key];
        defaults[key]=I18N[lang].defaults[key];
      }
      noteTitles.add(config.noteTitle);
      const previous=commandLabel;commandLabel=tr('command');
      if(previous!==commandLabel){await palette.removeCommand({label:previous});if(!destroyed)await palette.addCommand({label:commandLabel,callback:runCommand});}
      if(!destroyed&&settings?.panel?.create)await settings.panel.create(settingsPanel());
    });
    return switching;
  }
  try {
    if(settings?.panel?.create)await settings.panel.create(settingsPanel());
    await palette.addCommand({label:commandLabel,callback:runCommand});
  } catch(error) { await instance.unload(); throw error; }
  console.info(`Version Studio ${VERSION} loaded. Right-click a block bullet → ${LABEL}. Native edits save immediately.`);
  return instance;
}

// Roam imports this object, then explicitly calls its lifecycle hooks.
// Importing extension.js alone performs no DOM or graph work.
let runtime = null;
let loading = null;
let unloading = null;
export default {
  async onload({extensionAPI} = {}) {
    if(unloading)await unloading;
    if(loading)return loading;
    loading=(async()=>{
      if(runtime)await runtime.unload();
      runtime=await startVersionStudio(extensionAPI);
    })();
    try { await loading; } finally { loading=null; }
  },
  async onunload() {
    if(unloading)return unloading;
    unloading=(async()=>{
      if(loading)await loading.catch(()=>{});
      const active=runtime;runtime=null;
      if(active)await active.unload();
    })();
    try { await unloading; } finally { unloading=null; }
  }
};
