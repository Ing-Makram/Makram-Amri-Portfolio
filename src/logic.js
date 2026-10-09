import { DCLogic } from './dc.js';

const X = {
 "x0": {
  "en": "Skip",
  "fr": "Passer",
  "ar": "تخطي"
 },
 "x1": {
  "en": "Search",
  "fr": "Rechercher",
  "ar": "بحث"
 },
 "x2": {
  "en": "Open to internships",
  "fr": "Ouvert aux stages",
  "ar": "متاح للتدريب"
 },
 "x3": {
  "en": "Tunis, Tunisia",
  "fr": "Tunis, Tunisie",
  "ar": "تونس العاصمة، تونس"
 },
 "x4": {
  "en": "nexus · ILLUSTRATIVE",
  "fr": "nexus · ILLUSTRATIF",
  "ar": "nexus · توضيحي"
 },
 "x5": {
  "en": "TENANT ISOLATION · ILLUSTRATIVE",
  "fr": "ISOLATION DES TENANTS · ILLUSTRATIF",
  "ar": "عزل المستأجرين · توضيحي"
 },
 "x6": {
  "en": "01 · REQUEST",
  "fr": "01 · REQUÊTE",
  "ar": "01 · الطلب"
 },
 "x7": {
  "en": "02 · AUTH",
  "fr": "02 · AUTH",
  "ar": "02 · المصادقة"
 },
 "x8": {
  "en": "JWT valid. Access tokens live 15 minutes.",
  "fr": "JWT valide. Les jetons d’accès durent 15 minutes.",
  "ar": "رمز JWT صالح. مدة رموز الوصول 15 دقيقة."
 },
 "x9": {
  "en": "03 · PERMISSION",
  "fr": "03 · PERMISSION",
  "ar": "03 · الصلاحية"
 },
 "x10": {
  "en": "04 · SELECTOR",
  "fr": "04 · SÉLECTEUR",
  "ar": "04 · المُحدِّد"
 },
 "x11": {
  "en": "05 · RESULT",
  "fr": "05 · RÉSULTAT",
  "ar": "05 · النتيجة"
 },
 "x12": {
  "en": "RESULT →",
  "fr": "RÉSULTAT →",
  "ar": "النتيجة ←"
 },
 "x13": {
  "en": "TESTS · 387 BACKEND + 93 FRONTEND",
  "fr": "TESTS · 387 BACKEND + 93 FRONTEND",
  "ar": "اختبارات · 387 للخلفية + 93 للواجهة"
 },
 "x14": {
  "en": "DOMAIN APPS, ONE-WAY LAYERS",
  "fr": "APPLICATIONS MÉTIER, COUCHES À SENS UNIQUE",
  "ar": "تطبيقات المجال، طبقات باتجاه واحد"
 },
 "x15": {
  "en": "ROLES · OWNER, ADMIN, MEMBER",
  "fr": "RÔLES · PROPRIÉTAIRE, ADMIN, MEMBRE",
  "ar": "الأدوار · مالك، مشرف، عضو"
 },
 "x16": {
  "en": "NOT 403 · FOR CROSS-TENANT ACCESS",
  "fr": "ET NON 403 · ACCÈS ENTRE TENANTS",
  "ar": "وليس 403 · عند الوصول بين المستأجرين"
 },
 "x17": {
  "en": "STATUS",
  "fr": "STATUT",
  "ar": "الحالة"
 },
 "x18": {
  "en": "Public, MIT license, CI on every push",
  "fr": "Public, licence MIT, CI à chaque push",
  "ar": "عام، رخصة MIT، تكامل مستمر عند كل دفع"
 },
 "x19": {
  "en": "BACKEND",
  "fr": "BACKEND",
  "ar": "الخلفية"
 },
 "x20": {
  "en": "FRONTEND",
  "fr": "FRONTEND",
  "ar": "الواجهة"
 },
 "x21": {
  "en": "DEPLOY",
  "fr": "DÉPLOIEMENT",
  "ar": "النشر"
 },
 "x22": {
  "en": "SOURCE",
  "fr": "CODE SOURCE",
  "ar": "المصدر"
 },
 "x23": {
  "en": "Read the design decisions",
  "fr": "Lire les décisions de conception",
  "ar": "اقرأ قرارات التصميم"
 },
 "x24": {
  "en": "View the repository",
  "fr": "Voir le dépôt",
  "ar": "عرض المستودع"
 },
 "x25": {
  "en": "BACKEND LAYERS · ONE DIRECTION",
  "fr": "COUCHES BACKEND · UN SEUL SENS",
  "ar": "طبقات الخلفية · اتجاه واحد"
 },
 "x26": {
  "en": "Every app follows the same layering, so tenant scoping lives in one place",
  "fr": "Chaque application suit la même architecture en couches, donc l’isolation par tenant vit à un seul endroit",
  "ar": "يتبع كل تطبيق نفس الطبقات، لذلك يوجد عزل المستأجرين في مكان واحد"
 },
 "x27": {
  "en": "Schema, validation, constraints and indexes.",
  "fr": "Schéma, validation, contraintes et index.",
  "ar": "المخطط والتحقق والقيود والفهارس."
 },
 "x28": {
  "en": "Read paths. The only place tenant scoping is written.",
  "fr": "Chemins de lecture. Le seul endroit où l’isolation par tenant est écrite.",
  "ar": "مسارات القراءة. المكان الوحيد الذي يُكتب فيه عزل المستأجرين."
 },
 "x29": {
  "en": "Write paths. Atomic, enforce the invariants.",
  "fr": "Chemins d’écriture. Atomiques, ils garantissent les invariants.",
  "ar": "مسارات الكتابة. ذرّية وتفرض الثوابت."
 },
 "x30": {
  "en": "Reusable classes: may this actor do this?",
  "fr": "Classes réutilisables : cet acteur peut-il faire cela ?",
  "ar": "أصناف قابلة لإعادة الاستخدام: هل يُسمح لهذا الفاعل بذلك؟"
 },
 "x31": {
  "en": "Input parsing and output shape.",
  "fr": "Analyse des entrées et forme des sorties.",
  "ar": "تحليل المدخلات وشكل المخرجات."
 },
 "x32": {
  "en": "Thin HTTP glue. One selector or service call.",
  "fr": "Fine couche HTTP. Un seul appel à un sélecteur ou un service.",
  "ar": "طبقة HTTP رقيقة. استدعاء واحد لمُحدِّد أو خدمة."
 },
 "x33": {
  "en": "RUNTIME ARCHITECTURE · DOCKER COMPOSE",
  "fr": "ARCHITECTURE D’EXÉCUTION · DOCKER COMPOSE",
  "ar": "بنية التشغيل · DOCKER COMPOSE"
 },
 "x34": {
  "en": "One request, four hops",
  "fr": "Une requête, quatre étapes",
  "ar": "طلب واحد، أربع محطات"
 },
 "x35": {
  "en": "Browser",
  "fr": "Navigateur",
  "ar": "المتصفح"
 },
 "x36": {
  "en": "React 19 + TypeScript. Access token held in memory.",
  "fr": "React 19 + TypeScript. Jeton d’accès conservé en mémoire.",
  "ar": "React 19 + TypeScript. رمز الوصول محفوظ في الذاكرة."
 },
 "x37": {
  "en": "Serves the app and proxies the API.",
  "fr": "Sert l’application et relaie l’API.",
  "ar": "يخدم التطبيق ويمرّر طلبات الـ API."
 },
 "x38": {
  "en": "DRF API in layers. Tenant scoping in selectors.",
  "fr": "API DRF en couches. Isolation par tenant dans les sélecteurs.",
  "ar": "واجهة DRF بطبقات. عزل المستأجرين داخل المُحدِّدات."
 },
 "x39": {
  "en": "One schema, every row carries an organization.",
  "fr": "Un seul schéma, chaque ligne porte une organisation.",
  "ar": "مخطط واحد، وكل صف يحمل مؤسسة."
 },
 "x40": {
  "en": "Health probes",
  "fr": "Sondes de santé",
  "ar": "فحوصات الصحة"
 },
 "x41": {
  "en": "JSON logs with request IDs",
  "fr": "Logs JSON avec identifiants de requête",
  "ar": "سجلات JSON مع معرّفات الطلبات"
 },
 "x42": {
  "en": "End-to-end smoke test in CI",
  "fr": "Test de fumée de bout en bout en CI",
  "ar": "اختبار شامل سريع في التكامل المستمر"
 },
 "x43": {
  "en": "Non-root container",
  "fr": "Conteneur non-root",
  "ar": "حاوية بدون صلاحيات الجذر"
 },
 "x44": {
  "en": "THE CODE BEHIND THE 404",
  "fr": "LE CODE DERRIÈRE LE 404",
  "ar": "الشيفرة وراء الـ 404"
 },
 "x45": {
  "en": "Tenant scoping is written once",
  "fr": "L’isolation par tenant est écrite une seule fois",
  "ar": "يُكتب عزل المستأجرين مرة واحدة"
 },
 "x46": {
  "en": "Every read of invoices goes through this selector, so a record from another organization is simply not found and the API answers 404. Services and API code never query the model directly.",
  "fr": "Chaque lecture de factures passe par ce sélecteur : un enregistrement d’une autre organisation est tout simplement introuvable et l’API répond 404. Les services et le code de l’API n’interrogent jamais le modèle directement.",
  "ar": "كل قراءة للفواتير تمر عبر هذا المُحدِّد، فالسجل التابع لمؤسسة أخرى غير موجود ببساطة وتردّ الواجهة بـ 404. ولا تستعلم الخدمات ولا شيفرة الـ API عن النموذج مباشرة."
 },
 "x47": {
  "en": "backend/apps/invoices/selectors.py · trimmed",
  "fr": "backend/apps/invoices/selectors.py · extrait",
  "ar": "backend/apps/invoices/selectors.py · مقتطف"
 },
 "x48": {
  "en": "TENANCY",
  "fr": "MULTI-TENANCE",
  "ar": "تعدد المستأجرين"
 },
 "x49": {
  "en": "One user, several organizations",
  "fr": "Un utilisateur, plusieurs organisations",
  "ar": "مستخدم واحد، عدة مؤسسات"
 },
 "x50": {
  "en": "A user can belong to many organizations and switch between them. Customers, orders, invoices and the dashboard are scoped to the active one.",
  "fr": "Un utilisateur peut appartenir à plusieurs organisations et passer de l’une à l’autre. Clients, commandes, factures et tableau de bord sont limités à l’organisation active.",
  "ar": "يمكن للمستخدم الانتماء إلى عدة مؤسسات والتبديل بينها. العملاء والطلبات والفواتير ولوحة المعلومات مقيّدة بالمؤسسة النشطة."
 },
 "x51": {
  "en": "ROLES",
  "fr": "RÔLES",
  "ar": "الأدوار"
 },
 "x52": {
  "en": "Owner, admin, member",
  "fr": "Propriétaire, admin, membre",
  "ar": "مالك، مشرف، عضو"
 },
 "x53": {
  "en": "Any member can read. Only owners and admins can write, and the owner is protected. Tenant isolation and roles are tested as explicit properties.",
  "fr": "Tout membre peut lire. Seuls les propriétaires et les admins peuvent écrire, et le propriétaire est protégé. L’isolation des tenants et les rôles sont testés comme des propriétés explicites.",
  "ar": "يستطيع أي عضو القراءة. وحدهم المالكون والمشرفون يكتبون، والمالك محمي. يُختبر عزل المستأجرين والأدوار كخصائص صريحة."
 },
 "x54": {
  "en": "WORKFLOW",
  "fr": "FLUX DE TRAVAIL",
  "ar": "سير العمل"
 },
 "x55": {
  "en": "Customers, orders, invoices",
  "fr": "Clients, commandes, factures",
  "ar": "العملاء والطلبات والفواتير"
 },
 "x56": {
  "en": "Orders move through a status workflow. Invoices are auto-numbered per organization (INV-0001), with overdue highlighting and a management command for the sweep.",
  "fr": "Les commandes suivent un workflow de statuts. Les factures sont numérotées automatiquement par organisation (INV-0001), avec mise en évidence des retards et une commande de gestion pour le balayage.",
  "ar": "تمرّ الطلبات بسير حالات. تُرقَّم الفواتير تلقائيًا لكل مؤسسة (INV-0001) مع إبراز المتأخرة وأمر إداري لعملية الفحص."
 },
 "x57": {
  "en": "DASHBOARD",
  "fr": "TABLEAU DE BORD",
  "ar": "لوحة المعلومات"
 },
 "x58": {
  "en": "An overview from two endpoints",
  "fr": "Une vue d’ensemble à partir de deux endpoints",
  "ar": "نظرة عامة من نقطتي وصول"
 },
 "x59": {
  "en": "One aggregation endpoint for the headline totals and one for the daily series behind the 30 and 90 day charts.",
  "fr": "Un endpoint d’agrégation pour les totaux et un pour la série quotidienne derrière les graphiques sur 30 et 90 jours.",
  "ar": "نقطة تجميع واحدة للإجماليات وأخرى للسلسلة اليومية خلف مخططات 30 و90 يومًا."
 },
 "x60": {
  "en": "SECURITY",
  "fr": "SÉCURITÉ",
  "ar": "الأمان"
 },
 "x61": {
  "en": "Short-lived tokens, fail-fast config",
  "fr": "Jetons à courte durée, configuration stricte",
  "ar": "رموز قصيرة العمر وإعداد صارم"
 },
 "x62": {
  "en": "15-minute access tokens held in memory, refresh tokens blacklisted on logout, a non-root container, and production settings that refuse to start without secrets.",
  "fr": "Jetons d’accès de 15 minutes gardés en mémoire, jetons de rafraîchissement mis en liste noire à la déconnexion, conteneur non-root, et paramètres de production qui refusent de démarrer sans secrets.",
  "ar": "رموز وصول مدتها 15 دقيقة محفوظة في الذاكرة، ورموز التجديد تُحظر عند الخروج، وحاوية بدون صلاحيات الجذر، وإعدادات إنتاج ترفض التشغيل بلا أسرار."
 },
 "x63": {
  "en": "PRODUCTION",
  "fr": "PRODUCTION",
  "ar": "الإنتاج"
 },
 "x64": {
  "en": "One compose command to run it",
  "fr": "Une seule commande compose pour tout lancer",
  "ar": "أمر compose واحد للتشغيل"
 },
 "x65": {
  "en": "PostgreSQL, Gunicorn and nginx, health probes, structured JSON logs with request IDs, and an end-to-end smoke test in CI.",
  "fr": "PostgreSQL, Gunicorn et nginx, sondes de santé, logs JSON structurés avec identifiants de requête, et un test de fumée de bout en bout en CI.",
  "ar": "PostgreSQL وGunicorn وnginx، وفحوصات الصحة، وسجلات JSON منظّمة بمعرّفات الطلبات، واختبار شامل سريع في التكامل المستمر."
 },
 "x66": {
  "en": "OVERVIEW · DEMO DATA",
  "fr": "APERÇU · DONNÉES DE DÉMO",
  "ar": "نظرة عامة · بيانات تجريبية"
 },
 "x67": {
  "en": "INVOICES · FILTERS AND STATUS · DEMO DATA",
  "fr": "FACTURES · FILTRES ET STATUTS · DONNÉES DE DÉMO",
  "ar": "الفواتير · المرشحات والحالات · بيانات تجريبية"
 },
 "x68": {
  "en": "WHAT I WOULD DO NEXT",
  "fr": "CE QUE JE FERAIS ENSUITE",
  "ar": "ما سأفعله لاحقًا"
 },
 "x69": {
  "en": "Cursor pagination",
  "fr": "Pagination par curseur",
  "ar": "ترقيم الصفحات بالمؤشر"
 },
 "x70": {
  "en": "Generated OpenAPI docs",
  "fr": "Docs OpenAPI générées",
  "ar": "توثيق OpenAPI مولَّد"
 },
 "x71": {
  "en": "Auth throttling",
  "fr": "Limitation du débit d’auth",
  "ar": "تحديد معدل المصادقة"
 },
 "x72": {
  "en": "Refresh-token rotation",
  "fr": "Rotation des jetons de rafraîchissement",
  "ar": "تدوير رموز التجديد"
 },
 "x73": {
  "en": "Scheduled overdue sweep",
  "fr": "Balayage planifié des retards",
  "ar": "فحص مجدول للمتأخرات"
 },
 "x74": {
  "en": "MORE PROJECTS",
  "fr": "AUTRES PROJETS",
  "ar": "مشاريع أخرى"
 },
 "x75": {
  "en": "More things I have built",
  "fr": "Autres choses que j’ai construites",
  "ar": "أشياء أخرى بنيتها"
 },
 "xTun": {
  "en": "A full-stack AI study assistant for Tunisian students. They chat with Claude models in streaming mode, with history and progress tracking. Personal project, 2026.",
  "fr": "Un assistant d’étude IA full-stack pour les étudiants tunisiens. Ils discutent avec les modèles Claude en streaming, avec historique et suivi de progression. Projet personnel, 2026.",
  "ar": "مساعد دراسة بالذكاء الاصطناعي متكامل للطلبة التونسيين. يدردشون مع نماذج Claude بالبث المتدفق، مع سجل وتتبّع للتقدّم. مشروع شخصي، 2026."
 },
 "xTun1": {
  "en": "AI cost control",
  "fr": "Maîtrise du coût IA",
  "ar": "التحكم في كلفة الذكاء الاصطناعي"
 },
 "xTun1d": {
  "en": "Credit caps and model routing cap the API cost per student.",
  "fr": "Des plafonds de crédits et un routage de modèles limitent le coût d’API par étudiant.",
  "ar": "سقوف للرصيد وتوجيه للنماذج يحدّان من كلفة الـ API لكل طالب."
 },
 "xTun2": {
  "en": "Built for Tunisia",
  "fr": "Pensé pour la Tunisie",
  "ar": "مصمَّم لتونس"
 },
 "xTun2d": {
  "en": "Tunisia-specific payments, and the whole app in English, French and Arabic (RTL).",
  "fr": "Paiements adaptés à la Tunisie, et toute l’app en anglais, français et arabe (RTL).",
  "ar": "دفع خاص بتونس، والتطبيق كله بالإنجليزية والفرنسية والعربية (RTL)."
 },
 "xTun3": {
  "en": "Secure and tested",
  "fr": "Sécurisé et testé",
  "ar": "آمن ومُختبَر"
 },
 "xTun3d": {
  "en": "JWT security, about 1,000 backend and 540 frontend tests, CI on GitHub Actions.",
  "fr": "Sécurité JWT, environ 1 000 tests backend et 540 frontend, CI sur GitHub Actions.",
  "ar": "أمان JWT، نحو 1000 اختبار للخلفية و540 للواجهة، وتكامل مستمر على GitHub Actions."
 },
 "xTunS1": {
  "en": "Pilot planned",
  "fr": "Pilote prévu",
  "ar": "تجربة تجريبية مخططة"
 },
 "xTunS2": {
  "en": "~1,500 tests",
  "fr": "~1 500 tests",
  "ar": "~1500 اختبار"
 },
 "xTunS3": {
  "en": "3 languages",
  "fr": "3 langues",
  "ar": "3 لغات"
 },
 "x76": {
  "en": "AI · IN DEVELOPMENT, PILOT PLANNED",
  "fr": "IA · EN DÉVELOPPEMENT, PILOTE PRÉVU",
  "ar": "ذكاء اصطناعي · قيد التطوير، تجربة مخططة"
 },
 "x77": {
  "en": "TunisIA",
  "fr": "TunisIA",
  "ar": "TunisIA"
 },
 "x78": {
  "en": "Streaming responses",
  "fr": "Réponses en streaming",
  "ar": "ردود متدفقة"
 },
 "x79": {
  "en": "JWT auth",
  "fr": "Auth JWT",
  "ar": "مصادقة JWT"
 },
 "x80": {
  "en": "AI · PROTOTYPE",
  "fr": "IA · PROTOTYPE",
  "ar": "ذكاء اصطناعي · نموذج أولي"
 },
 "x81": {
  "en": "A calorie tracker that recognizes food from a photo. A Django backend classifies the meal with TensorFlow in a Celery task, logs the nutrition and serves REST and GraphQL endpoints.",
  "fr": "Un compteur de calories qui reconnaît les aliments à partir d’une photo. Un backend Django classe le repas avec TensorFlow dans une tâche Celery, enregistre la nutrition et expose des endpoints REST et GraphQL.",
  "ar": "متتبّع سعرات يتعرّف على الطعام من صورة. تصنّف واجهة Django الوجبة بـ TensorFlow داخل مهمة Celery، وتسجّل التغذية وتوفّر نقاط REST وGraphQL."
 },
 "x82": {
  "en": "View on GitHub",
  "fr": "Voir sur GitHub",
  "ar": "عرض على GitHub"
 },
 "x83": {
  "en": "AI · MOBILE · PROTOTYPE",
  "fr": "IA · MOBILE · PROTOTYPE",
  "ar": "ذكاء اصطناعي · جوّال · نموذج أولي"
 },
 "x84": {
  "en": "A Django API removes image backgrounds with rembg through a Celery task. A Flutter app handles login, uploads and a shared feed.",
  "fr": "Une API Django supprime les arrière-plans des images avec rembg via une tâche Celery. Une application Flutter gère la connexion, les envois et un fil partagé.",
  "ar": "تزيل واجهة Django خلفيات الصور بـ rembg عبر مهمة Celery. ويتولى تطبيق Flutter تسجيل الدخول والرفع وموجزًا مشتركًا."
 },
 "x85": {
  "en": "7 DESIGN PATTERNS",
  "fr": "7 DESIGN PATTERNS",
  "ar": "7 أنماط تصميم"
 },
 "x86": {
  "en": "Seven classic patterns working together in one Java order flow: Composite, Strategy, Observer, Factory, State, Adapter and Decorator.",
  "fr": "Sept patrons classiques réunis dans un seul flux de commande Java : Composite, Strategy, Observer, Factory, State, Adapter et Decorator.",
  "ar": "سبعة أنماط كلاسيكية تعمل معًا في تدفق طلب واحد بلغة Java: Composite وStrategy وObserver وFactory وState وAdapter وDecorator."
 },
 "x87": {
  "en": "Java, object-oriented design",
  "fr": "Java, conception orientée objet",
  "ar": "Java، تصميم كائني التوجه"
 },
 "x88": {
  "en": "LIVE · FREELANCE",
  "fr": "EN LIGNE · FREELANCE",
  "ar": "منشور · عمل حر"
 },
 "x89": {
  "en": "Client portfolio site",
  "fr": "Site portfolio client",
  "ar": "موقع معرض أعمال لعميل"
 },
 "x90": {
  "en": "A premium, animated and responsive portfolio built for an electrical engineer, deployed on Vercel.",
  "fr": "Un portfolio premium, animé et responsive réalisé pour un ingénieur électricien, déployé sur Vercel.",
  "ar": "معرض أعمال راقٍ ومتحرك ومتجاوب صُنع لمهندس كهرباء، ومنشور على Vercel."
 },
 "x91": {
  "en": "View live site",
  "fr": "Voir le site",
  "ar": "عرض الموقع"
 },
 "x92": {
  "en": "The rest is on GitHub",
  "fr": "Le reste est sur GitHub",
  "ar": "الباقي على GitHub"
 },
 "x93": {
  "en": "Smaller experiments and course work live in the full repository list.",
  "fr": "Les petites expériences et projets de cours sont dans la liste complète des dépôts.",
  "ar": "التجارب الصغيرة وأعمال المقررات في قائمة المستودعات الكاملة."
 },
 "x94": {
  "en": "ABOUT",
  "fr": "À PROPOS",
  "ar": "نبذة"
 },
 "x95": {
  "en": "A student who likes shipping things that work.",
  "fr": "Un étudiant qui aime livrer des choses qui fonctionnent.",
  "ar": "طالب يحب تسليم أشياء تعمل فعلًا."
 },
 "x96": {
  "en": "I am Makram, 22, a software engineering student at SESAME University in Tunis. I build full-stack products with Django, React and TypeScript, and add AI where it earns its place. I chair the IEEE RAS student chapter, run Meta Ads and build websites for local clients, and took 3rd place at the ODC AI hackathon.",
  "fr": "Je suis Makram, 22 ans, étudiant en génie logiciel à SESAME University, à Tunis. Je construis des produits full-stack avec Django, React et TypeScript, et j’ajoute l’IA là où elle apporte quelque chose. Je préside le chapitre étudiant IEEE RAS, je gère des campagnes Meta Ads et je crée des sites pour des clients locaux, et j’ai obtenu la 3e place au hackathon IA de l’ODC.",
  "ar": "أنا مكرم، 22 عامًا، طالب هندسة برمجيات في جامعة SESAME بتونس. أبني منتجات متكاملة بـ Django وReact وTypeScript، وأضيف الذكاء الاصطناعي حيث يستحق ذلك. أترأس الفرع الطلابي IEEE RAS، وأدير حملات Meta Ads وأبني مواقع لعملاء محليين، وحصلت على المركز الثالث في هاكاثون الذكاء الاصطناعي لدى ODC."
 },
 "x97": {
  "en": "Arabic · French · English",
  "fr": "Arabe · Français · Anglais",
  "ar": "العربية · الفرنسية · الإنجليزية"
 },
 "x98": {
  "en": "JOURNEY",
  "fr": "PARCOURS",
  "ar": "المسيرة"
 },
 "x99": {
  "en": "From networking and math to shipping full-stack products",
  "fr": "Des réseaux et des maths à la livraison de produits full-stack",
  "ar": "من الشبكات والرياضيات إلى بناء منتجات متكاملة"
 },
 "x100": {
  "en": "ESAT, preparatory cycle",
  "fr": "ESAT, cycle préparatoire",
  "ar": "ESAT، السنة التحضيرية"
 },
 "x101": {
  "en": "Two years of intensive math and physics that built the discipline behind everything after.",
  "fr": "Deux années intensives de maths et de physique qui ont forgé la discipline de tout ce qui a suivi.",
  "ar": "عامان مكثفان من الرياضيات والفيزياء بنيا الانضباط الذي قامت عليه كل مرحلة لاحقة."
 },
 "x102": {
  "en": "2024 – PRESENT",
  "fr": "2024 – AUJOURD’HUI",
  "ar": "2024 – الآن"
 },
 "x103": {
  "en": "SESAME University, software engineering",
  "fr": "SESAME University, génie logiciel",
  "ar": "جامعة SESAME، هندسة البرمجيات"
 },
 "x104": {
  "en": "Engineering degree in software engineering. CCNA 1 certified through Cisco Networking Academy.",
  "fr": "Cycle ingénieur en génie logiciel. Certifié CCNA 1 via Cisco Networking Academy.",
  "ar": "شهادة مهندس في هندسة البرمجيات. حاصل على CCNA 1 عبر Cisco Networking Academy."
 },
 "x105": {
  "en": "3rd place, ODC AI hackathon",
  "fr": "3e place, hackathon IA de l’ODC",
  "ar": "المركز الثالث، هاكاثون الذكاء الاصطناعي لدى ODC"
 },
 "x106": {
  "en": "A 16-hour AI hackathon hosted by Orange Digital Center.",
  "fr": "Un hackathon IA de 16 heures organisé par Orange Digital Center.",
  "ar": "هاكاثون ذكاء اصطناعي لمدة 16 ساعة نظّمه Orange Digital Center."
 },
 "x107": {
  "en": "Leading and freelancing",
  "fr": "Responsabilités et freelance",
  "ar": "القيادة والعمل الحر"
 },
 "x108": {
  "en": "Chair of the IEEE RAS student chapter, Vice Chair and Treasurer of BLAST Club, and freelance Meta Ads manager and web developer.",
  "fr": "Président du chapitre étudiant IEEE RAS, vice-président et trésorier du BLAST Club, et freelance Meta Ads et développeur web.",
  "ar": "رئيس الفرع الطلابي IEEE RAS، ونائب الرئيس وأمين الصندوق في BLAST Club، ومدير حملات Meta Ads ومطوّر ويب حر."
 },
 "x109": {
  "en": "NOW",
  "fr": "MAINTENANT",
  "ar": "الآن"
 },
 "x110": {
  "en": "Building full-stack products, looking for an internship",
  "fr": "Je construis des produits full-stack et je cherche un stage",
  "ar": "أبني منتجات متكاملة وأبحث عن تدريب"
 },
 "x111": {
  "en": "Open to a software engineering internship where I can ship real features with a team.",
  "fr": "Ouvert à un stage en génie logiciel où je peux livrer de vraies fonctionnalités avec une équipe.",
  "ar": "منفتح على تدريب في هندسة البرمجيات أقدّم فيه ميزات حقيقية ضمن فريق."
 },
 "x112": {
  "en": "TOOLBOX",
  "fr": "BOÎTE À OUTILS",
  "ar": "صندوق الأدوات"
 },
 "x113": {
  "en": "What I work with",
  "fr": "Avec quoi je travaille",
  "ar": "ما أعمل به"
 },
 "x114": {
  "en": "LANGUAGES",
  "fr": "LANGAGES",
  "ar": "اللغات البرمجية"
 },
 "x115": {
  "en": "WEB",
  "fr": "WEB",
  "ar": "الويب"
 },
 "x116": {
  "en": "TOOLS",
  "fr": "OUTILS",
  "ar": "أدوات التطوير"
 },
 "x117": {
  "en": "SPOKEN",
  "fr": "LANGUES PARLÉES",
  "ar": "اللغات المحكية"
 },
 "x118": {
  "en": "Arabic · native",
  "fr": "Arabe · langue maternelle",
  "ar": "العربية · لغة أم"
 },
 "x119": {
  "en": "French · B2",
  "fr": "Français · B2",
  "ar": "الفرنسية · B2"
 },
 "x120": {
  "en": "English · B2",
  "fr": "Anglais · B2",
  "ar": "الإنجليزية · B2"
 },
 "x121": {
  "en": "BEYOND CODE",
  "fr": "AU-DELÀ DU CODE",
  "ar": "ما وراء الشيفرة"
 },
 "x122": {
  "en": "Meta Ads for Tunisian brands",
  "fr": "Meta Ads pour des marques tunisiennes",
  "ar": "Meta Ads لعلامات تونسية"
 },
 "x123": {
  "en": "9+ campaigns, 500K+ impressions, 5K+ new followers, as low as $0.01 per profile visit.",
  "fr": "9+ campagnes, 500K+ impressions, 5K+ nouveaux abonnés, dès 0,01 $ par visite de profil.",
  "ar": "أكثر من 9 حملات، وأكثر من 500 ألف ظهور، وأكثر من 5 آلاف متابع جديد، وبتكلفة تصل إلى 0.01 دولار لكل زيارة للملف."
 },
 "x124": {
  "en": "Leadership",
  "fr": "Leadership",
  "ar": "القيادة"
 },
 "x125": {
  "en": "Chair of the IEEE RAS student chapter at SESAME. 3rd place, ODC AI hackathon, 2025.",
  "fr": "Président du chapitre étudiant IEEE RAS à SESAME. 3e place, hackathon IA de l’ODC, 2025.",
  "ar": "رئيس الفرع الطلابي IEEE RAS في SESAME. المركز الثالث، هاكاثون الذكاء الاصطناعي لدى ODC، 2025."
 },
 "x126": {
  "en": "AVAILABLE FOR A SOFTWARE ENGINEERING INTERNSHIP",
  "fr": "DISPONIBLE POUR UN STAGE EN GÉNIE LOGICIEL",
  "ar": "متاح لتدريب في هندسة البرمجيات"
 },
 "x127": {
  "en": "Close",
  "fr": "Fermer",
  "ar": "إغلاق"
 },
 "x128": {
  "en": "NEXUS · ARCHITECTURE DECISION RECORDS",
  "fr": "NEXUS · DOSSIERS DE DÉCISION D’ARCHITECTURE",
  "ar": "NEXUS · سجلات قرارات البنية"
 },
 "x129": {
  "en": "Why NEXUS is built the way it is",
  "fr": "Pourquoi NEXUS est construit ainsi",
  "ar": "لماذا بُني NEXUS بهذه الطريقة"
 },
 "x130": {
  "en": "Six short decision records live in the repository. This is the gist of each.",
  "fr": "Six courts dossiers de décision se trouvent dans le dépôt. Voici l’essentiel de chacun.",
  "ar": "توجد ستة سجلات قرار قصيرة في المستودع. هذا ملخص كل منها."
 },
 "x131": {
  "en": "Modular monolith",
  "fr": "Monolithe modulaire",
  "ar": "تطبيق متكامل معياري"
 },
 "x132": {
  "en": "One deployable unit for an early-stage product, so features can be refactored cheaply across boundaries.",
  "fr": "Une seule unité déployable pour un produit en phase initiale, afin de refactoriser à moindre coût entre les frontières de fonctionnalités.",
  "ar": "وحدة نشر واحدة لمنتج في مرحلة مبكرة، لتسهيل إعادة الهيكلة بين حدود الميزات بتكلفة منخفضة."
 },
 "x133": {
  "en": "Layered architecture",
  "fr": "Architecture en couches",
  "ar": "بنية بطبقات"
 },
 "x134": {
  "en": "One obvious home for each kind of logic, so rules are testable and reusable from the API, admin and management commands.",
  "fr": "Un foyer évident pour chaque type de logique, afin que les règles soient testables et réutilisables depuis l’API, l’admin et les commandes de gestion.",
  "ar": "مكان واضح لكل نوع من المنطق، لتكون القواعد قابلة للاختبار وإعادة الاستخدام من الـ API ولوحة الإدارة وأوامر الإدارة."
 },
 "x135": {
  "en": "Multi-tenancy with a shared schema",
  "fr": "Multi-tenance à schéma partagé",
  "ar": "تعدد المستأجرين بمخطط مشترك"
 },
 "x136": {
  "en": "Row-level tenancy through Organization and Membership with owner, admin and member roles. Cross-tenant access resolves to 404 so existence is never revealed.",
  "fr": "Isolation au niveau des lignes via Organization et Membership avec les rôles propriétaire, admin et membre. Un accès entre tenants renvoie 404 pour ne jamais révéler l’existence.",
  "ar": "عزل على مستوى الصفوف عبر Organization وMembership بأدوار مالك ومشرف وعضو. يُعاد 404 عند الوصول بين المستأجرين حتى لا يُكشف وجود السجل."
 },
 "x137": {
  "en": "Email login and JWT",
  "fr": "Connexion par email et JWT",
  "ar": "الدخول بالبريد الإلكتروني وJWT"
 },
 "x138": {
  "en": "A custom user model with email as the login field from the first migration, and stateless bearer tokens that fit the SPA and future API clients.",
  "fr": "Un modèle utilisateur personnalisé avec l’email comme identifiant dès la première migration, et des jetons bearer sans état adaptés à la SPA et aux futurs clients de l’API.",
  "ar": "نموذج مستخدم مخصص يعتمد البريد الإلكتروني للدخول منذ أول ترحيل، ورموز bearer بلا حالة تناسب تطبيق الصفحة الواحدة وعملاء الـ API المستقبليين."
 },
 "x139": {
  "en": "Defer microservices",
  "fr": "Repousser les microservices",
  "ar": "تأجيل الخدمات المصغّرة"
 },
 "x140": {
  "en": "For a small team on a young product they usually cost more than they return.",
  "fr": "Pour une petite équipe sur un produit jeune, ils coûtent généralement plus qu’ils ne rapportent.",
  "ar": "بالنسبة لفريق صغير ومنتج حديث، فإنها تكلّف عادة أكثر مما تعود به."
 },
 "x141": {
  "en": "Patterns in use and deferred",
  "fr": "Patrons utilisés et reportés",
  "ar": "الأنماط المستخدمة والمؤجَّلة"
 },
 "x142": {
  "en": "A shared vocabulary, with later patterns adopted only when a real problem demands them.",
  "fr": "Un vocabulaire commun, les autres patrons n’étant adoptés que lorsqu’un vrai problème l’exige.",
  "ar": "مفردات مشتركة، ولا تُعتمد الأنماط اللاحقة إلا عندما تفرضها مشكلة حقيقية."
 },
 "x143": {
  "en": "KNOWN LIMITATIONS, STATED UP FRONT",
  "fr": "LIMITES CONNUES, ANNONCÉES D’EMBLÉE",
  "ar": "القيود المعروفة، معلنة منذ البداية"
 },
 "x144": {
  "en": "No pagination yet",
  "fr": "Pas encore de pagination",
  "ar": "لا ترقيم للصفحات بعد"
 },
 "x145": {
  "en": "No generated OpenAPI docs",
  "fr": "Pas de docs OpenAPI générées",
  "ar": "لا توثيق OpenAPI مولَّد"
 },
 "x146": {
  "en": "No auth throttling",
  "fr": "Pas de limitation du débit d’auth",
  "ar": "لا تحديد لمعدل المصادقة"
 },
 "x147": {
  "en": "No background jobs",
  "fr": "Pas de tâches en arrière-plan",
  "ar": "لا مهام في الخلفية"
 },
 "x148": {
  "en": "Nothing matches. Try “nexus”, “cv” or “theme”.",
  "fr": "Aucun résultat. Essayez « nexus », « cv » ou « theme ».",
  "ar": "لا نتائج. جرّب «nexus» أو «cv» أو «theme»."
 },
 "phPal": {
  "en": "Jump to a section, project or action",
  "fr": "Aller à une section, un projet ou une action",
  "ar": "انتقل إلى قسم أو مشروع أو إجراء"
 },
 "phTerm": {
  "en": "type help",
  "fr": "tapez help",
  "ar": "اكتب help"
 }
};
const CS = {"nutri": {"kicker": ["AI · PROTOTYPE", "IA · PROTOTYPE", "ذكاء اصطناعي · نموذج أولي"], "title": "NutriScan", "idea": ["Point a camera at a meal and get its nutrition logged, without typing anything.", "Pointer la caméra vers un repas et obtenir sa nutrition enregistrée, sans rien saisir.", "وجّه الكاميرا إلى وجبة وتُسجَّل تغذيتها دون كتابة أي شيء."], "steps": [["Upload a food photo to the Django API with JWT authentication.", "Envoi d’une photo du plat à l’API Django avec authentification JWT.", "رفع صورة الطعام إلى واجهة Django بمصادقة JWT."], ["A Celery worker takes the job so the request stays fast.", "Un worker Celery prend la tâche pour que la requête reste rapide.", "يلتقط عامل Celery المهمة فتبقى الاستجابة سريعة."], ["A TensorFlow/Keras model classifies the food in the image.", "Un modèle TensorFlow/Keras classe l’aliment présent sur l’image.", "يصنّف نموذج TensorFlow/Keras الطعام في الصورة."], ["The matching food item is logged as a meal log for that user.", "L’aliment correspondant est enregistré comme repas pour cet utilisateur.", "يُسجَّل الطعام المطابق كوجبة لهذا المستخدم."], ["REST and GraphQL return only the signed-in user’s data.", "REST et GraphQL ne renvoient que les données de l’utilisateur connecté.", "يعيد REST وGraphQL بيانات المستخدم المسجَّل فقط."]], "status": ["Prototype. The model weights and the dataset are not in the repository.", "Prototype. Les poids du modèle et le jeu de données ne sont pas dans le dépôt.", "نموذج أولي. أوزان النموذج ومجموعة البيانات غير موجودة في المستودع."], "stack": "Django 5 · DRF · SimpleJWT · graphene-django · Celery · Redis · TensorFlow 2.19 · Docker", "href": "https://github.com/Ing-Makram/NurtriScan-AI-Calories-Tracker", "gh": true}, "bg": {"kicker": ["AI · MOBILE · PROTOTYPE", "IA · MOBILE · PROTOTYPE", "ذكاء اصطناعي · جوّال · نموذج أولي"], "title": "AI Background Remover", "idea": ["Remove the background from a photo on your phone and share the result in a feed.", "Supprimer l’arrière-plan d’une photo depuis son téléphone et partager le résultat dans un fil.", "إزالة خلفية صورة من الهاتف ومشاركة النتيجة في موجز."], "steps": [["In the Flutter app, pick an image or paste an image URL.", "Dans l’application Flutter, choisir une image ou coller son URL.", "في تطبيق Flutter، اختر صورة أو الصق رابطها."], ["The app calls the remove-bg endpoint with the user’s token.", "L’application appelle l’endpoint remove-bg avec le jeton de l’utilisateur.", "يستدعي التطبيق نقطة remove-bg برمز المستخدم."], ["A Celery task runs rembg to cut out the subject.", "Une tâche Celery lance rembg pour détourer le sujet.", "تشغّل مهمة Celery الأداة rembg لفصل العنصر عن الخلفية."], ["The result is saved as a processed image for that user.", "Le résultat est enregistré comme image traitée pour cet utilisateur.", "تُحفظ النتيجة كصورة معالَجة لهذا المستخدم."], ["The feed and the GraphQL queries return only the caller’s own images.", "Le fil et les requêtes GraphQL ne renvoient que les images de l’appelant.", "يعيد الموجز واستعلامات GraphQL صور المستخدم نفسه فقط."]], "status": ["Working prototype. SQLite, no CI, and the tests are still stubs.", "Prototype fonctionnel. SQLite, pas de CI, et les tests ne sont encore que des squelettes.", "نموذج أولي يعمل. SQLite وبلا تكامل مستمر، والاختبارات ما زالت هياكل فارغة."], "stack": "Django · DRF · graphene-django · Celery · Redis · rembg · Pillow · Flutter (Provider)", "href": "https://github.com/Ing-Makram/AI-Background-Remover", "gh": true}, "food": {"kicker": ["7 DESIGN PATTERNS", "7 DESIGN PATTERNS", "7 أنماط تصميم"], "title": "Food Delivery System", "idea": ["Model a food order from the cart to the doorstep, and give each design pattern one real job.", "Modéliser une commande de repas du panier à la porte, et donner à chaque patron de conception un vrai rôle.", "نمذجة طلب طعام من السلة إلى باب المنزل، وإعطاء كل نمط تصميم مهمة حقيقية."], "steps": [["Composite: meals built from items like a burger, fries and a drink, or a whole combo.", "Composite : des repas composés d’éléments comme un burger, des frites et une boisson, ou un combo entier.", "Composite: وجبات مكوّنة من عناصر مثل برغر وبطاطس ومشروب، أو كومبو كامل."], ["Decorator: extras such as extra cheese or sauce added on the fly.", "Decorator : suppléments comme du fromage ou de la sauce ajoutés à la volée.", "Decorator: إضافات مثل جبن أو صلصة إضافية تُضاف أثناء الطلب."], ["Strategy: standard or express delivery fee.", "Strategy : frais de livraison standard ou express.", "Strategy: رسوم توصيل عادية أو سريعة."], ["Factory and Adapter: card or cash payment, plus an adapter for an external PayPal API.", "Factory et Adapter : paiement par carte ou en espèces, plus un adaptateur pour une API PayPal externe.", "Factory وAdapter: الدفع بالبطاقة أو نقدًا، مع محوّل لواجهة PayPal خارجية."], ["State and Observer: the order moves from pending to preparing to delivered, and the customer is notified.", "State et Observer : la commande passe de en attente à en préparation puis livrée, et le client est notifié.", "State وObserver: ينتقل الطلب من قيد الانتظار إلى التحضير ثم التسليم، ويُبلَّغ العميل."]], "status": ["A Java teaching project: one coherent app that applies seven patterns together.", "Un projet pédagogique en Java : une seule application cohérente qui applique sept patrons ensemble.", "مشروع تعليمي بلغة Java: تطبيق متماسك واحد يطبّق سبعة أنماط معًا."], "stack": "Java · Composite · Strategy · Observer · Factory · State · Adapter · Decorator", "href": "https://github.com/Ing-Makram/Food-Delivery-System-Using-Design-Patterns", "gh": true}, "client": {"kicker": ["LIVE · FREELANCE", "EN LIGNE · FREELANCE", "منشور · عمل حر"], "title": ["Client portfolio site", "Site portfolio client", "موقع معرض أعمال لعميل"], "idea": ["A portfolio that feels premium for an electrical engineer and works from phone to desktop.", "Un portfolio haut de gamme pour un ingénieur électricien, qui fonctionne du téléphone au bureau.", "معرض أعمال راقٍ لمهندس كهرباء يعمل من الهاتف إلى الحاسوب."], "steps": [["Built with Next.js and TypeScript, styled with Tailwind.", "Construit avec Next.js et TypeScript, stylé avec Tailwind.", "مبني بـ Next.js وTypeScript ومنسّق بـ Tailwind."], ["Animated and responsive.", "Animé et responsive.", "متحرك ومتجاوب مع الشاشات."], ["Deployed on Vercel and live today.", "Déployé sur Vercel et en ligne aujourd’hui.", "منشور على Vercel ومتاح اليوم."]], "status": ["Delivered for a client and live on Vercel.", "Livré à un client et en ligne sur Vercel.", "سُلّم لعميل ومنشور على Vercel."], "stack": "Next.js · TypeScript · Tailwind · Vercel", "href": "https://client-portfolio-lacrim.vercel.app", "gh": false}};
const KB = [{"id": "avail", "cat": "hire", "q": ["Are you available for an internship?", "Es-tu disponible pour un stage ?", "هل أنت متاح للتدريب؟"], "k": ["available", "availability", "internship", "intern", "hire", "hiring", "job", "stage", "disponible", "recrut", "embauch", "open to", "recruiter", "تدريب", "متاح", "توظيف", "وظيفة"], "a": ["Yes. I am looking for a software engineering internship where I can ship real features with a team. The quickest way to reach me is makremamri08@gmail.com.", "Oui. Je cherche un stage en génie logiciel où je peux livrer de vraies fonctionnalités avec une équipe. Le plus simple est de m’écrire à makremamri08@gmail.com.", "نعم. أبحث عن تدريب في هندسة البرمجيات أقدّم فيه ميزات حقيقية ضمن فريق. أسرع طريقة للتواصل: makremamri08@gmail.com"], "follow": ["why", "looking", "logi"], "act": ["email"], "more": null}, {"id": "why", "cat": "hire", "q": ["Why should we hire you?", "Pourquoi te recruter ?", "لماذا يجب توظيفك؟"], "k": ["why should", "hire you", "why you", "why hire", "why us", "pourquoi vous", "pourquoi te", "لماذا"], "a": ["Because I finish things end to end. NEXUS has a real architecture, 480 tests, CI and Docker, and I wrote down its trade-offs and limits honestly. I also lead people (IEEE RAS chair, BLAST Club) and deliver for clients, so I can work in a team and ship under real constraints.", "Parce que je mène les choses jusqu’au bout. NEXUS a une vraie architecture, 480 tests, la CI et Docker, et j’ai documenté honnêtement ses compromis et ses limites. Je dirige aussi des gens (président IEEE RAS, BLAST Club) et je livre pour des clients, donc je sais travailler en équipe et livrer sous contraintes réelles.", "لأنني أُنهي الأشياء من البداية إلى النهاية. لدى NEXUS بنية حقيقية و480 اختبارًا وتكاملًا مستمرًا وDocker، وقد دوّنت مفاضلاته وحدوده بصدق. كما أقود فِرَقًا (رئيس IEEE RAS وBLAST Club) وأنجز أعمالًا لعملاء، فأستطيع العمل ضمن فريق والتسليم تحت قيود حقيقية."], "follow": ["strengths", "team", "nexus"], "act": ["nexus"], "more": null}, {"id": "strengths", "cat": "hire", "q": ["What are your strengths?", "Quels sont tes points forts ?", "ما نقاط قوتك؟"], "k": ["strength", "strengths", "good at", "forces", "point fort", "points forts", "نقاط القوة", "قوة"], "a": ["Structure and follow-through. I like clean layering (NEXUS keeps tenant rules in one place), I test the behavior that matters, and I document decisions. I am comfortable across the stack: Django and DRF, React and TypeScript, and AI features.", "Structure et persévérance. J’aime les architectures en couches propres (NEXUS garde les règles de tenant à un seul endroit), je teste le comportement qui compte et je documente les décisions. Je suis à l’aise sur toute la stack : Django et DRF, React et TypeScript, et les fonctionnalités d’IA.", "التنظيم والمتابعة حتى النهاية. أحب الطبقات النظيفة (يحتفظ NEXUS بقواعد المستأجرين في مكان واحد)، وأختبر السلوك المهم وأوثّق القرارات. أرتاح في كامل المنظومة: Django وDRF وReact وTypeScript وميزات الذكاء الاصطناعي."], "follow": ["why", "best", "stack"], "act": ["dec"], "more": null}, {"id": "looking", "cat": "hire", "q": ["What are you looking for in an internship?", "Que cherches-tu dans un stage ?", "ماذا تبحث عنه في التدريب؟"], "k": ["looking for in", "want in", "what do you want", "expect", "cherche dans", "تبحث"], "a": ["A software engineering internship on a real product with a team: shipping features end to end, learning from code review, and working on backend, frontend or AI-powered features.", "Un stage en génie logiciel sur un vrai produit, en équipe : livrer des fonctionnalités de bout en bout, apprendre grâce aux revues de code, et travailler sur le backend, le frontend ou des fonctionnalités d’IA.", "تدريب في هندسة البرمجيات على منتج حقيقي ضمن فريق: تسليم ميزات من البداية إلى النهاية، والتعلم من مراجعة الشيفرة، والعمل على الخلفية أو الواجهة أو ميزات الذكاء الاصطناعي."], "follow": ["avail", "logi", "contact"], "act": ["email"], "more": null}, {"id": "team", "cat": "hire", "q": ["How do you work in a team?", "Comment travailles-tu en équipe ?", "كيف تعمل ضمن فريق؟"], "k": ["team", "teamwork", "collaborat", "equipe", "groupe", "فريق", "together"], "a": ["I chair the IEEE RAS student chapter and serve as Vice Chair and Treasurer of BLAST Club, so I am used to coordinating people and budgets. For clients I deliver sites and ad campaigns end to end. In code I keep layers and decisions explicit so teammates can follow them.", "Je préside le chapitre étudiant IEEE RAS et je suis vice-président et trésorier du BLAST Club, donc j’ai l’habitude de coordonner des personnes et des budgets. Pour des clients, je livre des sites et des campagnes publicitaires de bout en bout. Dans le code, je garde les couches et les décisions explicites pour que l’équipe puisse suivre.", "أترأس الفرع الطلابي IEEE RAS وأشغل منصب نائب الرئيس وأمين الصندوق في BLAST Club، لذا اعتدت تنسيق الأشخاص والميزانيات. ولعملائي أسلّم مواقع وحملات إعلانية كاملة. وفي الشيفرة أُبقي الطبقات والقرارات واضحة ليتمكن الزملاء من متابعتها."], "follow": ["lead", "freelance", "why"], "act": [], "more": null}, {"id": "logi", "cat": "hire", "q": ["What about remote work, start date and pay?", "Télétravail, date de début et rémunération ?", "ماذا عن العمل عن بعد وتاريخ البدء والمقابل؟"], "k": ["remote", "start date", "when can you start", "salary", "pay", "paid", "relocat", "teletravail", "remuneration", "salaire", "date de debut", "راتب", "عن بعد", "بداية"], "a": ["Those details are best settled directly. I am based in Tunis and happy to discuss the format, dates and conditions of an internship by email: makremamri08@gmail.com.", "Ces détails se règlent mieux directement. Je suis à Tunis et je discute volontiers du format, des dates et des conditions d’un stage par email : makremamri08@gmail.com.", "هذه التفاصيل الأفضل أن نتفق عليها مباشرة. أقيم في تونس العاصمة ويسعدني مناقشة شكل التدريب وتواريخه وشروطه عبر البريد: makremamri08@gmail.com."], "follow": ["avail", "contact"], "act": ["email"], "more": null}, {"id": "nexus", "cat": "proj", "q": ["Tell me about NEXUS", "Parle-moi de NEXUS", "حدّثني عن NEXUS"], "k": ["nexus", "saas", "tenant", "tenants", "multi-tenant", "isolation", "locataire", "مستأجر", "المستأجرين"], "a": ["NEXUS is a multi-tenant SaaS for customers, orders and invoices. No organization can see another’s data: cross-tenant requests return 404, not 403. It has 480 tests, CI and a Docker Compose setup.", "NEXUS est un SaaS multi-tenant pour les clients, commandes et factures. Aucune organisation ne voit les données d’une autre : un accès entre tenants renvoie 404, pas 403. Il compte 480 tests, la CI et un setup Docker Compose.", "NEXUS نظام SaaS متعدد المستأجرين للعملاء والطلبات والفواتير. لا تستطيع أي مؤسسة رؤية بيانات غيرها: الطلبات بين المستأجرين تعيد 404 وليس 403. فيه 480 اختبارًا وتكامل مستمر وإعداد Docker Compose."], "follow": ["hard", "why404", "improve"], "act": ["nexus", "dec", "github"], "more": ["Under the hood: seven Django apps in one modular monolith, a strict layering of models, selectors, services, permissions, serializers and views, JWT with 15-minute access tokens, owner/admin/member roles, and a React 19 + TypeScript frontend. Six architecture decision records explain each choice.", "Sous le capot : sept apps Django dans un monolithe modulaire, une architecture stricte en couches (models, selectors, services, permissions, serializers, views), JWT avec jetons d’accès de 15 minutes, rôles propriétaire/admin/membre, et un frontend React 19 + TypeScript. Six dossiers de décision d’architecture expliquent chaque choix.", "تحت الغطاء: سبعة تطبيقات Django في تطبيق متكامل معياري، وطبقات صارمة (models وselectors وservices وpermissions وserializers وviews)، وJWT برموز وصول مدتها 15 دقيقة، وأدوار مالك/مشرف/عضو، وواجهة React 19 وTypeScript. وتشرح ستة سجلات قرار كل اختيار."]}, {"id": "best", "cat": "proj", "q": ["What is your most impressive project?", "Quel est ton projet le plus impressionnant ?", "ما أكثر مشاريعك إثارة للإعجاب؟"], "k": ["impressive", "best project", "proud", "favorite project", "favourite", "meilleur projet", "fier", "أفضل مشروع"], "a": ["NEXUS. It is the one with the most engineering: tenant isolation, roles, 480 tests, CI and a Docker Compose setup. I am also building TunisIA, an AI study assistant for Tunisian students.", "NEXUS. C’est celui qui a le plus d’ingénierie : isolation des tenants, rôles, 480 tests, CI et Docker Compose. Je construis aussi TunisIA, un assistant d’étude IA pour les étudiants tunisiens.", "NEXUS. هو الأكثر هندسةً: عزل المستأجرين والأدوار و480 اختبارًا وتكامل مستمر وDocker Compose. وأبني أيضًا TunisIA، مساعد دراسة بالذكاء الاصطناعي للطلبة التونسيين."], "follow": ["nexus", "private", "hard"], "act": ["nexus"], "more": null}, {"id": "hard", "cat": "proj", "q": ["What was the hardest part of NEXUS?", "Quelle a été la partie la plus difficile de NEXUS ?", "ما أصعب جزء في NEXUS؟"], "k": ["hardest", "challenge", "difficult", "challenging", "hard part", "difficulte", "difficile", "defi", "تحدي", "صعب"], "a": ["Making tenant isolation impossible to forget. It has to hold on every endpoint, so it lives in one place (the selectors) and is tested as an explicit property, with cross-tenant requests answering 404 instead of 403.", "Rendre l’isolation des tenants impossible à oublier. Elle doit tenir sur chaque endpoint, donc elle vit à un seul endroit (les sélecteurs) et elle est testée comme propriété explicite, avec des requêtes entre tenants qui répondent 404 au lieu de 403.", "جعل عزل المستأجرين شيئًا لا يمكن نسيانه. يجب أن يصمد على كل نقطة وصول، لذلك يعيش في مكان واحد (المُحدِّدات) ويُختبر كخاصية صريحة، وتجيب الطلبات بين المستأجرين بـ 404 بدل 403."], "follow": ["why404", "code", "improve"], "act": ["code"], "more": null}, {"id": "why404", "cat": "proj", "q": ["Why 404 instead of 403?", "Pourquoi 404 plutôt que 403 ?", "لماذا 404 بدل 403؟"], "k": ["404", "403", "forbidden", "not found", "pourquoi 404", "لماذا 404"], "a": ["A 403 tells an outsider that the record exists but is off limits. A 404 reveals nothing, so one organization cannot even confirm that another organization’s invoice number is real. Try the interactive demo near the top of the page.", "Un 403 indique à un tiers que l’enregistrement existe mais qu’il est interdit. Un 404 ne révèle rien, donc une organisation ne peut même pas confirmer qu’un numéro de facture d’une autre organisation existe. Essayez la démo interactive en haut de la page.", "يخبر 403 الغريب بأن السجل موجود لكنه محظور. أما 404 فلا يكشف شيئًا، فلا تستطيع مؤسسة حتى التأكد من أن رقم فاتورة مؤسسة أخرى حقيقي. جرّب العرض التفاعلي قرب أعلى الصفحة."], "follow": ["hard", "nexus", "code"], "act": ["flow"], "more": null}, {"id": "improve", "cat": "proj", "q": ["What would you improve in NEXUS?", "Qu’améliorerais-tu dans NEXUS ?", "ماذا ستحسّن في NEXUS؟"], "k": ["improve", "improvement", "roadmap", "limitation", "limitations", "ameliorer", "prochaine", "تحسين", "القيود"], "a": ["Cursor pagination, generated OpenAPI docs, throttling on the auth endpoints, refresh-token rotation and a scheduled overdue sweep. I list these limits on the page on purpose.", "Pagination par curseur, docs OpenAPI générées, limitation du débit sur les endpoints d’authentification, rotation des jetons de rafraîchissement et un balayage planifié des retards. Je liste ces limites sur la page volontairement.", "ترقيم الصفحات بالمؤشر، وتوثيق OpenAPI مولَّد، وتحديد معدل نقاط المصادقة، وتدوير رموز التجديد، وفحص مجدول للمتأخرات. أذكر هذه الحدود في الصفحة عن قصد."], "follow": ["nexus", "hard", "tests"], "act": ["dec"], "more": null}, {"id": "ai", "cat": "proj", "q": ["Do you have AI projects?", "As-tu des projets d’IA ?", "هل لديك مشاريع ذكاء اصطناعي؟"], "k": ["ai", "ia", "claude", "tensorflow", "machine", "intelligence", "ذكاء"], "a": ["I use AI where it earns its place: NutriScan recognizes food from a photo with a TensorFlow model, the AI Background Remover uses rembg, and TunisIA uses the Claude API. I also took 3rd place at the ODC AI hackathon.", "J’utilise l’IA là où elle apporte quelque chose : NutriScan reconnaît les aliments sur photo avec un modèle TensorFlow, l’AI Background Remover utilise rembg, et TunisIA utilise l’API Claude. J’ai aussi obtenu la 3e place au hackathon IA de l’ODC.", "أستخدم الذكاء الاصطناعي حيث يفيد: NutriScan يتعرف على الطعام من صورة بنموذج TensorFlow، وAI Background Remover يستخدم rembg، وTunisIA يستخدم واجهة Claude. وحصلت على المركز الثالث في هاكاثون الذكاء الاصطناعي لدى ODC."], "follow": ["nutri", "bg", "lead"], "act": ["cs:nutri", "cs:bg"], "more": null}, {"id": "nutri", "cat": "proj", "q": ["How does NutriScan work?", "Comment fonctionne NutriScan ?", "كيف يعمل NutriScan؟"], "k": ["nutriscan", "nutri", "calorie", "calories", "food", "meal", "repas"], "a": ["NutriScan logs the nutrition of a meal from a photo: a Celery worker runs a TensorFlow classifier, then REST and GraphQL return the user’s meals. It is a prototype.", "NutriScan enregistre la nutrition d’un repas à partir d’une photo : un worker Celery lance un classifieur TensorFlow, puis REST et GraphQL renvoient les repas de l’utilisateur. C’est un prototype.", "NutriScan يسجّل تغذية الوجبة من صورة: يشغّل عامل Celery مصنِّف TensorFlow، ثم يعيد REST وGraphQL وجبات المستخدم. إنه نموذج أولي."], "follow": ["bg", "food", "ai"], "act": ["cs:nutri", "github"], "more": null}, {"id": "bg", "cat": "proj", "q": ["What does the AI Background Remover do?", "Que fait l’AI Background Remover ?", "ماذا يفعل AI Background Remover؟"], "k": ["background", "remover", "rembg", "flutter", "arriere", "خلفية"], "a": ["It cuts the background out of a photo (Django, Celery, rembg) and shares the result in a feed inside a Flutter app.", "Il détoure une photo (Django, Celery, rembg) et partage le résultat dans un fil dans une application Flutter.", "يزيل خلفية الصورة (Django وCelery وrembg) ويشارك النتيجة في موجز داخل تطبيق Flutter."], "follow": ["nutri", "food", "django"], "act": ["cs:bg"], "more": null}, {"id": "food", "cat": "proj", "q": ["Which design patterns did you use?", "Quels patrons de conception as-tu utilisés ?", "ما أنماط التصميم التي استخدمتها؟"], "k": ["delivery", "pattern", "patterns", "design pattern", "java", "livraison", "patron", "أنماط"], "a": ["Seven in one Java order flow: Composite, Decorator, Strategy, Factory, Adapter, State and Observer, each with one real job in a food delivery system.", "Sept dans un seul flux de commande Java : Composite, Decorator, Strategy, Factory, Adapter, State et Observer, chacun avec un vrai rôle dans un système de livraison de repas.", "سبعة في تدفق طلب Java واحد: Composite وDecorator وStrategy وFactory وAdapter وState وObserver، لكل منها مهمة حقيقية في نظام توصيل طعام."], "follow": ["nutri", "bg", "strengths"], "act": ["cs:food"], "more": null}, {"id": "private", "cat": "proj", "q": ["What about TunisIA?", "Et TunisIA ?", "وماذا عن TunisIA؟"], "k": ["tunisia", "tunisie", "private", "prive", "confidential", "خاص"], "a": ["TunisIA is an AI study assistant for Tunisian students, built with Django, React, TypeScript and the Claude API. It has streaming chat, JWT auth and runs in English, French and Arabic (RTL). It is still in development.", "TunisIA est un assistant d’étude IA pour les étudiants tunisiens. Il est construit avec Django, React, TypeScript et l’API Claude, avec chat en streaming, auth JWT, en anglais, français et arabe (RTL). Il est encore en développement.", "TunisIA مساعد دراسة بالذكاء الاصطناعي للطلبة التونسيين. مبني بـ Django وReact وTypeScript وواجهة Claude، مع دردشة متدفقة ومصادقة JWT، بالإنجليزية والفرنسية والعربية (RTL). لا يزال قيد التطوير."], "follow": ["avail", "ai", "contact"], "act": ["email"], "more": null}, {"id": "stack", "cat": "tech", "q": ["What is your tech stack?", "Quelle est ta stack technique ?", "ما هي تقنياتك؟"], "k": ["stack", "skills", "skill", "tech", "technologies", "tools", "competence", "competences", "مهارات", "تقنيات"], "a": ["Python, TypeScript, JavaScript, Java, C/C++ and SQL. Django, DRF, React, Next.js, Tailwind, REST and GraphQL. Git, GitHub Actions, PostgreSQL, Docker, Linux and the Claude API.", "Python, TypeScript, JavaScript, Java, C/C++ et SQL. Django, DRF, React, Next.js, Tailwind, REST et GraphQL. Git, GitHub Actions, PostgreSQL, Docker, Linux et l’API Claude.", "Python وTypeScript وJavaScript وJava وC/C++ وSQL. Django وDRF وReact وNext.js وTailwind وREST وGraphQL. Git وGitHub Actions وPostgreSQL وDocker وLinux وواجهة Claude."], "follow": ["django", "frontend", "devops"], "act": [], "more": null}, {"id": "django", "cat": "tech", "q": ["What did you build with Django?", "Qu’as-tu construit avec Django ?", "ماذا بنيت بـ Django؟"], "k": ["django", "drf", "python", "backend", "celery"], "a": ["NEXUS, a multi-tenant SaaS (Django 5, DRF, PostgreSQL, 480 tests). NutriScan, which recognizes food from a photo (Django, Celery, TensorFlow, GraphQL). And the API of the AI Background Remover (Django, Celery, rembg).", "NEXUS, un SaaS multi-tenant (Django 5, DRF, PostgreSQL, 480 tests). NutriScan, qui reconnaît les aliments sur photo (Django, Celery, TensorFlow, GraphQL). Et l’API de l’AI Background Remover (Django, Celery, rembg).", "NEXUS، نظام SaaS متعدد المستأجرين (Django 5 وDRF وPostgreSQL و480 اختبارًا). وNutriScan الذي يتعرف على الطعام من صورة (Django وCelery وTensorFlow وGraphQL). وواجهة AI Background Remover (Django وCelery وrembg)."], "follow": ["nexus", "auth", "db"], "act": [], "more": null}, {"id": "frontend", "cat": "tech", "q": ["Do you know React and TypeScript?", "Connais-tu React et TypeScript ?", "هل تعرف React وTypeScript؟"], "k": ["react", "typescript", "frontend", "front-end", "next.js", "nextjs", "vite", "tailwind"], "a": ["Yes. The NEXUS frontend is React 19 with strict TypeScript and Vite, with 93 frontend tests. I also built a Next.js, TypeScript and Tailwind portfolio for a client, deployed on Vercel.", "Oui. Le frontend de NEXUS est en React 19 avec TypeScript strict et Vite, avec 93 tests frontend. J’ai aussi réalisé un portfolio Next.js, TypeScript et Tailwind pour un client, déployé sur Vercel.", "نعم. واجهة NEXUS الأمامية بـ React 19 وTypeScript الصارم وVite، مع 93 اختبارًا. وبنيت أيضًا معرض أعمال بـ Next.js وTypeScript وTailwind لعميل، منشورًا على Vercel."], "follow": ["django", "tests", "stack"], "act": ["cs:client"], "more": null}, {"id": "auth", "cat": "tech", "q": ["How do you handle authentication?", "Comment gères-tu l’authentification ?", "كيف تتعامل مع المصادقة؟"], "k": ["auth", "authentication", "login", "jwt", "token", "tokens", "security", "securite", "authentification", "أمان", "مصادقة"], "a": ["NEXUS uses email login with JWT: 15-minute access tokens held in memory, refresh tokens blacklisted on logout, and production settings that refuse to start without secrets. Roles (owner, admin, member) are enforced on the server.", "NEXUS utilise la connexion par email avec JWT : jetons d’accès de 15 minutes gardés en mémoire, jetons de rafraîchissement mis en liste noire à la déconnexion, et paramètres de production qui refusent de démarrer sans secrets. Les rôles (propriétaire, admin, membre) sont appliqués côté serveur.", "يستخدم NEXUS الدخول بالبريد الإلكتروني مع JWT: رموز وصول مدتها 15 دقيقة محفوظة في الذاكرة، ورموز تجديد تُحظر عند الخروج، وإعدادات إنتاج ترفض التشغيل بلا أسرار. وتُفرض الأدوار (مالك ومشرف وعضو) على الخادم."], "follow": ["why404", "devops", "nexus"], "act": ["dec"], "more": null}, {"id": "db", "cat": "tech", "q": ["What databases do you use?", "Quelles bases de données utilises-tu ?", "ما قواعد البيانات التي تستخدمها؟"], "k": ["database", "databases", "postgres", "postgresql", "sql", "sqlite", "redis", "base de donnees", "قاعدة بيانات", "قواعد"], "a": ["PostgreSQL 16 in NEXUS with row-level tenancy, SQLite in my prototypes, and Redis as the Celery broker in NutriScan and the Background Remover. I also write SQL directly.", "PostgreSQL 16 dans NEXUS avec une isolation au niveau des lignes, SQLite dans mes prototypes, et Redis comme broker Celery dans NutriScan et le Background Remover. J’écris aussi du SQL directement.", "PostgreSQL 16 في NEXUS مع عزل على مستوى الصفوف، وSQLite في نماذجي الأولية، وRedis كوسيط Celery في NutriScan وBackground Remover. وأكتب SQL مباشرة أيضًا."], "follow": ["django", "graphql", "nexus"], "act": [], "more": null}, {"id": "graphql", "cat": "tech", "q": ["Do you know GraphQL?", "Connais-tu GraphQL ?", "هل تعرف GraphQL؟"], "k": ["graphql", "graphene"], "a": ["Yes. NutriScan and the AI Background Remover expose GraphQL through graphene-django, with every query scoped to the signed-in user. NEXUS itself is a REST API built on DRF.", "Oui. NutriScan et l’AI Background Remover exposent GraphQL via graphene-django, avec chaque requête limitée à l’utilisateur connecté. NEXUS lui-même est une API REST construite sur DRF.", "نعم. يوفّر NutriScan وAI Background Remover واجهة GraphQL عبر graphene-django، وكل استعلام مقيَّد بالمستخدم المسجَّل. أما NEXUS نفسه فواجهة REST مبنية على DRF."], "follow": ["nutri", "bg", "db"], "act": [], "more": null}, {"id": "devops", "cat": "tech", "q": ["Do you know Docker and CI?", "Connais-tu Docker et la CI ?", "هل تعرف Docker والتكامل المستمر؟"], "k": ["docker", "ci", "github actions", "devops", "compose", "deploy", "deployment", "conteneur", "نشر"], "a": ["Yes. NEXUS ships with Docker Compose (PostgreSQL, Gunicorn, nginx), health probes, structured JSON logs with request IDs, a non-root container and GitHub Actions CI with an end-to-end smoke test.", "Oui. NEXUS est livré avec Docker Compose (PostgreSQL, Gunicorn, nginx), des sondes de santé, des logs JSON structurés avec identifiants de requête, un conteneur non-root et la CI GitHub Actions avec un test de fumée de bout en bout.", "نعم. يأتي NEXUS مع Docker Compose (PostgreSQL وGunicorn وnginx)، وفحوصات صحة، وسجلات JSON منظّمة بمعرّفات الطلبات، وحاوية بدون صلاحيات الجذر، وتكاملًا مستمرًا عبر GitHub Actions مع اختبار شامل سريع."], "follow": ["tests", "arch", "auth"], "act": ["arch"], "more": null}, {"id": "tests", "cat": "tech", "q": ["How do you test your code?", "Comment testes-tu ton code ?", "كيف تختبر شيفرتك؟"], "k": ["test", "tests", "testing", "quality", "qualite", "جودة", "اختبار"], "a": ["NEXUS has 480 tests (387 backend, 93 frontend). Tenant isolation and roles are tested as explicit properties, and GitHub Actions CI runs on every push.", "NEXUS compte 480 tests (387 backend, 93 frontend). L’isolation des tenants et les rôles sont testés comme des propriétés explicites, et la CI GitHub Actions s’exécute à chaque push.", "لدى NEXUS ‏480 اختبارًا (387 للخلفية و93 للواجهة). يُختبر عزل المستأجرين والأدوار كخصائص صريحة، ويعمل التكامل المستمر عبر GitHub Actions عند كل دفع."], "follow": ["devops", "hard", "nexus"], "act": ["github"], "more": null}, {"id": "about", "cat": "about", "q": ["Who are you?", "Qui es-tu ?", "من أنت؟"], "k": ["who", "introduce", "yourself", "qui", "presente", "نبذة"], "a": ["I am Makram, 22, a software engineering student at SESAME University in Tunis. I build full-stack products with Django, React and TypeScript, and I am looking for an internship.", "Je suis Makram, 22 ans, étudiant en génie logiciel à SESAME University, à Tunis. Je construis des produits full-stack avec Django, React et TypeScript, et je cherche un stage.", "أنا مكرم، 22 عامًا، طالب هندسة برمجيات في جامعة SESAME بتونس. أبني منتجات متكاملة بـ Django وReact وTypeScript، وأبحث عن تدريب."], "follow": ["education", "now", "nexus"], "act": [], "more": null}, {"id": "education", "cat": "about", "q": ["Where do you study?", "Où étudies-tu ?", "أين تدرس؟"], "k": ["education", "study", "studies", "sesame", "esat", "school", "university", "degree", "ccna", "etude", "etudes", "universite", "diplome", "جامعة", "دراسة", "تعليم"], "a": ["I am in the engineering degree in software engineering at SESAME University (2024 to now), after the ESAT preparatory cycle (2022 to 2024). I also hold the CCNA 1 certification from Cisco Networking Academy.", "Je suis en cycle ingénieur en génie logiciel à SESAME University (2024 à aujourd’hui), après le cycle préparatoire de l’ESAT (2022 à 2024). J’ai aussi la certification CCNA 1 de Cisco Networking Academy.", "أدرس في شهادة المهندس في هندسة البرمجيات بجامعة SESAME (من 2024 إلى اليوم)، بعد السنة التحضيرية في ESAT (2022 إلى 2024). وأحمل شهادة CCNA 1 من Cisco Networking Academy."], "follow": ["lead", "speak", "now"], "act": [], "more": null}, {"id": "lead", "cat": "about", "q": ["What do you lead?", "Que diriges-tu ?", "ماذا تقود؟"], "k": ["ieee", "blast", "hackathon", "odc", "chair", "leader", "leadership", "president", "club", "orange", "قيادة", "هاكاثون"], "a": ["I chair the IEEE RAS student chapter at SESAME and I am Vice Chair and Treasurer of BLAST Club. In 2025 I took 3rd place at a 16-hour AI hackathon hosted by Orange Digital Center.", "Je préside le chapitre étudiant IEEE RAS à SESAME et je suis vice-président et trésorier du BLAST Club. En 2025, j’ai obtenu la 3e place à un hackathon IA de 16 heures organisé par Orange Digital Center.", "أترأس الفرع الطلابي IEEE RAS في SESAME وأنا نائب الرئيس وأمين الصندوق في BLAST Club. وفي 2025 حصلت على المركز الثالث في هاكاثون ذكاء اصطناعي مدته 16 ساعة نظّمه Orange Digital Center."], "follow": ["team", "freelance", "education"], "act": [], "more": null}, {"id": "freelance", "cat": "about", "q": ["What is your freelance experience?", "Quelle est ton expérience en freelance ?", "ما خبرتك في العمل الحر؟"], "k": ["meta", "ads", "freelance", "campaign", "campaigns", "marketing", "publicite", "إعلانات", "حملات"], "a": ["As a freelancer I run Meta Ads for Tunisian brands: 9+ campaigns, 500K+ impressions, 5K+ new followers, as low as $0.01 per profile visit. I also build websites, like a Next.js portfolio for an electrical engineer.", "En freelance, je gère des Meta Ads pour des marques tunisiennes : 9+ campagnes, 500K+ impressions, 5K+ nouveaux abonnés, dès 0,01 $ par visite de profil. Je crée aussi des sites web, comme un portfolio Next.js pour un ingénieur électricien.", "كعمل حر أدير إعلانات Meta لعلامات تونسية: أكثر من 9 حملات، وأكثر من 500 ألف ظهور، و5 آلاف متابع جديد، بتكلفة تصل إلى 0.01 دولار لكل زيارة للملف. وأبني مواقع أيضًا، مثل معرض أعمال بـ Next.js لمهندس كهرباء."], "follow": ["team", "frontend", "lead"], "act": ["cs:client"], "more": null}, {"id": "speak", "cat": "about", "q": ["Which languages do you speak?", "Quelles langues parles-tu ?", "ما اللغات التي تتحدثها؟"], "k": ["speak", "arabic", "french", "english", "parle", "parlez", "parles", "تتحدث"], "a": ["Arabic is my native language. My French and English are both B2.", "L’arabe est ma langue maternelle. Mon français et mon anglais sont tous deux au niveau B2.", "العربية لغتي الأم. مستواي في الفرنسية والإنجليزية B2."], "follow": ["where", "education", "avail"], "act": [], "more": null}, {"id": "where", "cat": "about", "q": ["Where are you based?", "Où es-tu basé ?", "أين تقيم؟"], "k": ["where", "based", "location", "live", "tunis", "habite", "ville", "أين", "موقع", "تونس"], "a": ["I am based in Tunis, Tunisia.", "Je suis à Tunis, en Tunisie.", "أقيم في تونس العاصمة، تونس."], "follow": ["logi", "speak", "avail"], "act": [], "more": null}, {"id": "now", "cat": "about", "q": ["What are you working on now?", "Sur quoi travailles-tu en ce moment ?", "على ماذا تعمل الآن؟"], "k": ["now", "currently", "right now", "working on", "en ce moment", "actuellement", "حاليا", "الآن"], "a": ["I am building TunisIA with Django, React, TypeScript and the Claude API, finishing my engineering degree at SESAME, and looking for a software engineering internship.", "Je construis TunisIA avec Django, React, TypeScript et l’API Claude, je poursuis mon cycle ingénieur à SESAME, et je cherche un stage en génie logiciel.", "أبني TunisIA بـ Django وReact وTypeScript وواجهة Claude، وأواصل دراستي الهندسية في SESAME، وأبحث عن تدريب في هندسة البرمجيات."], "follow": ["avail", "private", "nexus"], "act": [], "more": null}, {"id": "contact", "cat": "about", "q": ["How can I contact you?", "Comment te contacter ?", "كيف أتواصل معك؟"], "k": ["contact", "email", "mail", "reach", "linkedin", "github", "cv", "resume", "contacter", "joindre", "تواصل", "بريد", "سيرة"], "a": ["Email: makremamri08@gmail.com\nGitHub: github.com/Ing-Makram\nLinkedIn: linkedin.com/in/amri-makrem", "Email : makremamri08@gmail.com\nGitHub : github.com/Ing-Makram\nLinkedIn : linkedin.com/in/amri-makrem", "البريد: makremamri08@gmail.com\nGitHub: github.com/Ing-Makram\nLinkedIn: linkedin.com/in/amri-makrem"], "follow": ["avail", "why", "logi"], "act": ["email", "linkedin"], "more": null}, {"id": "hello", "cat": null, "q": null, "k": ["hello", "hi", "hey", "bonjour", "salut", "مرحبا", "سلام", "اهلا"], "a": ["Hello! Ask me about Makram’s projects, stack, education or availability.", "Bonjour ! Posez-moi des questions sur les projets, la stack, la formation ou la disponibilité de Makram.", "مرحبًا! اسألني عن مشاريع مكرم وتقنياته ودراسته وتوفره."], "follow": ["avail", "nexus", "stack"], "act": [], "more": null}, {"id": "thanks", "cat": null, "q": null, "k": ["thanks", "thank", "thx", "merci", "شكرا"], "a": ["You are welcome. Ask anything else, or email makremamri08@gmail.com.", "Avec plaisir. Posez une autre question, ou écrivez à makremamri08@gmail.com.", "على الرحب والسعة. اسأل ما شئت، أو راسل makremamri08@gmail.com."], "follow": ["avail", "contact"], "act": ["email"], "more": null}, {"id": "bye", "cat": null, "q": null, "k": ["bye", "goodbye", "au revoir", "مع السلامة"], "a": ["Thanks for stopping by. If you liked what you saw, email makremamri08@gmail.com.", "Merci de votre passage. Si vous avez aimé, écrivez à makremamri08@gmail.com.", "شكرًا على الزيارة. إن أعجبك ما رأيت فراسل makremamri08@gmail.com."], "follow": [], "act": [], "more": null}, {"id": "bot", "cat": null, "q": null, "k": ["are you ai", "are you a bot", "chatgpt", "real person", "robot", "bot", "es-tu un bot", "روبوت"], "a": ["I am a small scripted assistant that answers from this page, not a live AI model. For anything else, email makremamri08@gmail.com.", "Je suis un petit assistant scripté qui répond à partir de cette page, pas un modèle d’IA en direct. Pour tout le reste, écrivez à makremamri08@gmail.com.", "أنا مساعد صغير مبرمج مسبقًا يجيب من هذه الصفحة، ولست نموذج ذكاء اصطناعي حيًّا. لأي شيء آخر راسل makremamri08@gmail.com."], "follow": ["avail", "contact"], "act": ["email"], "more": null}];
const ACT = {"email": ["Copy email", "Copier l’email", "نسخ البريد"], "nexus": ["See NEXUS", "Voir NEXUS", "اكتشف NEXUS"], "dec": ["Design decisions", "Décisions de conception", "قرارات التصميم"], "github": ["GitHub", "GitHub", "GitHub"], "linkedin": ["LinkedIn", "LinkedIn", "LinkedIn"], "flow": ["Try the demo", "Essayer la démo", "جرّب العرض"], "arch": ["Architecture", "Architecture", "البنية"], "code": ["See the code", "Voir le code", "الشيفرة"], "cs:nutri": ["NutriScan case study", "Étude de cas NutriScan", "دراسة حالة NutriScan"], "cs:bg": ["Background Remover case study", "Étude de cas Background Remover", "دراسة حالة Background Remover"], "cs:food": ["Food Delivery case study", "Étude de cas Food Delivery", "دراسة حالة Food Delivery"], "cs:client": ["Client site case study", "Étude de cas site client", "دراسة حالة موقع العميل"]};
const CATS = [{"id": "hire", "l": ["Hiring", "Recrutement", "التوظيف"]}, {"id": "proj", "l": ["Projects", "Projets", "المشاريع"]}, {"id": "tech", "l": ["Tech", "Technique", "التقنية"]}, {"id": "about", "l": ["About", "À propos", "نبذة"]}];
const EXTRA_K = {"strengths": ["قوت", "قوة"], "best": ["impressionnant", "meilleur projet", "plus beau projet", "أكثر مشاريعك", "إعجاب", "أفضل مشروع"], "tests": ["تختبر", "اختبار", "testes"], "about": ["من أنت", "qui es", "qui etes"], "education": ["أين تدرس", "تدرس", "دراس", "etudies", "étudies"], "lead": ["lead", "diriges", "dirige", "diriger", "تقود"], "freelance": ["العمل الحر", "خبرتك", "حر"], "where": ["base", "ou es-tu", "basé"], "db": ["bases de donnees", "قواعد بيانات"], "improve": ["حسن", "ameliorerais", "améliorerais"], "speak": ["langues", "langue", "لغات"], "looking": ["تبحث", "cherches"], "why": ["لماذا يجب", "pourquoi te"], "hard": ["صعب", "difficile", "plus difficile"]};
const REMOVE_K = {"speak": ["parle", "parlez", "parles"]};
const BROAD = ["nexus", "django", "frontend", "ai", "private", "about", "education", "speak", "nutri", "bg", "food", "avail", "hello"];
KB.forEach((e) => { if (REMOVE_K[e.id]) e.k = e.k.filter((x) => REMOVE_K[e.id].indexOf(x) < 0); if (EXTRA_K[e.id]) e.k = e.k.concat(EXTRA_K[e.id]); });
const ASK_GREET = ["Hi, I am a small scripted assistant that answers from this page. Pick a topic below or type a question. Say “more” after an answer to go deeper.", "Bonjour, je suis un petit assistant scripté qui répond à partir de cette page. Choisissez un thème ci-dessous ou écrivez une question. Dites « plus » après une réponse pour aller plus loin.", "مرحبًا، أنا مساعد صغير مبرمج مسبقًا يجيب من هذه الصفحة. اختر موضوعًا بالأسفل أو اكتب سؤالك. اكتب «المزيد» بعد أي إجابة للتعمق."];
const ASK_FALLBACK = ["I do not have an answer for that on this page. Here are the closest topics, or email makremamri08@gmail.com.", "Je n’ai pas de réponse à cela sur cette page. Voici les sujets les plus proches, ou écrivez à makremamri08@gmail.com.", "ليس لدي جواب عن هذا في الصفحة. إليك أقرب المواضيع، أو راسل makremamri08@gmail.com."];
Object.assign(X, {"csBtn": {"en": "Read the case study", "fr": "Lire l’étude de cas", "ar": "اقرأ دراسة الحالة"}, "csIdea": {"en": "THE IDEA", "fr": "L’IDÉE", "ar": "الفكرة"}, "csHow": {"en": "HOW IT WORKS", "fr": "COMMENT ÇA MARCHE", "ar": "كيف يعمل"}, "csStatus": {"en": "HONEST STATUS", "fr": "ÉTAT RÉEL", "ar": "الوضع الفعلي"}, "csStack": {"en": "STACK", "fr": "STACK", "ar": "التقنيات"}, "askBtn": {"en": "Ask about Makram", "fr": "Poser une question", "ar": "اسأل عن مكرم"}, "askSub": {"en": "Answers from what is on this page", "fr": "Réponses tirées de cette page", "ar": "إجابات من محتوى هذه الصفحة"}, "askPh": {"en": "Type a question", "fr": "Écris ta question", "ar": "اكتب سؤالك"}, "askSend": {"en": "Send", "fr": "Envoyer", "ar": "إرسال"}});
Object.assign(X, {"askClear": {"en": "Clear", "fr": "Effacer", "ar": "مسح"}, "askSurprise": {"en": "Surprise me", "fr": "Surprends-moi", "ar": "فاجئني"}, "askDym": {"en": "Closest topics", "fr": "Sujets proches", "ar": "أقرب المواضيع"}});
class Component extends DCLogic {
  constructor(props) {
    super(props);
    this.state = {
      lang: 'en', light: false, prompt: 1, tick: 0, intro: true,
      pal: false, dec: false, term: false, q: '', sel: 0, copied: null, tin: '',
      cs: null, ask: false, chat: [], typing: false, aq: '', cat: 'hire', last: null,
      lines: [{ k: 'out', t: 'Welcome. Type help to see what I can do.' }]
    };
  }
  L(a, b, c) { return { en: a, fr: b, ar: c }[this.state.lang]; }
  focusLater(id) {
    setTimeout(() => { const el = document.getElementById(id); if (el) el.focus(); }, 80);
  }
  goTo(id) {
    this.setState({ pal: false, dec: false, term: false });
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 150);
  }
  openUrl(url) {
    try { window.open(url, '_blank', 'noopener'); } catch (e) {}
  }
  track(name, props) {
    // Analytics hook: sends an event to Plausible or Umami if either script is on the page, and does nothing otherwise.
    try {
      if (window.plausible) window.plausible(name, { props: props || {} });
      else if (window.umami && window.umami.track) window.umami.track(name, props || {});
    } catch (e) {}
  }
  idx() { return { en: 0, fr: 1, ar: 2 }[this.state.lang]; }
  norm(x) { return x.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f\u064b-\u0652\u0640]/g, ''); }
  componentWillUnmount() { clearTimeout(this._t); clearInterval(this._iv); }
  lev(a, b) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > 1) return 2;
    const m = a.length, n = b.length;
    let prev = []; for (let j = 0; j <= n; j++) prev[j] = j;
    for (let i = 1; i <= m; i++) {
      const cur = [i];
      for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      prev = cur;
    }
    return prev[n];
  }
  tokens(x) { return this.norm(x).split(/[^a-z0-9؀-ۿ+#.]+/).filter(Boolean); }
  byId(id) { return KB.filter((e) => e.id === id)[0]; }
  rank(text) {
    const t = this.norm(text), toks = this.tokens(text);
    const out = [];
    KB.forEach((e) => {
      let sc = 0;
      e.k.forEach((k0) => {
        const k = this.norm(k0);
        if (/[\u0600-\u06ff]/.test(k)) { if (t.indexOf(k) >= 0) sc += 1; }
        else if (k.indexOf(' ') >= 0) { if (t.indexOf(k) >= 0) sc += 2; }
        else if (k.length < 5) { if (toks.indexOf(k) >= 0) sc += 1; }
        else if (t.indexOf(k) >= 0) sc += 1;
        else if (k.length >= 6 && toks.some((w) => w.length >= 6 && this.lev(w, k) <= 1)) sc += 0.5;
      });
      if (BROAD.indexOf(e.id) >= 0) sc *= 0.7;
      if (sc > 0) out.push({ e, sc });
    });
    out.sort((a, b) => b.sc - a.sc);
    return out;
  }
  matchKb(text) {
    const clean = (x) => this.norm(x).replace(/[^a-z0-9\u0600-\u06ff ]+/g, ' ').replace(/\s+/g, ' ').trim();
    const t = clean(text);
    const exact = KB.filter((e) => e.q && e.q.some((q) => clean(q) === t))[0];
    if (exact) return exact;
    const r = this.rank(text);
    return r.length ? r[0].e : null;
  }
  nearest(text) {
    const i = this.idx();
    const toks = this.tokens(text).filter((w) => w.length >= 3);
    if (!toks.length) return [];
    const out = [];
    KB.filter((e) => e.q).forEach((e) => {
      const qn = this.norm(e.q[i]);
      let sc = 0;
      toks.forEach((w) => { if (qn.indexOf(w) >= 0) sc++; if (e.k.some((k) => this.norm(k).indexOf(w) === 0)) sc++; });
      if (sc > 0) out.push({ e, sc });
    });
    out.sort((a, b) => b.sc - a.sc);
    return out.slice(0, 4).map((o) => o.e);
  }
  followIds(e) {
    if (!e) return ['avail', 'nexus', 'stack'];
    if (e.follow && e.follow.length) return e.follow;
    return KB.filter((x) => x.q && x.cat === e.cat && x.id !== e.id).slice(0, 3).map((x) => x.id);
  }
  runAction(a) {
    if (a.indexOf('cs:') === 0) { this.track('Case study', { project: a.slice(3) }); this.setState({ cs: a.slice(3), ask: false }); return; }
    const go = (id) => { this.setState({ ask: false }); setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 150); };
    if (a === 'email') { this.track('Copy email'); this.copyEmail(); }
    else if (a === 'nexus') go('nexus');
    else if (a === 'arch') go('arch');
    else if (a === 'code') go('code');
    else if (a === 'flow') go('flow-title');
    else if (a === 'dec') { this.track('Open design decisions'); this.setState({ dec: true, ask: false }); }
    else if (a === 'github') this.openUrl('https://github.com/Ing-Makram/Nexus');
    else if (a === 'linkedin') this.openUrl('https://www.linkedin.com/in/amri-makrem/');
  }
  scrollLog() {
    setTimeout(() => { const el = document.getElementById('ask-log'); if (el) el.scrollTop = el.scrollHeight; }, 40);
  }
  ask(q) {
    const low = this.norm(q);
    const wantsMore = /(^|\s)(more|tell me more|details|elaborate|plus|encore|en savoir plus)(\s|$)/.test(low) || low.indexOf('المزيد') >= 0 || low.indexOf('تفاصيل') >= 0;
    const last = this.state.last ? this.byId(this.state.last) : null;
    if (wantsMore && last) {
      const i = this.idx();
      if (last.more) { this.reply({ id: last.id, a: last.more, act: last.act, follow: last.follow, cat: last.cat }, q); return; }
      this.reply(last, q, true); return;
    }
    this.reply(this.matchKb(q), q);
  }
  reply(entry, questionText, repeat) {
    clearTimeout(this._t); clearInterval(this._iv);
    const i = this.idx();
    const base = this.state.chat.map((m) => ({ k: m.k, t: m.t, act: m.act, follow: null, id: m.id }));
    const chat = base.concat([{ k: 'me', t: questionText }]);
    this.setState({ chat, typing: true, aq: '' }, () => this.scrollLog());
    this.track('Assistant question', { topic: entry ? entry.id : 'none' });
    this._t = setTimeout(() => {
      let text, act = [], follow = [];
      if (!entry) {
        text = ASK_FALLBACK[i];
        const near = this.nearest(questionText).map((e) => e.id);
        follow = near.length ? near : ['avail', 'nexus', 'stack'];
      } else {
        text = repeat ? ({ en: 'That is all I have on this topic. Here is where to go next.', fr: 'C’est tout ce que j’ai sur ce sujet. Voici où aller ensuite.', ar: 'هذا كل ما لدي عن هذا الموضوع. إليك الخطوة التالية.' }[this.state.lang]) : entry.a[i];
        act = entry.act || [];
        follow = this.followIds(entry);
      }
      const upd = (t, done) => {
        const cur = this.state.chat.slice();
        cur[cur.length - 1] = { k: 'bot', t, id: entry ? entry.id : null, act: done ? act : [], follow: done ? follow : null };
        this.setState({ chat: cur, last: entry ? entry.id : this.state.last }, () => this.scrollLog());
      };
      this.setState({ typing: false, chat: chat.concat([{ k: 'bot', t: '', act: [], follow: null }]) });
      let n = 0;
      this._iv = setInterval(() => {
        n = Math.min(text.length, n + 3);
        if (n >= text.length) { clearInterval(this._iv); upd(text, true); } else { upd(text.slice(0, n), false); }
      }, 16);
    }, 460);
  }
  copyEmail() {
    const EMAIL = 'makremamri08@gmail.com';
    const ok = () => {
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: null }), 2200);
    };
    const fail = () => {
      this.setState({ copied: 'fail' });
      setTimeout(() => this.setState({ copied: null }), 3500);
    };
    try {
      navigator.clipboard.writeText(EMAIL).then(ok, fail);
    } catch (e) { fail(); }
  }
  palItems() {
    const S = this.state;
    const go = (id) => () => this.goTo(id);
    const A = [
      { label: this.L("NEXUS case study", "Étude de cas NEXUS", "دراسة حالة NEXUS"), hint: this.L("Section", "Section", "قسم"), run: go('nexus') },
      { label: this.L("Architecture animation", "Animation de l’architecture", "رسم متحرك للبنية"), hint: this.L("Section", "Section", "قسم"), run: go('arch') },
      { label: this.L("The code behind the 404", "Le code derrière le 404", "الشيفرة وراء الـ 404"), hint: this.L("Section", "Section", "قسم"), run: go('code') },
      { label: this.L("Design decisions (ADRs)", "Décisions de conception (ADR)", "قرارات التصميم (ADR)"), hint: this.L("Panel", "Panneau", "لوحة"), run: () => this.setState({ pal: false, dec: true }) },
      { label: this.L("More projects", "Autres projets", "مشاريع أخرى"), hint: this.L("Section", "Section", "قسم"), run: go('projects') },
      { label: this.L("About", "À propos", "نبذة"), hint: this.L("Section", "Section", "قسم"), run: go('about') },
      { label: this.L("Journey", "Parcours", "المسيرة"), hint: this.L("Section", "Section", "قسم"), run: go('journey') },
      { label: this.L("Toolbox", "Boîte à outils", "صندوق الأدوات"), hint: this.L("Section", "Section", "قسم"), run: go('toolbox') },
      { label: this.L("Beyond code", "Au-delà du code", "ما وراء الشيفرة"), hint: this.L("Section", "Section", "قسم"), run: go('experience') },
      { label: this.L("Contact", "Contact", "التواصل"), hint: this.L("Section", "Section", "قسم"), run: go('contact') },
      { label: this.L("Copy email address", "Copier l’adresse email", "نسخ البريد الإلكتروني"), hint: this.L("Action", "Action", "إجراء"), run: () => { this.setState({ pal: false }); this.copyEmail(); } },
      { label: this.L("Toggle dark and light", "Basculer sombre / clair", "تبديل الوضع الداكن والفاتح"), hint: this.L("Action", "Action", "إجراء"), run: () => this.setState({ pal: false, light: !this.state.light }) },
      { label: 'Language: English', hint: this.L("Action", "Action", "إجراء"), run: () => this.setState({ pal: false, lang: 'en' }) },
      { label: 'Langue : Français', hint: this.L("Action", "Action", "إجراء"), run: () => this.setState({ pal: false, lang: 'fr' }) },
      { label: 'اللغة: العربية', hint: this.L("Action", "Action", "إجراء"), run: () => this.setState({ pal: false, lang: 'ar' }) },
      { label: this.L("Open the terminal", "Ouvrir le terminal", "فتح الطرفية"), hint: this.L("Easter egg", "Easter egg", "مفاجأة"), run: () => { this.setState({ pal: false, term: true }); this.focusLater('term-input'); } },
      { label: this.L("GitHub profile", "Profil GitHub", "حساب GitHub"), hint: this.L("Link", "Lien", "رابط"), run: () => { this.setState({ pal: false }); this.openUrl('https://github.com/Ing-Makram'); } },
      { label: this.L("NEXUS repository", "Dépôt NEXUS", "مستودع NEXUS"), hint: this.L("Link", "Lien", "رابط"), run: () => { this.setState({ pal: false }); this.openUrl('https://github.com/Ing-Makram/Nexus'); } },
      { label: 'LinkedIn', hint: this.L("Link", "Lien", "رابط"), run: () => { this.setState({ pal: false }); this.openUrl('https://www.linkedin.com/in/amri-makrem/'); } }
    ];
    const q = (S.q || '').trim().toLowerCase();
    return q ? A.filter((a) => (a.label + ' ' + a.hint).toLowerCase().includes(q)) : A;
  }
  runCommand(raw) {
    const cmd = raw.trim();
    const low = cmd.toLowerCase();
    let lines = this.state.lines.concat([{ k: 'in', t: '> ' + cmd }]);
    const out = (t) => { lines = lines.concat([{ k: 'out', t }]); };
    if (!low) {
      lines = this.state.lines;
    } else if (low === 'help') {
      out(this.L('about  skills  projects  nexus  contact  theme  clear  exit', 'about  skills  projects  nexus  contact  theme  clear  exit  (commandes en anglais)', 'about  skills  projects  nexus  contact  theme  clear  exit  (الأوامر بالإنجليزية)'));
    } else if (low === 'about') {
      out(this.L('Makram Amri, 22. Software engineering student at SESAME, Tunis. Open to an internship.', 'Makram Amri, 22 ans. Étudiant en génie logiciel à SESAME, Tunis. Ouvert à un stage.', 'مكرم عمري، 22 عامًا. طالب هندسة برمجيات في SESAME بتونس. متاح للتدريب.'));
    } else if (low === 'skills') {
      out('Python, TypeScript, JavaScript, Java, C/C++, SQL\nDjango, DRF, React, Next.js, Tailwind, REST, GraphQL\nGit, GitHub Actions, PostgreSQL, Docker, Linux, Claude API');
    } else if (low === 'projects') {
      out('NEXUS (public) · TunisIA · NutriScan · AI Background Remover · Food Delivery System · client portfolio site');
    } else if (low === 'nexus') {
      out(this.L('Multi-tenant SaaS. 480 tests. Cross-tenant access returns 404, not 403.', 'SaaS multi-tenant. 480 tests. Un accès entre tenants renvoie 404, pas 403.', 'نظام SaaS متعدد المستأجرين. 480 اختبارًا. الوصول بين المستأجرين يعيد 404 وليس 403.') + '\nhttps://github.com/Ing-Makram/Nexus');
    } else if (low === 'contact') {
      out('makremamri08@gmail.com\ngithub.com/Ing-Makram\nlinkedin.com/in/amri-makrem');
    } else if (low === 'theme') {
      out(this.L('Toggled the theme.', 'Thème basculé.', 'تم تبديل الوضع.'));
      this.setState({ light: !this.state.light });
    } else if (low === 'sudo hire makram') {
      out(this.L('Permission granted. Send the offer to makremamri08@gmail.com', 'Permission accordée. Envoyez l’offre à makremamri08@gmail.com', 'تم منح الإذن. أرسل العرض إلى makremamri08@gmail.com'));
    } else if (low === 'clear') {
      lines = [];
    } else if (low === 'exit') {
      this.setState({ term: false, tin: '' });
      return;
    } else {
      out(this.L('command not found: ', 'commande introuvable : ', 'الأمر غير موجود: ') + cmd + this.L('. Try help.', '. Essayez help.', '. جرّب help.'));
    }
    this.setState({ lines, tin: '' }, () => {
      const el = document.getElementById('term-out');
      if (el) el.scrollTop = el.scrollHeight;
    });
  }
  renderVals() {
    const S = this.state;
    const T = {
      en: {
        code: 'en', dir: 'ltr',
        nav1: 'Work', nav2: 'Experience', nav3: 'Contact',
        kicker: 'SOFTWARE ENGINEERING STUDENT · TUNIS',
        headline: 'I build products that solve real problems.',
        sub: 'Django, React, TypeScript and AI. Chair of the IEEE RAS student chapter at SESAME, 3rd place at the ODC AI hackathon.',
        cta1: 'See NEXUS', cta2: 'Get in touch',
        flowTitle: 'Watch a request meet the rules inside NEXUS',
        caseLabel: 'CASE STUDY 01',
        caseTitle: 'NEXUS, a multi-tenant SaaS where no organization can see another’s data',
        problem: 'Businesses want one place for customers, orders and invoices, and each company’s data must stay strictly separate. NEXUS enforces that isolation in the query layer, so it cannot be forgotten inside a view.',
        contact: 'Let us build something useful.',
        now: 'Currently building', r1: 'multi-tenant SaaS', r2: 'AI-powered apps', r3: 'clean APIs', r4: 'full-stack products'
      },
      fr: {
        code: 'fr', dir: 'ltr',
        nav1: 'Projets', nav2: 'Expérience', nav3: 'Contact',
        kicker: 'ÉTUDIANT EN GÉNIE LOGICIEL · TUNIS',
        headline: 'Je construis des produits qui résolvent de vrais problèmes.',
        sub: 'Django, React, TypeScript et IA. Président du chapitre étudiant IEEE RAS à SESAME, 3e place au hackathon IA de l’ODC.',
        cta1: 'Voir NEXUS', cta2: 'Me contacter',
        flowTitle: 'Suivez une requête face aux règles de NEXUS',
        caseLabel: 'ÉTUDE DE CAS 01',
        caseTitle: 'NEXUS, un SaaS multi-tenant où aucune organisation ne voit les données d’une autre',
        problem: 'Les entreprises veulent un seul endroit pour leurs clients, commandes et factures, et les données de chaque société doivent rester strictement séparées. NEXUS impose cette isolation dans la couche de requêtes, donc elle ne peut pas être oubliée dans une vue.',
        contact: 'Construisons quelque chose d’utile.',
        now: 'En construction :', r1: 'un SaaS multi-tenant', r2: 'des applications dopées à l’IA', r3: 'des API propres', r4: 'des produits full-stack'
      },
      ar: {
        code: 'ar', dir: 'rtl',
        nav1: 'الأعمال', nav2: 'الخبرة', nav3: 'التواصل',
        kicker: 'طالب هندسة برمجيات · تونس',
        headline: 'أبني منتجات تحلّ مشاكل حقيقية.',
        sub: 'Django وReact وTypeScript والذكاء الاصطناعي. رئيس الفرع الطلابي IEEE RAS في SESAME، والمركز الثالث في هاكاثون الذكاء الاصطناعي لدى ODC.',
        cta1: 'اكتشف NEXUS', cta2: 'تواصل معي',
        flowTitle: 'تابع طلبًا يواجه قواعد النظام داخل NEXUS',
        caseLabel: 'دراسة حالة 01',
        caseTitle: 'NEXUS، نظام SaaS متعدد المستأجرين لا تستطيع فيه أي مؤسسة رؤية بيانات غيرها',
        problem: 'تحتاج الشركات إلى مكان واحد للعملاء والطلبات والفواتير، ويجب أن تبقى بيانات كل شركة معزولة تمامًا. يفرض NEXUS هذا العزل في طبقة الاستعلامات، فلا يمكن نسيانه داخل أي واجهة عرض.',
        contact: 'لنبنِ شيئًا مفيدًا.',
        now: 'أعمل حاليًا على', r1: 'نظام SaaS متعدد المستأجرين', r2: 'تطبيقات مدعومة بالذكاء الاصطناعي', r3: 'واجهات API نظيفة', r4: 'منتجات متكاملة'
      }
    };
    const t = Object.assign({}, T[S.lang]);
    Object.keys(X).forEach((k) => { t[k] = X[k][S.lang]; });
    const L = (a, b, c) => ({ en: a, fr: b, ar: c }[S.lang]);

    const langs = ['en', 'fr', 'ar'].map((k) => ({
      label: k.toUpperCase(),
      cls: S.lang === k ? 'on' : '',
      pressed: S.lang === k,
      pick: () => this.setState({ lang: k })
    }));

    const PL = {
      en: [
        { text: 'Read an invoice in my organization', request: 'GET /invoices/42/ · user and record both belong to Org A', perm: 'Members may read.', sel: 'The *_for_user selector finds the record in Org A.', status: '200 OK', note: 'Invoice returned.', reason: 'record found inside the user’s own organization', stop: 'ok' },
        { text: 'Read an invoice from another organization', request: 'GET /invoices/57/ · user belongs to Org A, record to Org B', perm: 'Members may read.', sel: 'The *_for_user selector never returns Org B records.', status: '404 Not Found', note: 'Existence is never disclosed.', reason: 'cross-tenant requests return 404, not 403', stop: 'sel' },
        { text: 'Delete an invoice as a read-only member', request: 'DELETE /invoices/42/ · user is a member of Org A', perm: 'Members can only read. Owners and admins can write.', sel: 'Skipped. No data is touched.', status: '403 Forbidden', note: 'Blocked by the role check.', reason: 'writes need the owner or admin role', stop: 'perm' }
      ],
      fr: [
        { text: 'Lire une facture de mon organisation', request: 'GET /invoices/42/ · l’utilisateur et la facture appartiennent à l’Org A', perm: 'Les membres peuvent lire.', sel: 'Le sélecteur *_for_user trouve l’enregistrement dans l’Org A.', status: '200 OK', note: 'Facture retournée.', reason: 'enregistrement trouvé dans l’organisation de l’utilisateur', stop: 'ok' },
        { text: 'Lire une facture d’une autre organisation', request: 'GET /invoices/57/ · l’utilisateur est dans l’Org A, la facture dans l’Org B', perm: 'Les membres peuvent lire.', sel: 'Le sélecteur *_for_user ne renvoie jamais les enregistrements de l’Org B.', status: '404 Not Found', note: 'L’existence n’est jamais révélée.', reason: 'les requêtes entre tenants renvoient 404, pas 403', stop: 'sel' },
        { text: 'Supprimer une facture en tant que membre en lecture seule', request: 'DELETE /invoices/42/ · l’utilisateur est membre de l’Org A', perm: 'Les membres ne peuvent que lire. Les propriétaires et admins peuvent écrire.', sel: 'Ignoré. Aucune donnée n’est touchée.', status: '403 Forbidden', note: 'Bloqué par la vérification du rôle.', reason: 'les écritures exigent le rôle propriétaire ou admin', stop: 'perm' }
      ],
      ar: [
        { text: 'قراءة فاتورة في مؤسستي', request: 'GET /invoices/42/ · المستخدم والسجل ينتميان إلى المؤسسة A', perm: 'يُسمح للأعضاء بالقراءة.', sel: 'يجد المُحدِّد *_for_user السجل في المؤسسة A.', status: '200 OK', note: 'أُعيدت الفاتورة.', reason: 'عُثر على السجل داخل مؤسسة المستخدم', stop: 'ok' },
        { text: 'قراءة فاتورة من مؤسسة أخرى', request: 'GET /invoices/57/ · المستخدم في المؤسسة A والسجل في المؤسسة B', perm: 'يُسمح للأعضاء بالقراءة.', sel: 'لا يعيد المُحدِّد *_for_user أبدًا سجلات المؤسسة B.', status: '404 Not Found', note: 'لا يُكشف وجود السجل أبدًا.', reason: 'الطلبات بين المستأجرين تعيد 404 وليس 403', stop: 'sel' },
        { text: 'حذف فاتورة بصفة عضو للقراءة فقط', request: 'DELETE /invoices/42/ · المستخدم عضو في المؤسسة A', perm: 'يقرأ الأعضاء فقط. يكتب المالكون والمشرفون.', sel: 'تم التخطي. لا تُمَسّ أي بيانات.', status: '403 Forbidden', note: 'حجبه فحص الدور.', reason: 'الكتابة تتطلب دور مالك أو مشرف', stop: 'perm' }
      ]
    };
    const P = PL[S.lang];
    const prompts = P.map((p, i) => ({
      text: p.text,
      cls: S.prompt === i ? 'on' : '',
      pressed: S.prompt === i,
      pick: () => this.setState({ prompt: i, tick: this.state.tick + 1 })
    }));
    const cur = P[S.prompt];
    const route = {
      request: cur.request,
      perm: cur.perm,
      sel: cur.sel,
      status: cur.status,
      note: cur.note,
      code: cur.status,
      reason: cur.reason,
      permCls: cur.stop === 'perm' ? 'hot' : '',
      selCls: cur.stop === 'sel' ? 'hot' : (cur.stop === 'perm' ? 'dim' : ''),
      resCls: cur.stop === 'ok' ? 'hot' : '',
      anim: S.tick % 2 === 0 ? 'fa' : 'fb',
      stopCls: 'stop-' + cur.stop,
      stCls: cur.stop === 'ok' ? 'st-ok' : 'st-bad'
    };

    const palAll = this.palItems();
    const palSel = Math.min(S.sel, Math.max(palAll.length - 1, 0));
    const palItems = palAll.map((it, i) => ({
      label: it.label, hint: it.hint, cls: i === palSel ? 'on' : '', run: it.run
    }));
    const setProp = (el, k, v) => { if (el && el.style) el.style.setProperty(k, v); };

    return {
      t,
      spot: (e) => {
        const el = e.currentTarget, r = el.getBoundingClientRect();
        setProp(el, '--mx', (e.clientX - r.left) + 'px');
        setProp(el, '--my', (e.clientY - r.top) + 'px');
      },
      tilt: (e) => {
        const el = e.currentTarget, r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        setProp(el, '--ry', (x * 7).toFixed(2) + 'deg');
        setProp(el, '--rx', (-y * 7).toFixed(2) + 'deg');
      },
      untilt: (e) => {
        setProp(e.currentTarget, '--ry', '0deg');
        setProp(e.currentTarget, '--rx', '0deg');
      },
      openPal: () => { this.setState({ pal: true, q: '', sel: 0 }); this.focusLater('pal-input'); },
      openDec: () => { this.track('Open design decisions'); this.setState({ dec: true }); },
      openTerm: () => { this.setState({ term: true }); this.focusLater('term-input'); },
      closeAll: () => this.setState({ pal: false, dec: false, term: false, cs: null }),
      palOpen: S.pal, decOpen: S.dec, termOpen: S.term,
      q: S.q,
      onQ: (e) => this.setState({ q: e.target.value, sel: 0 }),
      palKey: (e) => {
        const n = palAll.length;
        if (e.key === 'ArrowDown') { e.preventDefault(); this.setState({ sel: n ? (palSel + 1) % n : 0 }); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); this.setState({ sel: n ? (palSel - 1 + n) % n : 0 }); }
        else if (e.key === 'Enter') { e.preventDefault(); if (palAll[palSel]) palAll[palSel].run(); }
        else if (e.key === 'Escape') { this.setState({ pal: false }); }
      },
      palItems,
      palEmpty: palAll.length === 0,
      tin: S.tin,
      onTin: (e) => this.setState({ tin: e.target.value }),
      termKey: (e) => {
        if (e.key === 'Enter') { e.preventDefault(); this.runCommand(this.state.tin); }
        else if (e.key === 'Escape') { this.setState({ term: false }); }
      },
      termLines: S.lines.map((l) => ({ cls: l.k === 'in' ? 'k' : '', t: l.t })),
      copyEmail: () => { this.track('Copy email'); this.copyEmail(); },
      closeLbl: L('Close', 'Fermer', 'إغلاق'),
      csOpen: !!S.cs,
      cs: (() => {
        const c = S.cs ? CS[S.cs] : null;
        if (!c) return { kicker: '', title: '', idea: '', steps: [], status: '', stack: '', href: '#', linkLabel: '' };
        const i = { en: 0, fr: 1, ar: 2 }[S.lang];
        const pick = (v) => (Array.isArray(v) ? v[i] : v);
        return {
          kicker: pick(c.kicker), title: pick(c.title), idea: pick(c.idea),
          steps: c.steps.map((st, n) => ({ n: String(n + 1).padStart(2, '0'), t: st[i] })),
          status: pick(c.status), stack: c.stack, href: c.href,
          linkLabel: c.gh ? L('View on GitHub', 'Voir sur GitHub', 'عرض على GitHub') : L('View live site', 'Voir le site', 'عرض الموقع')
        };
      })(),
      openCsNutri: () => { this.track('Case study', { project: 'nutriscan' }); this.setState({ cs: 'nutri' }); },
      openCsBg: () => { this.track('Case study', { project: 'bg-remover' }); this.setState({ cs: 'bg' }); },
      openCsFood: () => { this.track('Case study', { project: 'food-delivery' }); this.setState({ cs: 'food' }); },
      openCsClient: () => { this.track('Case study', { project: 'client-site' }); this.setState({ cs: 'client' }); },
      askOpen: S.ask,
      typing: S.typing,
      aq: S.aq,
      toggleAsk: () => {
        const open = !this.state.ask;
        const chat = (open && this.state.chat.length === 0) ? [{ k: 'bot', t: ASK_GREET[{ en: 0, fr: 1, ar: 2 }[this.state.lang]], act: [], follow: null }] : this.state.chat;
        this.setState({ ask: open, chat }, () => { if (open) { this.focusLater('ask-input'); this.scrollLog(); } });
        if (open) this.track('Open assistant');
      },
      askClear: () => {
        clearTimeout(this._t); clearInterval(this._iv);
        this.setState({ chat: [{ k: 'bot', t: ASK_GREET[{ en: 0, fr: 1, ar: 2 }[this.state.lang]], act: [], follow: null }], last: null, typing: false, aq: '' });
      },
      chatMsgs: S.chat.map((m) => {
        const acts = (m.act || []).map((a) => ({ label: ACT[a] ? ACT[a][{ en: 0, fr: 1, ar: 2 }[S.lang]] : a, run: () => this.runAction(a) }));
        const follows = (m.follow || []).map((id) => this.byId(id)).filter((e) => e && e.q).map((e) => ({ label: e.q[{ en: 0, fr: 1, ar: 2 }[S.lang]], pick: () => this.reply(e, e.q[{ en: 0, fr: 1, ar: 2 }[this.state.lang]]) }));
        return { cls: m.k === 'me' ? 'me' : 'bot', t: m.t, acts, follows, hasActs: acts.length > 0, hasFollow: follows.length > 0 };
      }),
      tabs: CATS.map((c) => ({ label: c.l[{ en: 0, fr: 1, ar: 2 }[S.lang]], cls: (!S.aq && S.cat === c.id) ? 'on' : '', pick: () => this.setState({ cat: c.id, aq: '' }) })),
      chips: (() => {
        const i = { en: 0, fr: 1, ar: 2 }[S.lang];
        const mk = (e) => ({ label: e.q[i], pick: () => this.reply(e, e.q[this.idx()]) });
        if ((S.aq || '').trim().length >= 2) return this.nearest(S.aq).map(mk);
        const list = KB.filter((e) => e.q && e.cat === S.cat).map(mk);
        list.push({ label: L('Surprise me', 'Surprends-moi', 'فاجئني'), pick: () => { const all = KB.filter((e) => e.q); const e = all[Math.floor(Math.random() * all.length)]; this.reply(e, e.q[this.idx()]); } });
        return list;
      })(),
      onAq: (e) => this.setState({ aq: e.target.value }),
      askKey: (ev) => {
        if (ev.key === 'Enter') { ev.preventDefault(); const q = (this.state.aq || '').trim(); if (q) this.ask(q); }
        else if (ev.key === 'Escape') { this.setState({ ask: false }); }
      },
      askSend: () => { const q = (this.state.aq || '').trim(); if (q) this.ask(q); },
      copyLabel: S.copied === true ? L('Copied to clipboard', 'Copié dans le presse-papiers', 'تم النسخ') : (S.copied === 'fail' ? L('Select and copy: ', 'Sélectionnez et copiez : ', 'حدّد وانسخ: ') + 'makremamri08@gmail.com' : L('Copy email', 'Copier l’email', 'نسخ البريد')),
      dir: t.dir,
      langCode: t.code,
      themeClass: S.light ? 't-light' : 't-dark',
      introCls: S.intro ? '' : 'io',
      skipIntro: () => this.setState({ intro: false }),
      themeLabel: S.light ? 'DARK' : 'LIGHT',
      toggleTheme: () => this.setState({ light: !this.state.light }),
      langs,
      prompts,
      route
    };
  }
}

export default Component;
