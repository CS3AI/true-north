import type { Article, Locale, Persona } from "./types";

type MockArticleRecord = Article & { audience_segments: string[] };

export const MOCK_ARTICLES_BY_LOCALE: Record<Locale, MockArticleRecord[]> = 
{
  "zh": [
    {
      "id": "eb9b9a44-3d24-515a-a536-b62b21f3a796",
      "title": "OpenAI o1 推理模型：AI 开始像科学家一样分步思考",
      "summary": "o1 在 MATH 和 Codeforces 竞赛中首次超越人类博士水平，标志着 AI 从「即时回答」进化到「深度推理」。",
      "why_it_matters": "Delta 变化：o1 引入强化学习驱动的 Chain-of-Thought 推理链，不再依赖 GPT-4o 的单轮生成。AIME 准确率从 13% 跃升至 83%，Codeforces 达人类 89 百分位。",
      "actionable_insight": "创业者：评估产品中复杂决策场景，优先接入 o1 API；研究者：精读 OpenAI 技术报告，关注 RL 推理蒸馏对小模型的迁移路径。",
      "impact_score": 96,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://openai.com/index/learning-to-reason-with-llms/",
      "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468189+00:00",
      "created_at": "2026-06-08T02:00:41.468189+00:00",
      "tags": [
        "#大模型",
        "#推理能力",
        "#OpenAI"
      ],
      "target_audience": [
        "研究者"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "ba5d534c-3d0d-5961-8c26-084492155ec7",
      "title": "Sequoia「AI Act Two」：从模型军备竞赛进入应用 ROI 兑现期",
      "summary": "红杉资本发布 AI Act Two 宣言：2025 起投资焦点从 Foundation Model 转向「可度量 ROI 的 Agent 工作流」。",
      "why_it_matters": "Delta：VC 尽调框架新增「单位经济模型」——推理 Token 成本 / 客户 LTV 比值必须 <0.15；地缘政治合规成为 DD 必问项。",
      "actionable_insight": "投资者：用 Agent ROI 计算器筛选 Pipeline；创业者：准备「Token 降本路线图 + EU AI Act 合规清单」作为 Series A 数据室标配。",
      "impact_score": 91,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://www.sequoiacap.com/article/ai-act-two/",
      "image_url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468265+00:00",
      "created_at": "2026-06-08T02:00:41.468265+00:00",
      "tags": [
        "#Sequoia",
        "#AIActTwo",
        "#ROI"
      ],
      "target_audience": [
        "投资者",
        "创业者"
      ],
      "audience_segments": [
        "investor",
        "founder"
      ]
    },
    {
      "id": "9084209b-5dd6-5a94-b9ca-3ffac67f2496",
      "title": "DeepSeek-R1：600 万美元复现 OpenAI o1 级推理能力",
      "summary": "DeepSeek 用纯 GRPO 强化学习（零 SFT）训练出媲美 o1 的推理模型，训练成本仅 600 万美元。",
      "why_it_matters": "Delta：AIME 2024 达 79.8%（o1 为 83%），成本仅为 OpenAI 预估的 1/10。MIT 协议开源打破「推理必须依赖人工 CoT 标注」共识。",
      "actionable_insight": "学生：下载 DeepSeek-R1-Distill-Qwen-7B 本地跑通 GSM8K；研究者：对比 GRPO vs PPO vs DPO 收敛速度。",
      "impact_score": 94,
      "golden_section": "research",
      "section_label": "研究雷达",
      "original_url": "https://arxiv.org/abs/2501.12948",
      "image_url": "https://arxiv.org/html/2501.12948v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468204+00:00",
      "created_at": "2026-06-08T02:00:41.468204+00:00",
      "tags": [
        "#开源大模型",
        "#GRPO",
        "#DeepSeek"
      ],
      "target_audience": [
        "学生"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "ea77c58c-636c-5f5f-9a65-c2b0da803533",
      "title": "Claude 3.5 Sonnet：编码能力超越 GPT-4o",
      "summary": "Claude 3.5 Sonnet 在 SWE-bench 上以 49% 通过率领先 GPT-4o 的 38%，成为最强代码模型。",
      "why_it_matters": "Delta：HumanEval 准确率达 92%，Artifacts 可实时渲染 React 组件。200K 上下文内幻觉率降低约 30%。",
      "actionable_insight": "求职者：将 Claude API 集成经验写入简历；创业者：用 Artifacts 在 1 天内生成可交互 Demo 给投资人。",
      "impact_score": 93,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://www.anthropic.com/news/claude-3-5-sonnet",
      "image_url": "https://cdn.sanity.io/images/4zrzovbb/website/cf2c754458e9102b7334731fb18a965bfeb7ad08-2200x1894.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468196+00:00",
      "created_at": "2026-06-08T02:00:41.468196+00:00",
      "tags": [
        "#Claude",
        "#代码模型",
        "#Anthropic"
      ],
      "target_audience": [
        "求职者",
        "媒体/公众"
      ],
      "audience_segments": [
        "job_seeker",
        "media"
      ]
    },
    {
      "id": "5ea24778-b8e8-5235-a568-ff76b1bb3450",
      "title": "Stanford HAI AI Index 2024：全球 AI 投入首超 1000 亿美元",
      "summary": "斯坦福 HAI 年度报告显示训练算力、专利与私人投资同步飙升，开源与闭源差距在推理阶段急剧收窄。",
      "why_it_matters": "Delta：AI Index 首次将 Test-Time Compute 与地缘政治算力分布纳入核心指标；美国私人 AI 投资约为中国的 12 倍，但开源模型下载量中国领先。",
      "actionable_insight": "研究者：引用 AI Index 跨国基准设计课程大作业；学生：精读 Chapter 2 算力趋势图，理解 FLOPs 与 TCO 的差异。",
      "impact_score": 92,
      "golden_section": "research",
      "section_label": "研究雷达",
      "original_url": "https://hai.stanford.edu/ai-index/2024-ai-index-report",
      "image_url": "https://arxiv.org/html/2405.01223v2/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468239+00:00",
      "created_at": "2026-06-08T02:00:41.468239+00:00",
      "tags": [
        "#StanfordHAI",
        "#AIIndex",
        "#算力"
      ],
      "target_audience": [
        "政府/监管",
        "媒体/公众"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "7f613295-5159-5e54-9d1a-2b483fd775b4",
      "title": "Google Gemini 2.0：原生多模态 Agent 正式落地",
      "summary": "Gemini 2.0 Flash 支持原生 Tool Use 和实时多模态交互，延迟降至 200ms 以内。",
      "why_it_matters": "Delta：从「文本 LLM + 外挂工具」升级为原生 Agent 架构，内置 Google Search、Maps、Code Execution。多模态 token 成本降低 50%。",
      "actionable_insight": "创业者：用 Gemini 2.0 构建「搜索 + 推理 + 行动」闭环 Agent；学生：通过 Google AI Studio 免费额度跑通多模态 Demo。",
      "impact_score": 90,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://blog.google/technology/ai/google-gemini-ai/",
      "image_url": "https://arxiv.org/html/2403.05530v2/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468200+00:00",
      "created_at": "2026-06-08T02:00:41.468200+00:00",
      "tags": [
        "#Gemini",
        "#多模态",
        "#Agent"
      ],
      "target_audience": [
        "学生"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "5b2185b5-0803-5e8a-9fda-d73340d0906b",
      "title": "Cursor Agent：从代码补全到自主编程员",
      "summary": "Cursor Agent 自主规划、写代码、跑终端、修 Bug，CRUD API 人工介入从 50+ 次降至 3 次。",
      "why_it_matters": "Delta：完整闭环「目标 → 拆任务 → 写代码 → 跑测试 → 迭代修复」。SWE-bench Verified 49.2%。",
      "actionable_insight": "创业者：2 小时搭建 MVP 原型；求职者：GitHub README 标注「AI-Native · Cursor Agent」。",
      "impact_score": 91,
      "golden_section": "application",
      "section_label": "应用案例库",
      "original_url": "https://cursor.com/changelog",
      "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468217+00:00",
      "created_at": "2026-06-08T02:00:41.468217+00:00",
      "tags": [
        "#Cursor",
        "#AI编程",
        "#Agent"
      ],
      "target_audience": [
        "创业者"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "5905d0e8-3c11-58e5-b692-9ad1b75fd8a2",
      "title": "Test-Time Compute Scaling：推理时算力是第三条增长曲线",
      "summary": "ICLR 2025 核心范式：推理时增加算力可等效扩大 10 倍模型参数，Small model + long CoT 可击败大模型。",
      "why_it_matters": "Delta：Scaling Law 从训练算力扩展到推理算力。o1 的成功正是 TTC scaling 的工程验证。",
      "actionable_insight": "研究者：在你的 benchmark 上绘制 TTC scaling 曲线；创业者：评估「小模型 + 长推理链」替代大模型 API 的成本优势。",
      "impact_score": 91,
      "golden_section": "research",
      "section_label": "研究雷达",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2409.12931v1/x1.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468213+00:00",
      "created_at": "2026-06-08T02:00:41.468213+00:00",
      "tags": [
        "#Test-TimeCompute",
        "#ScalingLaw",
        "#CoT"
      ],
      "target_audience": [
        "政府/监管"
      ],
      "audience_segments": [
        "government"
      ]
    },
    {
      "id": "620f3e29-f3e4-5301-a7dd-daca2a611a72",
      "title": "OpenAI Responses API：Agent 构建从 Prompt 工程进入 Workflow 工程",
      "summary": "OpenAI 官方工程博客发布 Responses API，原生支持多轮 Tool Call、文件检索与结构化输出，替代 Assistants API 成为 Agent 首选栈。",
      "why_it_matters": "Delta：开发者从「写 Prompt」转向「设计 Agent Workflow」；内置 Retrieval + Code Interpreter 使 MVP 构建周期从 2 周压缩至 2 天。",
      "actionable_insight": "创业者：48 小时内用 Responses API 交付可演示 Agent MVP；学生：完成一个 Tool Use + RAG 最小项目作为作品集。",
      "impact_score": 89,
      "golden_section": "application",
      "section_label": "应用案例库",
      "original_url": "https://openai.com/index/new-tools-for-building-agents/",
      "image_url": "https://cdn.openai.com/chatgpt/share-og.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468254+00:00",
      "created_at": "2026-06-08T02:00:41.468254+00:00",
      "tags": [
        "#OpenAI",
        "#ResponsesAPI",
        "#Agent"
      ],
      "target_audience": [
        "学生"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "7065b2a4-b1cc-5be3-8505-bf0e7d5b5950",
      "title": "Berkeley BAIR：Embodied Agent 从仿真走向真实机器人部署",
      "summary": "BAIR 实验室发布跨模态 Agent 栈，将 LLM 规划层与 MuJoCo/Isaac 仿真环境无缝桥接，Sim-to-Real 成功率提升 40%。",
      "why_it_matters": "Delta：Agent 架构从纯文本 Tool Use 扩展到物理世界状态机；GRPO 类 RL 在机器人策略微调中样本效率提升 3×。",
      "actionable_insight": "研究者：复现 BAIR 开源 Agent 基线；创业者：评估仓储/巡检场景的 Embodied Agent MVP 窗口期。",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "研究雷达",
      "original_url": "https://bair.berkeley.edu/blog/",
      "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468243+00:00",
      "created_at": "2026-06-08T02:00:41.468243+00:00",
      "tags": [
        "#Berkeley",
        "#EmbodiedAI",
        "#Agent"
      ],
      "target_audience": [
        "研究者",
        "创业者"
      ],
      "audience_segments": [
        "researcher",
        "founder"
      ]
    },
    {
      "id": "ff35eee0-f517-5389-a5ba-34b13146ece4",
      "title": "ICLR 2025 放榜：Test-Time Compute 成最大赢家",
      "summary": "最佳论文聚焦 Test-Time Compute Scaling——推理时增加算力等效 10 倍参数扩展。",
      "why_it_matters": "Delta：Small model + long CoT at inference 可击败 10 倍参数大模型。o1 是这一范式的工程验证。",
      "actionable_insight": "研究者：复现 Outstanding Paper 基线；学生：阅读 OpenReview 公开评审，学习 top-tier 实验设计。",
      "impact_score": 90,
      "golden_section": "competition",
      "section_label": "赛事与榜单",
      "original_url": "https://iclr.cc/",
      "image_url": "https://arxiv.org/html/2408.03314v1/x4.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468232+00:00",
      "created_at": "2026-06-08T02:00:41.468232+00:00",
      "tags": [
        "#ICLR2025",
        "#Test-TimeCompute",
        "#顶会"
      ],
      "target_audience": [
        "研究者"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "dd17e3e5-36d2-520c-af48-6ba1107752e9",
      "title": "EU AI Act 生效：高风险 AI 系统合规清单与 ROI 影响评估",
      "summary": "欧盟 AI 法案进入实施阶段，高风险系统须完成 conformity assessment；Generative AI 须满足透明度与版权合规双重要求。",
      "why_it_matters": "Delta：地缘政治合规从「建议性框架」变为「强制性义务」；跨境 SaaS 须在 2026 Q4 前完成 EU 代表任命与 QMS 文档化。",
      "actionable_insight": "监管者：参照 Annex III 建立本国高风险 AI 目录；创业者：用 AI Act 合规 ROI 模型评估欧洲市场进入成本。",
      "impact_score": 90,
      "golden_section": "work",
      "section_label": "工作影响面板",
      "original_url": "https://artificialintelligenceact.eu/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468272+00:00",
      "created_at": "2026-06-08T02:00:41.468272+00:00",
      "tags": [
        "#EUAIAct",
        "#合规",
        "#地缘政治"
      ],
      "target_audience": [
        "求职者",
        "政府/监管"
      ],
      "audience_segments": [
        "job_seeker",
        "government"
      ]
    },
    {
      "id": "5619b903-9fa5-5b52-8c9d-68232c900d63",
      "title": "a16z AI Market Map 2025：Agent 基础设施占据 40% 版图",
      "summary": "Andreessen Horowitz 更新 AI 产业白皮书，Agent 编排、推理优化与 Evals 基础设施合计占市场地图 40%。",
      "why_it_matters": "Delta：Gartner 式「幻灭低谷」尚未到来——Agent 层正在经历「泡沫前夜」式资本密集涌入；ROI 验证窗口仅 12-18 个月。",
      "actionable_insight": "投资者：按 Market Map 四层（模型/infra/agent/app）建立覆盖矩阵；创业者：在 Agent Infra 层寻找「开源 + 商业」双轨 moat。",
      "impact_score": 88,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://a16z.com/ai-market-map/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468269+00:00",
      "created_at": "2026-06-08T02:00:41.468269+00:00",
      "tags": [
        "#a16z",
        "#MarketMap",
        "#AgentInfra"
      ],
      "target_audience": [
        "投资者"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "022280b3-4780-5e49-b8fe-348d1c2aaf02",
      "title": "Mamba 架构：线性复杂度序列建模挑战 Transformer",
      "summary": "Mamba 用选择性 SSM 实现 O(n) 线性推理，长序列速度比 Transformer 快 5 倍。",
      "why_it_matters": "Delta：100 万 token 上下文仍保持线性扩展。DNA 建模和音频生成以 1/4 参数量达到 GPT-3 级性能。",
      "actionable_insight": "研究者：复现 arXiv:2312.11805 对比 Mamba vs Transformer 延迟；学生：SSM vs Attention 是 2025 系统方向面试高频题。",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "研究雷达",
      "original_url": "https://arxiv.org/abs/2312.11805",
      "image_url": "https://arxiv.org/html/2408.03314v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468209+00:00",
      "created_at": "2026-06-08T02:00:41.468209+00:00",
      "tags": [
        "#Mamba",
        "#SSM",
        "#高效推理"
      ],
      "target_audience": [
        "研究者"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "64b9bb4d-aa0f-5cab-8ead-f4444988119e",
      "title": "Anthropic 安全宪法：Constitutional AI 如何重塑对齐与合规基线",
      "summary": "Anthropic 官方更新 Core Views on AI Safety，将 Constitutional AI 原则写入模型卡与 API 使用政策，成为行业对齐标杆。",
      "why_it_matters": "Delta：从 RLHF 单一对齐扩展到「宪法式」多目标约束；政府与企业在采购 AI 时开始要求模型卡 + 红队报告作为 RFP 标配。",
      "actionable_insight": "监管者：将 Constitutional AI 披露要求纳入政府采购模板；媒体：报道时区分「对齐技术」与「营销话术」。",
      "impact_score": 86,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://www.anthropic.com/news/core-views-on-ai-safety",
      "image_url": "https://arxiv.org/html/2409.12931v1/x3.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468257+00:00",
      "created_at": "2026-06-08T02:00:41.468257+00:00",
      "tags": [
        "#Anthropic",
        "#AI安全",
        "#ConstitutionalAI"
      ],
      "target_audience": [
        "政府/监管",
        "媒体/公众"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "fbaba309-9651-5cb5-aac6-b83c3c89091d",
      "title": "NVIDIA NIM：推理微服务化将 LLM 部署 TCO 再降 40%",
      "summary": "NVIDIA Technical Blog 发布 NIM 推理微服务，预优化 TensorRT-LLM 引擎 + 容器化 SLA，企业可在 5 分钟内拉起生产级推理端点。",
      "why_it_matters": "Delta：从「买 GPU」转向「买推理 SLA」；Token 降本路径从量化（INT4/FP8）扩展到预编译引擎 + 批处理调度。",
      "actionable_insight": "求职者：掌握 NIM + vLLM 双栈部署技能写入简历；创业者：用 NIM 将推理成本压至 ARR 的 12% 以内。",
      "impact_score": 85,
      "golden_section": "application",
      "section_label": "应用案例库",
      "original_url": "https://developer.nvidia.com/blog/nvidia-nim-offers-optimized-inference-microservices-for-ai-models/",
      "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468250+00:00",
      "created_at": "2026-06-08T02:00:41.468250+00:00",
      "tags": [
        "#NVIDIA",
        "#NIM",
        "#Token降本"
      ],
      "target_audience": [
        "求职者"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "3b3c82a9-e3fa-5663-879d-c3925ebb0f44",
      "title": "Vercel AI SDK 3.0：Generative UI 让 Agent 从 CLI 走进浏览器",
      "summary": "Vercel 开发者博客发布 AI SDK 3.0，Streaming UI 组件 + Edge 推理使全栈 Agent 应用可在 Vercel/Supabase 上一键部署。",
      "why_it_matters": "Delta：前端从「聊天框」进化为「Generative UI」——Agent 直接渲染 React 组件；Token 降本靠 Edge 缓存 + 流式截断。",
      "actionable_insight": "创业者：用 AI SDK + Supabase 在 24 小时内上线 SaaS Agent；求职者：Generative UI 经验是 2025 前端+AI 复合岗加分项。",
      "impact_score": 84,
      "golden_section": "application",
      "section_label": "应用案例库",
      "original_url": "https://vercel.com/blog/ai-sdk-3-generative-ui",
      "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468261+00:00",
      "created_at": "2026-06-08T02:00:41.468261+00:00",
      "tags": [
        "#Vercel",
        "#AISDK",
        "#GenerativeUI"
      ],
      "target_audience": [
        "创业者",
        "学生"
      ],
      "audience_segments": [
        "founder",
        "student"
      ]
    },
    {
      "id": "2632d4c9-ff62-593a-af80-ab922cdd66f9",
      "title": "WIRED × MIT TR：2025 Agent 元年的大众认知鸿沟与传播策略",
      "summary": "WIRED 与 MIT Technology Review 联合观察：Agent 技术能力曲线已超越公众理解曲线 18 个月，科学传播面临「能力-信任」双差。",
      "why_it_matters": "Delta：媒体叙事从「ChatGPT 能聊天吗」升级为「Agent 能代替多少白领决策链」；技术平权与数字鸿沟成为 WEF 2025 核心议题。",
      "actionable_insight": "媒体：采用「能力演示 + 局限披露」双栏结构避免 hype；学生/求职者：建立个人 AI 素养档案应对 Agent 时代的技能认证。",
      "impact_score": 83,
      "golden_section": "headline",
      "section_label": "头条快报",
      "original_url": "https://www.wired.com/tag/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468280+00:00",
      "created_at": "2026-06-08T02:00:41.468280+00:00",
      "tags": [
        "#WIRED",
        "#MITTechReview",
        "#Agent元年"
      ],
      "target_audience": [
        "媒体/公众"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6ab6c04b-dccf-5c6d-a049-1d816d8eea13",
      "title": "Hugging Face Open R1：社区复现 DeepSeek-R1 开源计划",
      "summary": "Open R1 用 100% 开源工具链复现 GRPO 训练全流程，8×H100 48 小时训练 7B 推理模型。",
      "why_it_matters": "Delta：推理能力从「黑盒 API」变成「可复现工程」。任何人可 Fork 并定制垂直领域推理模型。",
      "actionable_insight": "学生：Fork huggingface/open-r1 在 Colab 跑通 SFT Demo；创业者：为法律/医疗训练专属模型，API 成本降 80%。",
      "impact_score": 87,
      "golden_section": "application",
      "section_label": "应用案例库",
      "original_url": "https://huggingface.co/blog/open-r1",
      "image_url": "https://raw.githubusercontent.com/huggingface/open-r1/main/assets/plan-of-attack.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468220+00:00",
      "created_at": "2026-06-08T02:00:41.468220+00:00",
      "tags": [
        "#HuggingFace",
        "#OpenR1",
        "#开源生态"
      ],
      "target_audience": [
        "媒体/公众"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6d56cfdf-f83d-5090-a0a6-9bcf0bb4f6d4",
      "title": "NIST AI RMF 1.0：美国联邦 AI 安全风险管理的全球参照系",
      "summary": "NIST 发布 AI Risk Management Framework 1.0 正式版，Map-Measure-Manage-Govern 四步法成为企业 AI 治理的事实标准。",
      "why_it_matters": "Delta：AI 安全从「事后审计」前移至「设计即合规」；与 EU AI Act 形成跨大西洋双轨治理，影响全球 AI 采购标准。",
      "actionable_insight": "监管者：将 NIST RMF 纳入政府采购与关键基础设施 AI 审查；投资者：DD 时要求被投企业提交 RMF 成熟度评分。",
      "impact_score": 87,
      "golden_section": "work",
      "section_label": "工作影响面板",
      "original_url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "image_url": "https://arxiv.org/html/2305.18290v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468276+00:00",
      "created_at": "2026-06-08T02:00:41.468276+00:00",
      "tags": [
        "#NIST",
        "#AIRMF",
        "#风险管理"
      ],
      "target_audience": [
        "政府/监管",
        "投资者"
      ],
      "audience_segments": [
        "government",
        "investor"
      ]
    },
    {
      "id": "42a5831a-7035-500c-a90a-b5484b979ae5",
      "title": "arXiv 热点：Multi-Agent Scaling Law 揭示协作推理的算力拐点",
      "summary": "最新 arXiv 论文证明 Multi-Agent 系统在 4-8 个 Agent 协作时推理准确率出现超线性跃升，Token 成本却仅线性增长。",
      "why_it_matters": "Delta：从单模型 Test-Time Compute 扩展到 Multi-Agent Test-Time Compute；LangGraph/CrewAI 编排复杂度成为新瓶颈。",
      "actionable_insight": "研究者：在 OpenReview 追踪 Agent scaling 复现竞赛；创业者：用 4-Agent 编排替换单链 CoT 降低 30% Token 浪费。",
      "impact_score": 87,
      "golden_section": "research",
      "section_label": "研究雷达",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2408.03314v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468247+00:00",
      "created_at": "2026-06-08T02:00:41.468247+00:00",
      "tags": [
        "#arXiv",
        "#MultiAgent",
        "#ScalingLaw"
      ],
      "target_audience": [
        "创业者"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "490445b8-6847-5aa2-b146-269b4b9d392a",
      "title": "NeurIPS 2024：MoE + RLHF 融合架构席卷 30% Spotlight",
      "summary": "Mixture-of-Experts 与 RLHF 融合占据 30% Spotlight 论文，效率提升 5 倍。",
      "why_it_matters": "Delta：MoE 从「主题分专家」进化为「推理类型分专家」。DeepSeek-V3 671B 验证「专家团队按需组队」。",
      "actionable_insight": "研究者：对比 Switch Transformer vs DeepSeek-MoE 路由策略；创业者：vLLM MoE 支持降本 60%。",
      "impact_score": 86,
      "golden_section": "competition",
      "section_label": "赛事与榜单",
      "original_url": "https://neurips.cc/Conferences/2024",
      "image_url": "https://arxiv.org/html/2412.19437v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468235+00:00",
      "created_at": "2026-06-08T02:00:41.468235+00:00",
      "tags": [
        "#NeurIPS2024",
        "#MoE",
        "#RLHF"
      ],
      "target_audience": [
        "投资者"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "3b7274db-6092-59ae-ba12-064e88623ba6",
      "title": "MIT Tech Review：AI 重塑 40% 白领工作流程",
      "summary": "LLM Agent 已渗透文档撰写、代码审查、数据分析等 40% 知识工作场景，渗透率从 12% 增至 40%。",
      "why_it_matters": "Delta：从「AI 辅助个人效率」到「AI 重构团队协作」。Prompt Engineering 和 Agent Orchestration 成为基础技能。",
      "actionable_insight": "求职者：用 LangGraph 搭建 Multi-Agent Demo 上传 GitHub；学生：AI 系统课 vs 纯 ML 理论，就业竞争力差距 35%。",
      "impact_score": 82,
      "golden_section": "work",
      "section_label": "工作影响面板",
      "original_url": "https://www.technologyreview.com/topic/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468224+00:00",
      "created_at": "2026-06-08T02:00:41.468224+00:00",
      "tags": [
        "#AI就业",
        "#工作流",
        "#Agent"
      ],
      "target_audience": [
        "求职者"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "fe9d3314-8b86-5b2a-a2ef-bb01d9020e0c",
      "title": "NVIDIA 报告：企业推理算力需求 3 年翻 10 倍",
      "summary": "企业级 LLM 推理算力 2024–2027 将以 10 倍速度增长，Agent 多轮调用是最大驱动力。",
      "why_it_matters": "Delta：Agent 循环推理使 token 消耗 ×100。H200 + TensorRT-LLM 降本 3 倍，但总消耗仍增 5 倍。",
      "actionable_insight": "创业者：vLLM + 量化将推理成本控在 ARR 15% 内；求职者：学习 TensorRT-LLM 和 INT4/FP8 量化。",
      "impact_score": 79,
      "golden_section": "work",
      "section_label": "工作影响面板",
      "original_url": "https://blogs.nvidia.com/blog/what-is-generative-ai/",
      "image_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468228+00:00",
      "created_at": "2026-06-08T02:00:41.468228+00:00",
      "tags": [
        "#NVIDIA",
        "#推理算力",
        "#成本优化"
      ],
      "target_audience": [
        "投资者"
      ],
      "audience_segments": [
        "investor"
      ]
    }
  ],
  "en": [
    {
      "id": "eb9b9a44-3d24-515a-a536-b62b21f3a796",
      "title": "OpenAI o1: AI Starts Thinking Like a Scientist, Step by Step",
      "summary": "o1 surpasses PhD-level performance on MATH and Codeforces — a shift from instant answers to deep reasoning.",
      "why_it_matters": "Delta: o1 uses RL-driven Chain-of-Thought instead of GPT-4o's single-pass generation. AIME accuracy jumps from 13% to 83%; Codeforces hits the 89th human percentile.",
      "actionable_insight": "Founders: audit complex-decision workflows and prioritize o1 API integration. Researchers: study OpenAI's RL distillation path for small-model transfer.",
      "impact_score": 96,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://openai.com/index/learning-to-reason-with-llms/",
      "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468345+00:00",
      "created_at": "2026-06-08T02:00:41.468345+00:00",
      "tags": [
        "#LLM",
        "#Reasoning",
        "#OpenAI"
      ],
      "target_audience": [
        "Researchers"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "ba5d534c-3d0d-5961-8c26-084492155ec7",
      "title": "Sequoia 'AI Act Two': From Model Arms Race to Application ROI",
      "summary": "Sequoia Capital's AI Act Two thesis: post-2025 focus shifts from foundation models to agent workflows with measurable ROI.",
      "why_it_matters": "Delta: VC diligence adds unit economics — inference token cost / customer LTV must be <0.15; geopolitical compliance is now mandatory DD.",
      "actionable_insight": "Investors: filter pipeline with agent ROI calculators. Founders: prepare token-cost roadmaps + EU AI Act checklists for Series A data rooms.",
      "impact_score": 91,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://www.sequoiacap.com/article/ai-act-two/",
      "image_url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468420+00:00",
      "created_at": "2026-06-08T02:00:41.468420+00:00",
      "tags": [
        "#Sequoia",
        "#AIActTwo",
        "#ROI"
      ],
      "target_audience": [
        "Investors",
        "Founders"
      ],
      "audience_segments": [
        "investor",
        "founder"
      ]
    },
    {
      "id": "9084209b-5dd6-5a94-b9ca-3ffac67f2496",
      "title": "DeepSeek-R1: Replicating o1-Level Reasoning for $6M",
      "summary": "DeepSeek trains an o1-class reasoning model with pure GRPO (zero SFT) for just $6 million.",
      "why_it_matters": "Delta: 79.8% on AIME 2024 (o1: 83%) at ~1/10 OpenAI's estimated cost. MIT-licensed open weights shatter the 'manual CoT required' consensus.",
      "actionable_insight": "Students: run DeepSeek-R1-Distill-Qwen-7B locally on GSM8K. Researchers: benchmark GRPO vs PPO vs DPO convergence.",
      "impact_score": 94,
      "golden_section": "research",
      "section_label": "Research Radar",
      "original_url": "https://arxiv.org/abs/2501.12948",
      "image_url": "https://arxiv.org/html/2501.12948v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468357+00:00",
      "created_at": "2026-06-08T02:00:41.468357+00:00",
      "tags": [
        "#OpenSource",
        "#GRPO",
        "#DeepSeek"
      ],
      "target_audience": [
        "Students"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "ea77c58c-636c-5f5f-9a65-c2b0da803533",
      "title": "Claude 3.5 Sonnet: Coding Performance Surpasses GPT-4o",
      "summary": "Claude 3.5 Sonnet leads SWE-bench at 49% vs GPT-4o's 38% — the strongest code model today.",
      "why_it_matters": "Delta: 92% HumanEval accuracy; Artifacts render live React components. ~30% lower hallucination rate within 200K context.",
      "actionable_insight": "Job seekers: highlight Claude API integration on your resume. Founders: ship an interactive Artifacts demo to investors in one day.",
      "impact_score": 93,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://www.anthropic.com/news/claude-3-5-sonnet",
      "image_url": "https://cdn.sanity.io/images/4zrzovbb/website/cf2c754458e9102b7334731fb18a965bfeb7ad08-2200x1894.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468350+00:00",
      "created_at": "2026-06-08T02:00:41.468350+00:00",
      "tags": [
        "#Claude",
        "#CodeModel",
        "#Anthropic"
      ],
      "target_audience": [
        "Job Seekers",
        "Media / Public"
      ],
      "audience_segments": [
        "job_seeker",
        "media"
      ]
    },
    {
      "id": "5ea24778-b8e8-5235-a568-ff76b1bb3450",
      "title": "Stanford HAI AI Index 2024: Global AI Spend Crosses $100B",
      "summary": "Stanford HAI's annual report shows training compute, patents, and private investment surging — open vs closed gaps narrow at inference.",
      "why_it_matters": "Delta: AI Index now tracks Test-Time Compute and geopolitical compute distribution. U.S. private AI investment ~12× China, yet China leads open-model downloads.",
      "actionable_insight": "Researchers: cite AI Index cross-country baselines in coursework. Students: study Chapter 2 compute trends — FLOPs vs TCO.",
      "impact_score": 92,
      "golden_section": "research",
      "section_label": "Research Radar",
      "original_url": "https://hai.stanford.edu/ai-index/2024-ai-index-report",
      "image_url": "https://arxiv.org/html/2405.01223v2/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468392+00:00",
      "created_at": "2026-06-08T02:00:41.468392+00:00",
      "tags": [
        "#StanfordHAI",
        "#AIIndex",
        "#Compute"
      ],
      "target_audience": [
        "Gov / Regulators",
        "Media / Public"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "7f613295-5159-5e54-9d1a-2b483fd775b4",
      "title": "Google Gemini 2.0: Native Multimodal Agents Go Production",
      "summary": "Gemini 2.0 Flash ships native Tool Use and real-time multimodal interaction under 200ms latency.",
      "why_it_matters": "Delta: upgrades from text-LLM + plugins to native Agent architecture with Search, Maps, and Code Execution built in. Multimodal token cost down 50%.",
      "actionable_insight": "Founders: build search-reason-act Agent loops on Gemini 2.0. Students: prototype multimodal demos via Google AI Studio free tier.",
      "impact_score": 90,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://blog.google/technology/ai/google-gemini-ai/",
      "image_url": "https://arxiv.org/html/2403.05530v2/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468354+00:00",
      "created_at": "2026-06-08T02:00:41.468354+00:00",
      "tags": [
        "#Gemini",
        "#Multimodal",
        "#Agent"
      ],
      "target_audience": [
        "Students"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "5b2185b5-0803-5e8a-9fda-d73340d0906b",
      "title": "Cursor Agent: From Code Completion to Autonomous Programmer",
      "summary": "Cursor Agent plans, codes, runs terminals, and fixes bugs — human interventions drop from 50+ to 3 for a CRUD API.",
      "why_it_matters": "Delta: full loop from goal → task breakdown → code → test → iterate. 49.2% on SWE-bench Verified.",
      "actionable_insight": "Founders: ship an MVP in 2 hours. Job seekers: tag your README 'AI-Native · Cursor Agent'.",
      "impact_score": 91,
      "golden_section": "application",
      "section_label": "Application Cases",
      "original_url": "https://cursor.com/changelog",
      "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468369+00:00",
      "created_at": "2026-06-08T02:00:41.468369+00:00",
      "tags": [
        "#Cursor",
        "#AICoding",
        "#Agent"
      ],
      "target_audience": [
        "Founders"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "5905d0e8-3c11-58e5-b692-9ad1b75fd8a2",
      "title": "Test-Time Compute Scaling: Inference Compute as the Third Growth Curve",
      "summary": "ICLR 2025 paradigm: more compute at inference equals 10× effective parameters. Small model + long CoT beats large models.",
      "why_it_matters": "Delta: Scaling Laws extend from training to inference compute. o1's success is the engineering proof of TTC scaling.",
      "actionable_insight": "Researchers: plot TTC scaling curves on your benchmarks. Founders: evaluate small-model + long-CoT vs large-model API cost tradeoffs.",
      "impact_score": 91,
      "golden_section": "research",
      "section_label": "Research Radar",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2409.12931v1/x1.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468365+00:00",
      "created_at": "2026-06-08T02:00:41.468365+00:00",
      "tags": [
        "#TestTimeCompute",
        "#ScalingLaw",
        "#CoT"
      ],
      "target_audience": [
        "Gov / Regulators"
      ],
      "audience_segments": [
        "government"
      ]
    },
    {
      "id": "620f3e29-f3e4-5301-a7dd-daca2a611a72",
      "title": "OpenAI Responses API: Agent Building Shifts from Prompt to Workflow Engineering",
      "summary": "OpenAI's engineering blog launches Responses API — native multi-turn tool calls, file retrieval, structured outputs. Successor to Assistants API.",
      "why_it_matters": "Delta: developers move from prompt craft to agent workflow design; built-in retrieval + code interpreter compresses MVP cycles from 2 weeks to 2 days.",
      "actionable_insight": "Founders: ship a demo-ready agent MVP in 48 hours. Students: build a Tool Use + RAG mini-project for your portfolio.",
      "impact_score": 89,
      "golden_section": "application",
      "section_label": "Application Cases",
      "original_url": "https://openai.com/index/new-tools-for-building-agents/",
      "image_url": "https://cdn.openai.com/chatgpt/share-og.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468408+00:00",
      "created_at": "2026-06-08T02:00:41.468408+00:00",
      "tags": [
        "#OpenAI",
        "#ResponsesAPI",
        "#Agent"
      ],
      "target_audience": [
        "Students"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "7065b2a4-b1cc-5be3-8505-bf0e7d5b5950",
      "title": "Berkeley BAIR: Embodied Agents Move from Simulation to Real Robots",
      "summary": "BAIR releases a cross-modal agent stack bridging LLM planning with MuJoCo/Isaac sim — Sim-to-Real success up 40%.",
      "why_it_matters": "Delta: agents extend from text Tool Use to physical state machines; GRPO-style RL yields 3× sample efficiency in robot policy fine-tuning.",
      "actionable_insight": "Researchers: reproduce BAIR open agent baselines. Founders: assess MVP windows for warehouse/inspection embodied agents.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "Research Radar",
      "original_url": "https://bair.berkeley.edu/blog/",
      "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468396+00:00",
      "created_at": "2026-06-08T02:00:41.468396+00:00",
      "tags": [
        "#Berkeley",
        "#EmbodiedAI",
        "#Agent"
      ],
      "target_audience": [
        "Researchers",
        "Founders"
      ],
      "audience_segments": [
        "researcher",
        "founder"
      ]
    },
    {
      "id": "ff35eee0-f517-5389-a5ba-34b13146ece4",
      "title": "ICLR 2025 Results: Test-Time Compute Dominates Best Papers",
      "summary": "Outstanding papers center on Test-Time Compute Scaling — inference compute equals 10× parameter expansion.",
      "why_it_matters": "Delta: small model + long CoT at inference beats 10× larger models. o1 validates this paradigm in production.",
      "actionable_insight": "Researchers: reproduce Outstanding Paper baselines. Students: study OpenReview public critiques for top-tier experiment design.",
      "impact_score": 90,
      "golden_section": "competition",
      "section_label": "Competitions",
      "original_url": "https://iclr.cc/",
      "image_url": "https://arxiv.org/html/2408.03314v1/x4.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468384+00:00",
      "created_at": "2026-06-08T02:00:41.468384+00:00",
      "tags": [
        "#ICLR2025",
        "#TestTimeCompute",
        "#TopVenue"
      ],
      "target_audience": [
        "Researchers"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "dd17e3e5-36d2-520c-af48-6ba1107752e9",
      "title": "EU AI Act in Force: High-Risk Compliance Checklists and ROI Impact",
      "summary": "The EU AI Act enters enforcement — high-risk systems require conformity assessment; generative AI must meet transparency and copyright rules.",
      "why_it_matters": "Delta: geopolitical compliance shifts from guidance to binding obligation; cross-border SaaS must appoint EU reps and document QMS by 2026 Q4.",
      "actionable_insight": "Regulators: build national high-risk AI catalogs per Annex III. Founders: model EU market entry costs with AI Act compliance ROI frameworks.",
      "impact_score": 90,
      "golden_section": "work",
      "section_label": "Work Impact",
      "original_url": "https://artificialintelligenceact.eu/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468427+00:00",
      "created_at": "2026-06-08T02:00:41.468427+00:00",
      "tags": [
        "#EUAIAct",
        "#Compliance",
        "#Geopolitics"
      ],
      "target_audience": [
        "Job Seekers",
        "Gov / Regulators"
      ],
      "audience_segments": [
        "job_seeker",
        "government"
      ]
    },
    {
      "id": "5619b903-9fa5-5b52-8c9d-68232c900d63",
      "title": "a16z AI Market Map 2025: Agent Infrastructure Claims 40% of the Landscape",
      "summary": "Andreessen Horowitz updates its AI industry map — agent orchestration, inference optimization, and evals infra total 40%.",
      "why_it_matters": "Delta: Gartner-style 'trough of disillusionment' hasn't arrived — the agent layer sees pre-bubble capital intensity; ROI proof window is 12–18 months.",
      "actionable_insight": "Investors: build coverage matrices across model/infra/agent/app layers. Founders: seek open + commercial dual-track moats in agent infra.",
      "impact_score": 88,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://a16z.com/ai-market-map/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468423+00:00",
      "created_at": "2026-06-08T02:00:41.468423+00:00",
      "tags": [
        "#a16z",
        "#MarketMap",
        "#AgentInfra"
      ],
      "target_audience": [
        "Investors"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "022280b3-4780-5e49-b8fe-348d1c2aaf02",
      "title": "Mamba: Linear-Complexity Sequence Modeling Challenges Transformers",
      "summary": "Mamba's selective SSM delivers O(n) inference — 5× faster than Transformers on long sequences.",
      "why_it_matters": "Delta: linear scaling to 1M-token context. Matches GPT-3 quality on DNA/audio tasks at 1/4 the parameters.",
      "actionable_insight": "Researchers: reproduce arXiv:2312.11805 and benchmark Mamba vs Transformer latency. Students: SSM vs Attention is a top 2025 systems interview topic.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "Research Radar",
      "original_url": "https://arxiv.org/abs/2312.11805",
      "image_url": "https://arxiv.org/html/2408.03314v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468361+00:00",
      "created_at": "2026-06-08T02:00:41.468361+00:00",
      "tags": [
        "#Mamba",
        "#SSM",
        "#EfficientInference"
      ],
      "target_audience": [
        "Researchers"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "64b9bb4d-aa0f-5cab-8ead-f4444988119e",
      "title": "Anthropic Safety Constitution: How Constitutional AI Reshapes Alignment Baselines",
      "summary": "Anthropic updates Core Views on AI Safety — Constitutional AI principles embedded in model cards and API policies.",
      "why_it_matters": "Delta: alignment moves beyond single-objective RLHF to constitutional multi-constraint frameworks; gov and enterprise RFPs now demand model cards + red-team reports.",
      "actionable_insight": "Regulators: embed Constitutional AI disclosures in public procurement templates. Media: distinguish alignment engineering from marketing language.",
      "impact_score": 86,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://www.anthropic.com/news/core-views-on-ai-safety",
      "image_url": "https://arxiv.org/html/2409.12931v1/x3.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468412+00:00",
      "created_at": "2026-06-08T02:00:41.468412+00:00",
      "tags": [
        "#Anthropic",
        "#AISafety",
        "#ConstitutionalAI"
      ],
      "target_audience": [
        "Gov / Regulators",
        "Media / Public"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "fbaba309-9651-5cb5-aac6-b83c3c89091d",
      "title": "NVIDIA NIM: Inference Microservices Cut LLM Deployment TCO by 40%",
      "summary": "NVIDIA's Technical Blog launches NIM — pre-optimized TensorRT-LLM engines with containerized SLAs. Production endpoints in ~5 minutes.",
      "why_it_matters": "Delta: shift from 'buying GPUs' to 'buying inference SLAs'; token cost reduction extends beyond INT4/FP8 into precompiled engines + batch scheduling.",
      "actionable_insight": "Job seekers: add NIM + vLLM dual-stack skills to your resume. Founders: target inference ≤12% of ARR using NIM.",
      "impact_score": 85,
      "golden_section": "application",
      "section_label": "Application Cases",
      "original_url": "https://developer.nvidia.com/blog/nvidia-nim-offers-optimized-inference-microservices-for-ai-models/",
      "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468404+00:00",
      "created_at": "2026-06-08T02:00:41.468404+00:00",
      "tags": [
        "#NVIDIA",
        "#NIM",
        "#TokenCost"
      ],
      "target_audience": [
        "Job Seekers"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "3b3c82a9-e3fa-5663-879d-c3925ebb0f44",
      "title": "Vercel AI SDK 3.0: Generative UI Brings Agents from CLI to Browser",
      "summary": "Vercel's dev blog launches AI SDK 3.0 — streaming UI components + edge inference enable one-click agent deploys on Vercel/Supabase.",
      "why_it_matters": "Delta: frontends evolve from chat boxes to Generative UI — agents render React components directly; token savings via edge cache + streaming truncation.",
      "actionable_insight": "Founders: launch a SaaS agent on AI SDK + Supabase in 24 hours. Job seekers: Generative UI experience is a 2025 full-stack AI differentiator.",
      "impact_score": 84,
      "golden_section": "application",
      "section_label": "Application Cases",
      "original_url": "https://vercel.com/blog/ai-sdk-3-generative-ui",
      "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468416+00:00",
      "created_at": "2026-06-08T02:00:41.468416+00:00",
      "tags": [
        "#Vercel",
        "#AISDK",
        "#GenerativeUI"
      ],
      "target_audience": [
        "Founders",
        "Students"
      ],
      "audience_segments": [
        "founder",
        "student"
      ]
    },
    {
      "id": "2632d4c9-ff62-593a-af80-ab922cdd66f9",
      "title": "WIRED × MIT TR: The 2025 Agent Era Public-Comprehension Gap",
      "summary": "WIRED and MIT Technology Review observe: agent capability curves now lead public understanding by ~18 months — a dual capability-trust gap.",
      "why_it_matters": "Delta: media narratives shift from 'can ChatGPT chat?' to 'how much white-collar decision chains can agents replace?'; tech equity is a WEF 2025 core theme.",
      "actionable_insight": "Media: use 'capability demo + limitation disclosure' dual-column framing. Students/job seekers: build personal AI literacy portfolios for the agent era.",
      "impact_score": 83,
      "golden_section": "headline",
      "section_label": "Headlines",
      "original_url": "https://www.wired.com/tag/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468435+00:00",
      "created_at": "2026-06-08T02:00:41.468435+00:00",
      "tags": [
        "#WIRED",
        "#MITTechReview",
        "#AgentEra"
      ],
      "target_audience": [
        "Media / Public"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6ab6c04b-dccf-5c6d-a049-1d816d8eea13",
      "title": "Hugging Face Open R1: Community Replicates DeepSeek-R1 Open Source",
      "summary": "Open R1 reproduces the full GRPO pipeline with 100% open tooling — 7B reasoning model in 48h on 8×H100.",
      "why_it_matters": "Delta: reasoning moves from black-box API to reproducible engineering. Anyone can fork and fine-tune for vertical domains.",
      "actionable_insight": "Students: fork huggingface/open-r1 and run SFT on Colab. Founders: train domain-specific models, cut API costs 80%.",
      "impact_score": 87,
      "golden_section": "application",
      "section_label": "Application Cases",
      "original_url": "https://huggingface.co/blog/open-r1",
      "image_url": "https://raw.githubusercontent.com/huggingface/open-r1/main/assets/plan-of-attack.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468373+00:00",
      "created_at": "2026-06-08T02:00:41.468373+00:00",
      "tags": [
        "#HuggingFace",
        "#OpenR1",
        "#OpenSource"
      ],
      "target_audience": [
        "Media / Public"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6d56cfdf-f83d-5090-a0a6-9bcf0bb4f6d4",
      "title": "NIST AI RMF 1.0: The U.S. Federal Reference for Global AI Risk Management",
      "summary": "NIST releases AI Risk Management Framework 1.0 — Map-Measure-Manage-Govern becomes the de facto enterprise AI governance standard.",
      "why_it_matters": "Delta: AI safety moves from post-hoc audit to 'compliance by design'; with EU AI Act forms a transatlantic dual-track shaping global procurement.",
      "actionable_insight": "Regulators: embed NIST RMF in public procurement and critical-infra AI reviews. Investors: require RMF maturity scores in due diligence.",
      "impact_score": 87,
      "golden_section": "work",
      "section_label": "Work Impact",
      "original_url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "image_url": "https://arxiv.org/html/2305.18290v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468431+00:00",
      "created_at": "2026-06-08T02:00:41.468431+00:00",
      "tags": [
        "#NIST",
        "#AIRMF",
        "#RiskManagement"
      ],
      "target_audience": [
        "Gov / Regulators",
        "Investors"
      ],
      "audience_segments": [
        "government",
        "investor"
      ]
    },
    {
      "id": "42a5831a-7035-500c-a90a-b5484b979ae5",
      "title": "arXiv Spotlight: Multi-Agent Scaling Laws Reveal a Collaboration Inflection",
      "summary": "New arXiv work shows 4–8 agent teams yield super-linear accuracy gains while token cost grows only linearly.",
      "why_it_matters": "Delta: Test-Time Compute extends to multi-agent settings; LangGraph/CrewAI orchestration complexity becomes the new bottleneck.",
      "actionable_insight": "Researchers: track OpenReview agent-scaling reproductions. Founders: replace single CoT chains with 4-agent orchestration to cut ~30% token waste.",
      "impact_score": 87,
      "golden_section": "research",
      "section_label": "Research Radar",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2408.03314v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468400+00:00",
      "created_at": "2026-06-08T02:00:41.468400+00:00",
      "tags": [
        "#arXiv",
        "#MultiAgent",
        "#ScalingLaw"
      ],
      "target_audience": [
        "Founders"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "490445b8-6847-5aa2-b146-269b4b9d392a",
      "title": "NeurIPS 2024: MoE + RLHF Fusion Captures 30% of Spotlights",
      "summary": "Mixture-of-Experts + RLHF fusion accounts for 30% of Spotlight papers — 5× efficiency gains.",
      "why_it_matters": "Delta: MoE evolves from topic routing to reasoning-type routing. DeepSeek-V3 671B proves 'expert teams on demand'.",
      "actionable_insight": "Researchers: compare Switch Transformer vs DeepSeek-MoE routing. Founders: vLLM MoE support cuts deployment costs 60%.",
      "impact_score": 86,
      "golden_section": "competition",
      "section_label": "Competitions",
      "original_url": "https://neurips.cc/Conferences/2024",
      "image_url": "https://arxiv.org/html/2412.19437v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468388+00:00",
      "created_at": "2026-06-08T02:00:41.468388+00:00",
      "tags": [
        "#NeurIPS2024",
        "#MoE",
        "#RLHF"
      ],
      "target_audience": [
        "Investors"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "3b7274db-6092-59ae-ba12-064e88623ba6",
      "title": "MIT Tech Review: AI Reshapes 40% of White-Collar Workflows",
      "summary": "LLM Agents now penetrate 40% of knowledge work — docs, code review, analytics — up from 12% penetration.",
      "why_it_matters": "Delta: shift from personal productivity to team workflow redesign. Prompt Engineering and Agent Orchestration are baseline skills.",
      "actionable_insight": "Job seekers: ship a LangGraph Multi-Agent demo on GitHub. Students: AI systems courses vs pure ML theory — 35% employability gap.",
      "impact_score": 82,
      "golden_section": "work",
      "section_label": "Work Impact",
      "original_url": "https://www.technologyreview.com/topic/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468377+00:00",
      "created_at": "2026-06-08T02:00:41.468377+00:00",
      "tags": [
        "#AIJobs",
        "#Workflow",
        "#Agent"
      ],
      "target_audience": [
        "Job Seekers"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "fe9d3314-8b86-5b2a-a2ef-bb01d9020e0c",
      "title": "NVIDIA Report: Enterprise Inference Demand to 10× in 3 Years",
      "summary": "Enterprise LLM inference compute grows 10× from 2024–2027 — Agent multi-turn loops are the primary driver.",
      "why_it_matters": "Delta: Agent loops multiply token consumption ×100. H200 + TensorRT-LLM cuts unit cost 3×, but total spend still grows 5×.",
      "actionable_insight": "Founders: cap inference at 15% ARR via vLLM + quantization. Job seekers: learn TensorRT-LLM and INT4/FP8 quantization.",
      "impact_score": 79,
      "golden_section": "work",
      "section_label": "Work Impact",
      "original_url": "https://blogs.nvidia.com/blog/what-is-generative-ai/",
      "image_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468381+00:00",
      "created_at": "2026-06-08T02:00:41.468381+00:00",
      "tags": [
        "#NVIDIA",
        "#Inference",
        "#CostOptimization"
      ],
      "target_audience": [
        "Investors"
      ],
      "audience_segments": [
        "investor"
      ]
    }
  ],
  "ja": [
    {
      "id": "eb9b9a44-3d24-515a-a536-b62b21f3a796",
      "title": "OpenAI o1：AIが科学者のように段階的推論を開始",
      "summary": "o1がMATH・Codeforcesで博士レベルを初超越。AIは「即答型」から「深層推論型」へ進化。",
      "why_it_matters": "Delta：RL駆動のChain-of-Thought推論チェーンを導入。AIME正解率13%→83%、Codeforcesで人間89パーセンタイル到達。",
      "actionable_insight": "起業家：複雑意思決定シーンへのo1 API統合を優先。研究者：RL推論蒸留の小モデル移行パスを精読。",
      "impact_score": 96,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://openai.com/index/learning-to-reason-with-llms/",
      "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468495+00:00",
      "created_at": "2026-06-08T02:00:41.468495+00:00",
      "tags": [
        "#大規模モデル",
        "#推論",
        "#OpenAI"
      ],
      "target_audience": [
        "研究者"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "ba5d534c-3d0d-5961-8c26-084492155ec7",
      "title": "Sequoia「AI Act Two」：モデル軍拡競争からアプリROI兑现期へ",
      "summary": "セコイアキャピタルがAI Act Twoを発表。2025以降の投資焦点はFoundation Modelから「測定可能ROIのAgentワークフロー」へ。",
      "why_it_matters": "Delta：VCデューデリジェンスにユニットエコノミクス追加——推論Tokenコスト/顧客LTV比<0.15。地政学合规がDD必須項目。",
      "actionable_insight": "投資家：Agent ROI計算機でパイプライン選別。起業家：Token降本ロードマップ＋EU AI ActチェックリストをSeries Aデータルームに。",
      "impact_score": 91,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://www.sequoiacap.com/article/ai-act-two/",
      "image_url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468566+00:00",
      "created_at": "2026-06-08T02:00:41.468566+00:00",
      "tags": [
        "#Sequoia",
        "#AIActTwo",
        "#ROI"
      ],
      "target_audience": [
        "投資家",
        "起業家"
      ],
      "audience_segments": [
        "investor",
        "founder"
      ]
    },
    {
      "id": "9084209b-5dd6-5a94-b9ca-3ffac67f2496",
      "title": "DeepSeek-R1：600万ドルでo1級推論能力を再現",
      "summary": "純粋GRPO強化学習（SFTゼロ）でo1に匹敵する推論モデルを600万ドルで訓練。",
      "why_it_matters": "Delta：AIME 2024で79.8%（o1は83%）。コストはOpenAI推定の1/10。MITライセンス公開で「手動CoT必須」の常識を覆す。",
      "actionable_insight": "学生：DeepSeek-R1-Distill-Qwen-7BをローカルでGSM8K実行。研究者：GRPO vs PPO vs DPOの収束速度を比較。",
      "impact_score": 94,
      "golden_section": "research",
      "section_label": "研究レーダー",
      "original_url": "https://arxiv.org/abs/2501.12948",
      "image_url": "https://arxiv.org/html/2501.12948v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468507+00:00",
      "created_at": "2026-06-08T02:00:41.468507+00:00",
      "tags": [
        "#オープンソース",
        "#GRPO",
        "#DeepSeek"
      ],
      "target_audience": [
        "学生"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "ea77c58c-636c-5f5f-9a65-c2b0da803533",
      "title": "Claude 3.5 Sonnet：コーディング性能がGPT-4oを凌駕",
      "summary": "SWE-benchで49%通過率（GPT-4oは38%）。現時点最強のコードモデル。",
      "why_it_matters": "Delta：HumanEval 92%精度。ArtifactsでReactコンポーネントをリアルタイム描画。200Kコンテキストで幻覚率約30%低減。",
      "actionable_insight": "求職者：Claude API統合経験を履歴書に明記。起業家：Artifactsで1日以内にインタラクティブDemoを作成。",
      "impact_score": 93,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://www.anthropic.com/news/claude-3-5-sonnet",
      "image_url": "https://cdn.sanity.io/images/4zrzovbb/website/cf2c754458e9102b7334731fb18a965bfeb7ad08-2200x1894.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468500+00:00",
      "created_at": "2026-06-08T02:00:41.468500+00:00",
      "tags": [
        "#Claude",
        "#コードモデル",
        "#Anthropic"
      ],
      "target_audience": [
        "求職者",
        "メディア/一般"
      ],
      "audience_segments": [
        "job_seeker",
        "media"
      ]
    },
    {
      "id": "5ea24778-b8e8-5235-a568-ff76b1bb3450",
      "title": "Stanford HAI AI Index 2024：世界のAI投資が1000億ドル突破",
      "summary": "スタンフォードHAI年次報告書が訓練算力・特許・私人投資の急増を示す。推論段階でオープンとクローズドの差が縮小。",
      "why_it_matters": "Delta：AI IndexがTest-Time Computeと地政学算力分布を初採用。米国の私人AI投資は中国の約12倍だが、オープンモデルDLは中国が先行。",
      "actionable_insight": "研究者：AI Indexの跨国ベンチを教材に引用。学生：第2章算力トレンドでFLOPsとTCOの違いを学ぶ。",
      "impact_score": 92,
      "golden_section": "research",
      "section_label": "研究レーダー",
      "original_url": "https://hai.stanford.edu/ai-index/2024-ai-index-report",
      "image_url": "https://arxiv.org/html/2405.01223v2/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468541+00:00",
      "created_at": "2026-06-08T02:00:41.468541+00:00",
      "tags": [
        "#StanfordHAI",
        "#AIIndex",
        "#算力"
      ],
      "target_audience": [
        "政府/規制",
        "メディア/一般"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "7f613295-5159-5e54-9d1a-2b483fd775b4",
      "title": "Google Gemini 2.0：ネイティブマルチモーダルAgent本格稼働",
      "summary": "Gemini 2.0 FlashがネイティブTool Useとリアルタイムマルチモーダル対話に対応。レイテンシ200ms未満。",
      "why_it_matters": "Delta：テキストLLM＋外部ツールからネイティブAgentアーキテクチャへ。Google Search/Maps/Code Execution内蔵。マルチモーダルトークンコスト50%削減。",
      "actionable_insight": "起業家：検索→推論→行動のAgentループを構築。学生：Google AI Studio無料枠でマルチモーダルDemoを試作。",
      "impact_score": 90,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://blog.google/technology/ai/google-gemini-ai/",
      "image_url": "https://arxiv.org/html/2403.05530v2/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468504+00:00",
      "created_at": "2026-06-08T02:00:41.468504+00:00",
      "tags": [
        "#Gemini",
        "#マルチモーダル",
        "#Agent"
      ],
      "target_audience": [
        "学生"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "5b2185b5-0803-5e8a-9fda-d73340d0906b",
      "title": "Cursor Agent：コード補完から自律プログラマーへ",
      "summary": "Cursor Agentが自律的に計画・コーディング・ターミナル実行・バグ修正。CRUD APIの人的介入50回超→3回。",
      "why_it_matters": "Delta：目標→タスク分解→コード→テスト→反復の完全ループ。SWE-bench Verified 49.2%。",
      "actionable_insight": "起業家：2時間でMVP構築。求職者：READMEに「AI-Native · Cursor Agent」を明記。",
      "impact_score": 91,
      "golden_section": "application",
      "section_label": "応用事例",
      "original_url": "https://cursor.com/changelog",
      "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468520+00:00",
      "created_at": "2026-06-08T02:00:41.468520+00:00",
      "tags": [
        "#Cursor",
        "#AIプログラミング",
        "#Agent"
      ],
      "target_audience": [
        "起業家"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "5905d0e8-3c11-58e5-b692-9ad1b75fd8a2",
      "title": "Test-Time Compute Scaling：推論時計算量が第三のスケーリング則",
      "summary": "ICLR 2025パラダイム：推論時の計算追加で実効10倍パラメータ。小モデル＋長CoTが大モデルを凌駕。",
      "why_it_matters": "Delta：スケーリング則が訓練から推論へ拡張。o1の成功はTTC scalingの工程実証。",
      "actionable_insight": "研究者：ベンチマークでTTC scaling曲線を描画。起業家：小モデル＋長推論チェーンのコスト優位性を評価。",
      "impact_score": 91,
      "golden_section": "research",
      "section_label": "研究レーダー",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2409.12931v1/x1.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468516+00:00",
      "created_at": "2026-06-08T02:00:41.468516+00:00",
      "tags": [
        "#TestTimeCompute",
        "#スケーリング則",
        "#CoT"
      ],
      "target_audience": [
        "政府/規制"
      ],
      "audience_segments": [
        "government"
      ]
    },
    {
      "id": "620f3e29-f3e4-5301-a7dd-daca2a611a72",
      "title": "OpenAI Responses API：Agent構築がPromptからWorkflow工学へ",
      "summary": "OpenAI公式エンジニアリングブログがResponses APIを公開。マルチターンTool Call、ファイル検索、構造化出力をネイティブサポート。",
      "why_it_matters": "Delta：開発者はPrompt職人からAgent Workflow設計者へ。内蔵Retrieval＋Code InterpreterでMVP構築が2週間→2日。",
      "actionable_insight": "起業家：48時間でResponses APIデモAgentを完成。学生：Tool Use＋RAG最小プロジェクトをポートフォリオに。",
      "impact_score": 89,
      "golden_section": "application",
      "section_label": "応用事例",
      "original_url": "https://openai.com/index/new-tools-for-building-agents/",
      "image_url": "https://cdn.openai.com/chatgpt/share-og.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468555+00:00",
      "created_at": "2026-06-08T02:00:41.468555+00:00",
      "tags": [
        "#OpenAI",
        "#ResponsesAPI",
        "#Agent"
      ],
      "target_audience": [
        "学生"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "7065b2a4-b1cc-5be3-8505-bf0e7d5b5950",
      "title": "Berkeley BAIR：Embodied Agentがシミュレーションから実機へ",
      "summary": "BAIRがLLM計画層とMuJoCo/Isaacシムを橋渡しするマルチモーダルAgentスタックを公開。Sim-to-Real成功率40%向上。",
      "why_it_matters": "Delta：AgentがテキストTool Useから物理世界ステートマシンへ拡張。GRPO型RLでロボット方策微調整のサンプル効率3倍。",
      "actionable_insight": "研究者：BAIRオープンAgentベースラインを再現。起業家：倉庫・点検向けEmbodied Agent MVP窗口を評価。",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "研究レーダー",
      "original_url": "https://bair.berkeley.edu/blog/",
      "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468545+00:00",
      "created_at": "2026-06-08T02:00:41.468545+00:00",
      "tags": [
        "#Berkeley",
        "#EmbodiedAI",
        "#Agent"
      ],
      "target_audience": [
        "研究者",
        "起業家"
      ],
      "audience_segments": [
        "researcher",
        "founder"
      ]
    },
    {
      "id": "ff35eee0-f517-5389-a5ba-34b13146ece4",
      "title": "ICLR 2025結果：Test-Time Computeが最大の勝者",
      "summary": "最優秀論文はTest-Time Compute Scalingが中心——推論時計算追加で実効10倍パラメータ。",
      "why_it_matters": "Delta：推論時の小モデル＋長CoTが10倍大モデルを凌駕。o1がこのパラダイムの工程実証。",
      "actionable_insight": "研究者：Outstanding Paperベースラインを再現。学生：OpenReview公開レビューで実験設計を学ぶ。",
      "impact_score": 90,
      "golden_section": "competition",
      "section_label": "コンペ・ランキング",
      "original_url": "https://iclr.cc/",
      "image_url": "https://arxiv.org/html/2408.03314v1/x4.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468534+00:00",
      "created_at": "2026-06-08T02:00:41.468534+00:00",
      "tags": [
        "#ICLR2025",
        "#TestTimeCompute",
        "#トップ会議"
      ],
      "target_audience": [
        "研究者"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "dd17e3e5-36d2-520c-af48-6ba1107752e9",
      "title": "EU AI Act発効：高リスクAIシステム合规チェックリストとROI影響",
      "summary": "EU AI法案が実施段階へ。高リスクシステムは適合性評価が必要。Generative AIは透明性と著作権合规の両立が必須。",
      "why_it_matters": "Delta：地政学合规が「勧告的枠組み」から「強制義務」へ。越境SaaSは2026 Q4までにEU代表任命とQMS文書化が必要。",
      "actionable_insight": "規制当局：Annex III参照で国内高リスクAI目録を構築。起業家：AI Act合规ROIモデルで欧州市場参入コストを評価。",
      "impact_score": 90,
      "golden_section": "work",
      "section_label": "ワーク影響",
      "original_url": "https://artificialintelligenceact.eu/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468573+00:00",
      "created_at": "2026-06-08T02:00:41.468573+00:00",
      "tags": [
        "#EUAIAct",
        "#合规",
        "#地政学"
      ],
      "target_audience": [
        "求職者",
        "政府/規制"
      ],
      "audience_segments": [
        "job_seeker",
        "government"
      ]
    },
    {
      "id": "5619b903-9fa5-5b52-8c9d-68232c900d63",
      "title": "a16z AI Market Map 2025：Agentインフラが版图の40%を占拠",
      "summary": "a16zがAI産業白書を更新。Agentオーケストレーション、推論最適化、Evalsインフラが合計40%。",
      "why_it_matters": "Delta：Gartner式「幻滅の谷」は未到来——Agent層にバブル前夜の資本集中。ROI実証窗口は12〜18ヶ月。",
      "actionable_insight": "投資家：モデル/infra/agent/app四层でカバレッジマトリクス構築。起業家：Agent Infra層でオープン＋商用デュアルモートを探せ。",
      "impact_score": 88,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://a16z.com/ai-market-map/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468569+00:00",
      "created_at": "2026-06-08T02:00:41.468569+00:00",
      "tags": [
        "#a16z",
        "#MarketMap",
        "#AgentInfra"
      ],
      "target_audience": [
        "投資家"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "022280b3-4780-5e49-b8fe-348d1c2aaf02",
      "title": "Mamba：線形複雑度シーケンスモデルがTransformerに挑戦",
      "summary": "選択的SSMでO(n)線形推論を実現。長シーケンスでTransformer比5倍高速。",
      "why_it_matters": "Delta：100万トークンでも線形スケール。DNA・音声タスクでGPT-3級性能を1/4パラメータで達成。",
      "actionable_insight": "研究者：arXiv:2312.11805を再現しMamba vs Transformerのレイテンシ比較。学生：SSM vs Attentionは2025面接頻出テーマ。",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "研究レーダー",
      "original_url": "https://arxiv.org/abs/2312.11805",
      "image_url": "https://arxiv.org/html/2408.03314v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468512+00:00",
      "created_at": "2026-06-08T02:00:41.468512+00:00",
      "tags": [
        "#Mamba",
        "#SSM",
        "#効率推論"
      ],
      "target_audience": [
        "研究者"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "64b9bb4d-aa0f-5cab-8ead-f4444988119e",
      "title": "Anthropic安全憲法：Constitutional AIがアライメント基準を再定義",
      "summary": "AnthropicがCore Views on AI Safetyを更新。Constitutional AI原則をモデルカードとAPIポリシーに組み込む。",
      "why_it_matters": "Delta：RLHF単一アライメントから「憲法型」多目的制約へ。政府・企業調達でモデルカード＋レッドチーム報告がRFP標準に。",
      "actionable_insight": "規制当局：政府調達テンプレートにConstitutional AI開示を組み込む。メディア：アライメント技術とマーケの区別を報道。",
      "impact_score": 86,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://www.anthropic.com/news/core-views-on-ai-safety",
      "image_url": "https://arxiv.org/html/2409.12931v1/x3.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468559+00:00",
      "created_at": "2026-06-08T02:00:41.468559+00:00",
      "tags": [
        "#Anthropic",
        "#AI安全",
        "#ConstitutionalAI"
      ],
      "target_audience": [
        "政府/規制",
        "メディア/一般"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "fbaba309-9651-5cb5-aac6-b83c3c89091d",
      "title": "NVIDIA NIM：推論マイクロサービス化でLLM TCOをさらに40%削減",
      "summary": "NVIDIA Technical BlogがNIM推論マイクロサービスを公開。TensorRT-LLM最適化エンジン＋コンテナSLAで5分以内に本番エンドポイント。",
      "why_it_matters": "Delta：「GPU購入」から「推論SLA購入」へ。Token降本はINT4/FP8に加え事前コンパイルエンジン＋バッチスケジューリングへ。",
      "actionable_insight": "求職者：NIM＋vLLMデュアルスタックを履歴書に。起業家：NIMで推論コストをARRの12%以内に。",
      "impact_score": 85,
      "golden_section": "application",
      "section_label": "応用事例",
      "original_url": "https://developer.nvidia.com/blog/nvidia-nim-offers-optimized-inference-microservices-for-ai-models/",
      "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468552+00:00",
      "created_at": "2026-06-08T02:00:41.468552+00:00",
      "tags": [
        "#NVIDIA",
        "#NIM",
        "#Tokenコスト"
      ],
      "target_audience": [
        "求職者"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "3b3c82a9-e3fa-5663-879d-c3925ebb0f44",
      "title": "Vercel AI SDK 3.0：Generative UIがAgentをCLIからブラウザへ",
      "summary": "Vercel開発者ブログがAI SDK 3.0を公開。Streaming UI＋Edge推論でVercel/SupabaseにワンクリックAgentデプロイ。",
      "why_it_matters": "Delta：フロントエンドがチャット框からGenerative UIへ。AgentがReactコンポーネントを直接描画。Edgeキャッシュ＋ストリーミング截断でToken降本。",
      "actionable_insight": "起業家：AI SDK＋Supabaseで24時間以内にSaaS Agentを公開。求職者：Generative UI経験は2025年フルスタックAI差別化要因。",
      "impact_score": 84,
      "golden_section": "application",
      "section_label": "応用事例",
      "original_url": "https://vercel.com/blog/ai-sdk-3-generative-ui",
      "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468562+00:00",
      "created_at": "2026-06-08T02:00:41.468562+00:00",
      "tags": [
        "#Vercel",
        "#AISDK",
        "#GenerativeUI"
      ],
      "target_audience": [
        "起業家",
        "学生"
      ],
      "audience_segments": [
        "founder",
        "student"
      ]
    },
    {
      "id": "2632d4c9-ff62-593a-af80-ab922cdd66f9",
      "title": "WIRED × MIT TR：2025 Agent元年の大衆認知ギャップと伝播戦略",
      "summary": "WIREDとMIT Technology Reviewが指摘：Agent技術能力曲線が公众理解を約18ヶ月リード——能力-信頼の二重ギャップ。",
      "why_it_matters": "Delta：メディア叙事が「ChatGPTは話せるか」から「Agentはどれだけホワイトカラー意思決定链を代替できるか」へ。技術平権がWEF2025核心議題。",
      "actionable_insight": "メディア：「能力デモ＋限界開示」双栏構成でhype回避。学生/求職者：Agent時代のAIリテラシーポートフォリオを構築。",
      "impact_score": 83,
      "golden_section": "headline",
      "section_label": "ヘッドライン",
      "original_url": "https://www.wired.com/tag/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468580+00:00",
      "created_at": "2026-06-08T02:00:41.468580+00:00",
      "tags": [
        "#WIRED",
        "#MITTechReview",
        "#Agent元年"
      ],
      "target_audience": [
        "メディア/一般"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6ab6c04b-dccf-5c6d-a049-1d816d8eea13",
      "title": "Hugging Face Open R1：DeepSeek-R1再現の完全オープンソース計画",
      "summary": "100%オープンツールチェーンでGRPO訓練を再現。8×H100で48時間、7B推論モデルを訓練。",
      "why_it_matters": "Delta：推論能力が「ブラックボックスAPI」から「再現可能なエンジニアリング」へ。誰でもForkして垂直領域モデルを構築可能。",
      "actionable_insight": "学生：huggingface/open-r1をForkしColabでSFT Demo実行。起業家：法律/医療向けモデルでAPIコスト80%削減。",
      "impact_score": 87,
      "golden_section": "application",
      "section_label": "応用事例",
      "original_url": "https://huggingface.co/blog/open-r1",
      "image_url": "https://raw.githubusercontent.com/huggingface/open-r1/main/assets/plan-of-attack.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468523+00:00",
      "created_at": "2026-06-08T02:00:41.468523+00:00",
      "tags": [
        "#HuggingFace",
        "#OpenR1",
        "#オープンソース"
      ],
      "target_audience": [
        "メディア/一般"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6d56cfdf-f83d-5090-a0a6-9bcf0bb4f6d4",
      "title": "NIST AI RMF 1.0：米国連邦AI安全リスク管理の世界参照系",
      "summary": "NISTがAI Risk Management Framework 1.0正式版を公開。Map-Measure-Manage-Govern四段階が企業AIガバナンスの事実上標準に。",
      "why_it_matters": "Delta：AI安全が「事後監査」から「設計即合规」へ。EU AI Actと跨大西洋デュアルトラックを形成し世界調達基準に影響。",
      "actionable_insight": "規制当局：NIST RMFを政府調達と重要インフラAI審査に組み込む。投資家：DDでRMF成熟度スコア提出を要求。",
      "impact_score": 87,
      "golden_section": "work",
      "section_label": "ワーク影響",
      "original_url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "image_url": "https://arxiv.org/html/2305.18290v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468576+00:00",
      "created_at": "2026-06-08T02:00:41.468576+00:00",
      "tags": [
        "#NIST",
        "#AIRMF",
        "#リスク管理"
      ],
      "target_audience": [
        "政府/規制",
        "投資家"
      ],
      "audience_segments": [
        "government",
        "investor"
      ]
    },
    {
      "id": "42a5831a-7035-500c-a90a-b5484b979ae5",
      "title": "arXiv注目：Multi-Agent Scaling Lawが協調推論の拐点を示す",
      "summary": "最新arXiv論文が4〜8 Agent協調で推論精度が超線形に跳ね上がり、Tokenコストは線形増のみと示す。",
      "why_it_matters": "Delta：Test-Time ComputeがMulti-Agentへ拡張。LangGraph/CrewAIオーケストレーションが新ボトルネック。",
      "actionable_insight": "研究者：OpenReviewでAgent scaling再現を追跡。起業家：4-Agent編成で単一CoTを置換しToken浪費30%削減。",
      "impact_score": 87,
      "golden_section": "research",
      "section_label": "研究レーダー",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2408.03314v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468548+00:00",
      "created_at": "2026-06-08T02:00:41.468548+00:00",
      "tags": [
        "#arXiv",
        "#MultiAgent",
        "#ScalingLaw"
      ],
      "target_audience": [
        "起業家"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "490445b8-6847-5aa2-b146-269b4b9d392a",
      "title": "NeurIPS 2024：MoE＋RLHF融合がSpotlightの30%を占拠",
      "summary": "Mixture-of-ExpertsとRLHF融合がSpotlight論文の30%。効率5倍向上。",
      "why_it_matters": "Delta：MoEが「トピック別」から「推論タイプ別」ルーティングへ進化。DeepSeek-V3 671Bが「専門家チーム按需編成」を実証。",
      "actionable_insight": "研究者：Switch Transformer vs DeepSeek-MoEのルーティング比較。起業家：vLLM MoE対応でデプロイコスト60%削減。",
      "impact_score": 86,
      "golden_section": "competition",
      "section_label": "コンペ・ランキング",
      "original_url": "https://neurips.cc/Conferences/2024",
      "image_url": "https://arxiv.org/html/2412.19437v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468537+00:00",
      "created_at": "2026-06-08T02:00:41.468537+00:00",
      "tags": [
        "#NeurIPS2024",
        "#MoE",
        "#RLHF"
      ],
      "target_audience": [
        "投資家"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "3b7274db-6092-59ae-ba12-064e88623ba6",
      "title": "MIT Tech Review：AIがホワイトカラー業務の40%を再構築",
      "summary": "LLM Agentが文書作成・コードレビュー・データ分析など知識業務の40%に浸透。浸透率12%→40%。",
      "why_it_matters": "Delta：個人効率化からチームワークフロー再設計へ。Prompt EngineeringとAgent Orchestrationが基礎スキルに。",
      "actionable_insight": "求職者：LangGraphでMulti-Agent DemoをGitHub公開。学生：AIシステム科目 vs 純ML理論で就競争力35%差。",
      "impact_score": 82,
      "golden_section": "work",
      "section_label": "ワーク影響",
      "original_url": "https://www.technologyreview.com/topic/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468527+00:00",
      "created_at": "2026-06-08T02:00:41.468527+00:00",
      "tags": [
        "#AI雇用",
        "#ワークフロー",
        "#Agent"
      ],
      "target_audience": [
        "求職者"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "fe9d3314-8b86-5b2a-a2ef-bb01d9020e0c",
      "title": "NVIDIA報告：企業推論算力需要が3年で10倍に",
      "summary": "2024–2027年に企業LLM推論算力が10倍成長。Agentマルチターン呼び出しが最大要因。",
      "why_it_matters": "Delta：Agentループでトークン消費×100。H200＋TensorRT-LLMで単価3倍削減も、総コストは5倍増。",
      "actionable_insight": "起業家：vLLM＋量子化で推論コストをARRの15%以内に。求職者：TensorRT-LLMとINT4/FP8量子化を習得。",
      "impact_score": 79,
      "golden_section": "work",
      "section_label": "ワーク影響",
      "original_url": "https://blogs.nvidia.com/blog/what-is-generative-ai/",
      "image_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468530+00:00",
      "created_at": "2026-06-08T02:00:41.468530+00:00",
      "tags": [
        "#NVIDIA",
        "#推論算力",
        "#コスト最適化"
      ],
      "target_audience": [
        "投資家"
      ],
      "audience_segments": [
        "investor"
      ]
    }
  ],
  "es": [
    {
      "id": "eb9b9a44-3d24-515a-a536-b62b21f3a796",
      "title": "OpenAI o1: la IA empieza a razonar como un científico, paso a paso",
      "summary": "o1 supera el nivel doctoral en MATH y Codeforces: un salto de las respuestas instantáneas al razonamiento profundo.",
      "why_it_matters": "Delta: o1 emplea Chain-of-Thought impulsado por RL en lugar de la generación en un solo paso de GPT-4o. La precisión en AIME pasa del 13% al 83%; en Codeforces alcanza el percentil 89 humano.",
      "actionable_insight": "Emprendedores: audite flujos de decisión complejos y priorice la integración de la API de o1. Investigadores: estudien la ruta de destilación RL de OpenAI para transferir capacidades a modelos pequeños.",
      "impact_score": 96,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://openai.com/index/learning-to-reason-with-llms/",
      "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468637+00:00",
      "created_at": "2026-06-08T02:00:41.468637+00:00",
      "tags": [
        "#LLM",
        "#Razonamiento",
        "#OpenAI"
      ],
      "target_audience": [
        "Investigadores"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "ba5d534c-3d0d-5961-8c26-084492155ec7",
      "title": "Sequoia «AI Act Two»: de carrera armamentista a ROI de aplicaciones",
      "summary": "Sequoia Capital: foco post-2025 en workflows de agentes con ROI medible.",
      "why_it_matters": "Delta: coste token / LTV <0,15; compliance geopolítico obligatorio en DD.",
      "actionable_insight": "Inversores: calculadoras ROI de agentes. Emprendedores: roadmap Token降本 + EU AI Act.",
      "impact_score": 91,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://www.sequoiacap.com/article/ai-act-two/",
      "image_url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468709+00:00",
      "created_at": "2026-06-08T02:00:41.468709+00:00",
      "tags": [
        "#Sequoia",
        "#AIActTwo",
        "#ROI"
      ],
      "target_audience": [
        "Inversores",
        "Emprendedores"
      ],
      "audience_segments": [
        "investor",
        "founder"
      ]
    },
    {
      "id": "9084209b-5dd6-5a94-b9ca-3ffac67f2496",
      "title": "DeepSeek-R1: replicar razonamiento nivel o1 por 6 millones de dólares",
      "summary": "DeepSeek entrena un modelo de razonamiento clase o1 con GRPO puro (cero SFT) por solo 6 millones de dólares.",
      "why_it_matters": "Delta: 79,8% en AIME 2024 (o1: 83%) a ~1/10 del coste estimado de OpenAI. Pesos abiertos bajo licencia MIT rompen el consenso de que se requiere CoT manual.",
      "actionable_insight": "Estudiantes: ejecuten DeepSeek-R1-Distill-Qwen-7B localmente en GSM8K. Investigadores: comparen la convergencia de GRPO frente a PPO y DPO.",
      "impact_score": 94,
      "golden_section": "research",
      "section_label": "Radar de Investigación",
      "original_url": "https://arxiv.org/abs/2501.12948",
      "image_url": "https://arxiv.org/html/2501.12948v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468651+00:00",
      "created_at": "2026-06-08T02:00:41.468651+00:00",
      "tags": [
        "#CódigoAbierto",
        "#GRPO",
        "#DeepSeek"
      ],
      "target_audience": [
        "Estudiantes"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "ea77c58c-636c-5f5f-9a65-c2b0da803533",
      "title": "Claude 3.5 Sonnet: rendimiento en código que supera a GPT-4o",
      "summary": "Claude 3.5 Sonnet lidera SWE-bench con un 49% frente al 38% de GPT-4o — el modelo de código más potente del momento.",
      "why_it_matters": "Delta: 92% de precisión en HumanEval; Artifacts renderiza componentes React en vivo. Tasa de alucinación ~30% menor dentro de un contexto de 200K.",
      "actionable_insight": "Buscadores de empleo: destaquen la experiencia con la API de Claude en su currículum. Emprendedores: entreguen una demo interactiva con Artifacts a inversores en un solo día.",
      "impact_score": 93,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://www.anthropic.com/news/claude-3-5-sonnet",
      "image_url": "https://cdn.sanity.io/images/4zrzovbb/website/cf2c754458e9102b7334731fb18a965bfeb7ad08-2200x1894.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468642+00:00",
      "created_at": "2026-06-08T02:00:41.468642+00:00",
      "tags": [
        "#Claude",
        "#ModeloDeCódigo",
        "#Anthropic"
      ],
      "target_audience": [
        "Buscadores de empleo",
        "Medios / Público"
      ],
      "audience_segments": [
        "job_seeker",
        "media"
      ]
    },
    {
      "id": "5ea24778-b8e8-5235-a568-ff76b1bb3450",
      "title": "Stanford HAI AI Index 2024: la inversión global en IA supera los 100.000 M$",
      "summary": "El informe anual de Stanford HAI muestra un aumento en cómputo de entrenamiento, patentes e inversión privada.",
      "why_it_matters": "Delta: el AI Index incorpora Test-Time Compute y distribución geopolítica del cómputo. EE.UU. invierte ~12× más que China en IA privada.",
      "actionable_insight": "Investigadores: citen baselines del AI Index. Estudiantes: estudien tendencias de cómputo — FLOPs vs TCO.",
      "impact_score": 92,
      "golden_section": "research",
      "section_label": "Radar de Investigación",
      "original_url": "https://hai.stanford.edu/ai-index/2024-ai-index-report",
      "image_url": "https://arxiv.org/html/2405.01223v2/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468684+00:00",
      "created_at": "2026-06-08T02:00:41.468684+00:00",
      "tags": [
        "#StanfordHAI",
        "#AIIndex",
        "#Cómputo"
      ],
      "target_audience": [
        "Gobierno / Reguladores",
        "Medios / Público"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "7f613295-5159-5e54-9d1a-2b483fd775b4",
      "title": "Google Gemini 2.0: agentes multimodales nativos en producción",
      "summary": "Gemini 2.0 Flash incorpora Tool Use nativo e interacción multimodal en tiempo real con latencia inferior a 200 ms.",
      "why_it_matters": "Delta: evolución de LLM de texto + plugins a arquitectura Agent nativa con Search, Maps y Code Execution integrados. Coste de tokens multimodales reducido un 50%.",
      "actionable_insight": "Emprendedores: construyan bucles Agent de búsqueda-razonamiento-acción sobre Gemini 2.0. Estudiantes: prototipen demos multimodales con el nivel gratuito de Google AI Studio.",
      "impact_score": 90,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://blog.google/technology/ai/google-gemini-ai/",
      "image_url": "https://arxiv.org/html/2403.05530v2/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468646+00:00",
      "created_at": "2026-06-08T02:00:41.468646+00:00",
      "tags": [
        "#Gemini",
        "#Multimodal",
        "#Agent"
      ],
      "target_audience": [
        "Estudiantes"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "5b2185b5-0803-5e8a-9fda-d73340d0906b",
      "title": "Cursor Agent: del autocompletado de código al programador autónomo",
      "summary": "Cursor Agent planifica, codifica, ejecuta terminales y corrige bugs — las intervenciones humanas bajan de 50+ a 3 para una API CRUD.",
      "why_it_matters": "Delta: bucle completo de objetivo → desglose de tareas → código → pruebas → iteración. 49,2% en SWE-bench Verified.",
      "actionable_insight": "Emprendedores: lancen un MVP en 2 horas. Buscadores de empleo: etiqueten su README con «AI-Native · Cursor Agent».",
      "impact_score": 91,
      "golden_section": "application",
      "section_label": "Casos de Aplicación",
      "original_url": "https://cursor.com/changelog",
      "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468662+00:00",
      "created_at": "2026-06-08T02:00:41.468662+00:00",
      "tags": [
        "#Cursor",
        "#ProgramaciónIA",
        "#Agent"
      ],
      "target_audience": [
        "Emprendedores"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "5905d0e8-3c11-58e5-b692-9ad1b75fd8a2",
      "title": "Test-Time Compute Scaling: la tercera curva de crecimiento del cómputo de inferencia",
      "summary": "Paradigma de ICLR 2025: más cómputo en inferencia equivale a 10× parámetros efectivos. Modelo pequeño + CoT larga supera a modelos grandes.",
      "why_it_matters": "Delta: las Scaling Laws se extienden del entrenamiento al cómputo de inferencia. El éxito de o1 es la validación ingenieril del TTC scaling.",
      "actionable_insight": "Investigadores: tracen curvas de TTC scaling en sus benchmarks. Emprendedores: evalúen el equilibrio coste entre modelo pequeño + CoT larga frente a APIs de modelos grandes.",
      "impact_score": 91,
      "golden_section": "research",
      "section_label": "Radar de Investigación",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2409.12931v1/x1.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468658+00:00",
      "created_at": "2026-06-08T02:00:41.468658+00:00",
      "tags": [
        "#TestTimeCompute",
        "#ScalingLaw",
        "#CoT"
      ],
      "target_audience": [
        "Gobierno / Reguladores"
      ],
      "audience_segments": [
        "government"
      ]
    },
    {
      "id": "620f3e29-f3e4-5301-a7dd-daca2a611a72",
      "title": "OpenAI Responses API: de prompt engineering a workflow engineering",
      "summary": "El blog de ingeniería de OpenAI lanza Responses API — tool calls multi-turno nativos.",
      "why_it_matters": "Delta: MVPs de agentes de 2 semanas a 2 días con retrieval integrado.",
      "actionable_insight": "Emprendedores: MVP demo en 48 h. Estudiantes: proyecto Tool Use + RAG.",
      "impact_score": 89,
      "golden_section": "application",
      "section_label": "Casos de Aplicación",
      "original_url": "https://openai.com/index/new-tools-for-building-agents/",
      "image_url": "https://cdn.openai.com/chatgpt/share-og.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468698+00:00",
      "created_at": "2026-06-08T02:00:41.468698+00:00",
      "tags": [
        "#OpenAI",
        "#ResponsesAPI",
        "#Agent"
      ],
      "target_audience": [
        "Estudiantes"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "7065b2a4-b1cc-5be3-8505-bf0e7d5b5950",
      "title": "Berkeley BAIR: agentes embodied pasan de simulación a robots reales",
      "summary": "BAIR publica una pila de agentes multimodal — Sim-to-Real +40%.",
      "why_it_matters": "Delta: agentes físicos con RL estilo GRPO — eficiencia muestral 3× en robots.",
      "actionable_insight": "Investigadores: reproduzcan baselines BAIR. Emprendedores: evalúen MVPs de agentes embodied.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "Radar de Investigación",
      "original_url": "https://bair.berkeley.edu/blog/",
      "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468687+00:00",
      "created_at": "2026-06-08T02:00:41.468687+00:00",
      "tags": [
        "#Berkeley",
        "#EmbodiedAI",
        "#Agent"
      ],
      "target_audience": [
        "Investigadores",
        "Emprendedores"
      ],
      "audience_segments": [
        "researcher",
        "founder"
      ]
    },
    {
      "id": "ff35eee0-f517-5389-a5ba-34b13146ece4",
      "title": "Resultados ICLR 2025: Test-Time Compute domina los mejores artículos",
      "summary": "Los artículos destacados se centran en Test-Time Compute Scaling — el cómputo de inferencia equivale a una expansión de parámetros ×10.",
      "why_it_matters": "Delta: modelo pequeño + CoT larga en inferencia supera a modelos 10 veces mayores. o1 valida este paradigma en producción.",
      "actionable_insight": "Investigadores: reproduzcan las líneas base de los Outstanding Papers. Estudiantes: estudien las críticas públicas de OpenReview para aprender el diseño experimental de primer nivel.",
      "impact_score": 90,
      "golden_section": "competition",
      "section_label": "Competiciones",
      "original_url": "https://iclr.cc/",
      "image_url": "https://arxiv.org/html/2408.03314v1/x4.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468676+00:00",
      "created_at": "2026-06-08T02:00:41.468676+00:00",
      "tags": [
        "#ICLR2025",
        "#TestTimeCompute",
        "#ConferenciaTop"
      ],
      "target_audience": [
        "Investigadores"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "dd17e3e5-36d2-520c-af48-6ba1107752e9",
      "title": "EU AI Act en vigor: listas de compliance de alto riesgo y ROI",
      "summary": "El Acta entra en aplicación — evaluación de conformidad para sistemas de alto riesgo.",
      "why_it_matters": "Delta: compliance geopolítico vinculante; representantes UE y QMS antes de 2026 Q4.",
      "actionable_insight": "Reguladores: catálogos Annex III. Emprendedores: ROI de entrada al mercado UE.",
      "impact_score": 90,
      "golden_section": "work",
      "section_label": "Impacto Laboral",
      "original_url": "https://artificialintelligenceact.eu/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468717+00:00",
      "created_at": "2026-06-08T02:00:41.468717+00:00",
      "tags": [
        "#EUAIAct",
        "#Compliance",
        "#Geopolítica"
      ],
      "target_audience": [
        "Buscadores de empleo",
        "Gobierno / Reguladores"
      ],
      "audience_segments": [
        "job_seeker",
        "government"
      ]
    },
    {
      "id": "5619b903-9fa5-5b52-8c9d-68232c900d63",
      "title": "a16z AI Market Map 2025: infra de agentes = 40% del mapa",
      "summary": "a16z actualiza su mapa — orquestación, inferencia y evals suman 40%.",
      "why_it_matters": "Delta: ventana de prueba ROI 12–18 meses; capital intenso en capa agent.",
      "actionable_insight": "Inversores: matriz modelo/infra/agent/app. Emprendedores: moat open + commercial.",
      "impact_score": 88,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://a16z.com/ai-market-map/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468713+00:00",
      "created_at": "2026-06-08T02:00:41.468713+00:00",
      "tags": [
        "#a16z",
        "#MarketMap",
        "#AgentInfra"
      ],
      "target_audience": [
        "Inversores"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "022280b3-4780-5e49-b8fe-348d1c2aaf02",
      "title": "Mamba: modelado secuencial de complejidad lineal desafía a los Transformers",
      "summary": "El SSM selectivo de Mamba ofrece inferencia O(n) — 5 veces más rápida que los Transformers en secuencias largas.",
      "why_it_matters": "Delta: escalado lineal hasta contextos de 1 millón de tokens. Iguala la calidad de GPT-3 en tareas de ADN y audio con 1/4 de los parámetros.",
      "actionable_insight": "Investigadores: reproduzcan arXiv:2312.11805 y comparen la latencia Mamba vs Transformer. Estudiantes: SSM vs Attention es un tema recurrente en entrevistas de sistemas en 2025.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "Radar de Investigación",
      "original_url": "https://arxiv.org/abs/2312.11805",
      "image_url": "https://arxiv.org/html/2408.03314v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468655+00:00",
      "created_at": "2026-06-08T02:00:41.468655+00:00",
      "tags": [
        "#Mamba",
        "#SSM",
        "#InferenciaEficiente"
      ],
      "target_audience": [
        "Investigadores"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "64b9bb4d-aa0f-5cab-8ead-f4444988119e",
      "title": "Constitución de seguridad Anthropic: Constitutional AI redefine el alineamiento",
      "summary": "Anthropic actualiza Core Views on AI Safety — principios en model cards y políticas API.",
      "why_it_matters": "Delta: más allá de RLHF — marcos constitucionales; RFPs exigen model cards + red-team.",
      "actionable_insight": "Reguladores: exijan divulgación Constitutional AI. Medios: distingan ingeniería de marketing.",
      "impact_score": 86,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://www.anthropic.com/news/core-views-on-ai-safety",
      "image_url": "https://arxiv.org/html/2409.12931v1/x3.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468702+00:00",
      "created_at": "2026-06-08T02:00:41.468702+00:00",
      "tags": [
        "#Anthropic",
        "#AISafety",
        "#ConstitutionalAI"
      ],
      "target_audience": [
        "Gobierno / Reguladores",
        "Medios / Público"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "fbaba309-9651-5cb5-aac6-b83c3c89091d",
      "title": "NVIDIA NIM: microservicios de inferencia reducen TCO un 40%",
      "summary": "NVIDIA Technical Blog lanza NIM — motores TensorRT-LLM con SLA containerizados.",
      "why_it_matters": "Delta: de comprar GPUs a comprar SLAs de inferencia; Token降本 vía INT4/FP8 + motores precompilados.",
      "actionable_insight": "Buscadores de empleo: NIM + vLLM en el CV. Emprendedores: inferencia ≤12% del ARR.",
      "impact_score": 85,
      "golden_section": "application",
      "section_label": "Casos de Aplicación",
      "original_url": "https://developer.nvidia.com/blog/nvidia-nim-offers-optimized-inference-microservices-for-ai-models/",
      "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468694+00:00",
      "created_at": "2026-06-08T02:00:41.468694+00:00",
      "tags": [
        "#NVIDIA",
        "#NIM",
        "#TokenCost"
      ],
      "target_audience": [
        "Buscadores de empleo"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "3b3c82a9-e3fa-5663-879d-c3925ebb0f44",
      "title": "Vercel AI SDK 3.0: Generative UI lleva agentes al navegador",
      "summary": "Vercel dev blog — componentes UI streaming + inferencia edge en Vercel/Supabase.",
      "why_it_matters": "Delta: de chat boxes a Generative UI; ahorro de tokens vía edge cache.",
      "actionable_insight": "Emprendedores: agente SaaS en 24 h. Buscadores de empleo: Generative UI como diferenciador.",
      "impact_score": 84,
      "golden_section": "application",
      "section_label": "Casos de Aplicación",
      "original_url": "https://vercel.com/blog/ai-sdk-3-generative-ui",
      "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468706+00:00",
      "created_at": "2026-06-08T02:00:41.468706+00:00",
      "tags": [
        "#Vercel",
        "#AISDK",
        "#GenerativeUI"
      ],
      "target_audience": [
        "Emprendedores",
        "Estudiantes"
      ],
      "audience_segments": [
        "founder",
        "student"
      ]
    },
    {
      "id": "2632d4c9-ff62-593a-af80-ab922cdd66f9",
      "title": "WIRED × MIT TR: brecha de comprensión pública en la era Agent 2025",
      "summary": "WIRED y MIT TR: curvas de capacidad agent adelantan ~18 meses a la comprensión pública.",
      "why_it_matters": "Delta: narrativa mediática hacia «¿cuánta cadena de decisión reemplaza un agent?»; equidad tecnológica WEF.",
      "actionable_insight": "Medios: demo + limitaciones. Estudiantes: portafolio de alfabetización IA.",
      "impact_score": 83,
      "golden_section": "headline",
      "section_label": "Titulares",
      "original_url": "https://www.wired.com/tag/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468724+00:00",
      "created_at": "2026-06-08T02:00:41.468724+00:00",
      "tags": [
        "#WIRED",
        "#MITTechReview",
        "#AgentEra"
      ],
      "target_audience": [
        "Medios / Público"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6ab6c04b-dccf-5c6d-a049-1d816d8eea13",
      "title": "Hugging Face Open R1: la comunidad replica DeepSeek-R1 en código abierto",
      "summary": "Open R1 reproduce el pipeline GRPO completo con herramientas 100% abiertas — modelo de razonamiento 7B en 48 h con 8×H100.",
      "why_it_matters": "Delta: el razonamiento pasa de API de caja negra a ingeniería reproducible. Cualquiera puede hacer fork y afinar para dominios verticales.",
      "actionable_insight": "Estudiantes: hagan fork de huggingface/open-r1 y ejecuten SFT en Colab. Emprendedores: entrenen modelos de dominio específico y reduzcan costes de API un 80%.",
      "impact_score": 87,
      "golden_section": "application",
      "section_label": "Casos de Aplicación",
      "original_url": "https://huggingface.co/blog/open-r1",
      "image_url": "https://raw.githubusercontent.com/huggingface/open-r1/main/assets/plan-of-attack.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468666+00:00",
      "created_at": "2026-06-08T02:00:41.468666+00:00",
      "tags": [
        "#HuggingFace",
        "#OpenR1",
        "#CódigoAbierto"
      ],
      "target_audience": [
        "Medios / Público"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6d56cfdf-f83d-5090-a0a6-9bcf0bb4f6d4",
      "title": "NIST AI RMF 1.0: referencia federal global de gestión de riesgos IA",
      "summary": "NIST publica AI RMF 1.0 — Map-Measure-Manage-Govern como estándar de facto.",
      "why_it_matters": "Delta: compliance by design; doble vía transatlántica con EU AI Act.",
      "actionable_insight": "Reguladores: integren RMF en compras públicas. Inversores: puntuación RMF en DD.",
      "impact_score": 87,
      "golden_section": "work",
      "section_label": "Impacto Laboral",
      "original_url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "image_url": "https://arxiv.org/html/2305.18290v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468720+00:00",
      "created_at": "2026-06-08T02:00:41.468720+00:00",
      "tags": [
        "#NIST",
        "#AIRMF",
        "#Riesgo"
      ],
      "target_audience": [
        "Gobierno / Reguladores",
        "Inversores"
      ],
      "audience_segments": [
        "government",
        "investor"
      ]
    },
    {
      "id": "42a5831a-7035-500c-a90a-b5484b979ae5",
      "title": "arXiv: leyes de escalado multi-agente revelan un punto de inflexión",
      "summary": "Equipos de 4–8 agentes muestran ganancias superlineales con coste de tokens lineal.",
      "why_it_matters": "Delta: Test-Time Compute multi-agente; LangGraph/CrewAI como nuevo cuello de botella.",
      "actionable_insight": "Investigadores: sigan reproducciones en OpenReview. Emprendedores: orquestación de 4 agentes reduce ~30% tokens.",
      "impact_score": 87,
      "golden_section": "research",
      "section_label": "Radar de Investigación",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2408.03314v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468691+00:00",
      "created_at": "2026-06-08T02:00:41.468691+00:00",
      "tags": [
        "#arXiv",
        "#MultiAgent",
        "#ScalingLaw"
      ],
      "target_audience": [
        "Emprendedores"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "490445b8-6847-5aa2-b146-269b4b9d392a",
      "title": "NeurIPS 2024: la fusión MoE + RLHF captura el 30% de los Spotlights",
      "summary": "La fusión Mixture-of-Experts + RLHF representa el 30% de los artículos Spotlight — ganancias de eficiencia de 5×.",
      "why_it_matters": "Delta: MoE evoluciona del enrutamiento por tema al enrutamiento por tipo de razonamiento. DeepSeek-V3 671B demuestra «equipos de expertos bajo demanda».",
      "actionable_insight": "Investigadores: comparen el enrutamiento Switch Transformer vs DeepSeek-MoE. Emprendedores: el soporte MoE en vLLM reduce costes de despliegue un 60%.",
      "impact_score": 86,
      "golden_section": "competition",
      "section_label": "Competiciones",
      "original_url": "https://neurips.cc/Conferences/2024",
      "image_url": "https://arxiv.org/html/2412.19437v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468680+00:00",
      "created_at": "2026-06-08T02:00:41.468680+00:00",
      "tags": [
        "#NeurIPS2024",
        "#MoE",
        "#RLHF"
      ],
      "target_audience": [
        "Inversores"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "3b7274db-6092-59ae-ba12-064e88623ba6",
      "title": "MIT Tech Review: la IA reconfigura el 40% de los flujos de trabajo de cuello blanco",
      "summary": "Los Agent LLM ya penetran el 40% del trabajo del conocimiento — documentos, revisión de código, analítica — frente al 12% anterior.",
      "why_it_matters": "Delta: paso de la productividad personal a la reingeniería de flujos de equipo. Prompt Engineering y Agent Orchestration son habilidades básicas.",
      "actionable_insight": "Buscadores de empleo: publiquen una demo Multi-Agent con LangGraph en GitHub. Estudiantes: cursos de sistemas de IA vs teoría ML pura — brecha de empleabilidad del 35%.",
      "impact_score": 82,
      "golden_section": "work",
      "section_label": "Impacto Laboral",
      "original_url": "https://www.technologyreview.com/topic/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468669+00:00",
      "created_at": "2026-06-08T02:00:41.468669+00:00",
      "tags": [
        "#EmpleoIA",
        "#FlujoDeTrabajo",
        "#Agent"
      ],
      "target_audience": [
        "Buscadores de empleo"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "fe9d3314-8b86-5b2a-a2ef-bb01d9020e0c",
      "title": "Informe NVIDIA: la demanda empresarial de inferencia se multiplicará por 10 en 3 años",
      "summary": "El cómputo de inferencia LLM empresarial crecerá 10× entre 2024 y 2027 — los bucles multi-turno de Agent son el principal motor.",
      "why_it_matters": "Delta: los bucles Agent multiplican el consumo de tokens ×100. H200 + TensorRT-LLM reduce el coste unitario 3×, pero el gasto total sigue creciendo 5×.",
      "actionable_insight": "Emprendedores: limiten la inferencia al 15% del ARR con vLLM + cuantización. Buscadores de empleo: dominen TensorRT-LLM y la cuantización INT4/FP8.",
      "impact_score": 79,
      "golden_section": "work",
      "section_label": "Impacto Laboral",
      "original_url": "https://blogs.nvidia.com/blog/what-is-generative-ai/",
      "image_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468673+00:00",
      "created_at": "2026-06-08T02:00:41.468673+00:00",
      "tags": [
        "#NVIDIA",
        "#Inferencia",
        "#OptimizaciónDeCostes"
      ],
      "target_audience": [
        "Inversores"
      ],
      "audience_segments": [
        "investor"
      ]
    }
  ],
  "ko": [
    {
      "id": "eb9b9a44-3d24-515a-a536-b62b21f3a796",
      "title": "OpenAI o1: AI가 과학자처럼 단계별로 추론하기 시작하다",
      "summary": "o1이 MATH와 Codeforces에서 박사 수준을 넘어섰다. 즉답형 AI에서 심층 추론으로의 전환점이다.",
      "why_it_matters": "Delta: o1은 GPT-4o의 단일 패스 생성 대신 RL 기반 Chain-of-Thought를 사용한다. AIME 정확도는 13%에서 83%로, Codeforces에서는 인간 상위 89%에 도달했다.",
      "actionable_insight": "창업가: 복잡한 의사결정 워크플로를 점검하고 o1 API 연동을 우선하라. 연구자: OpenAI의 RL 추론 증류 경로를 분석해 소형 모델 이전 가능성을 추적하라.",
      "impact_score": 96,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://openai.com/index/learning-to-reason-with-llms/",
      "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468781+00:00",
      "created_at": "2026-06-08T02:00:41.468781+00:00",
      "tags": [
        "#LLM",
        "#추론",
        "#OpenAI"
      ],
      "target_audience": [
        "연구자"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "ba5d534c-3d0d-5961-8c26-084492155ec7",
      "title": "Sequoia「AI Act Two」: 모델 군비에서 앱 ROI兑现期로",
      "summary": "세quoia Capital: 2025 이후 측정 가능 ROI Agent 워크플로에 집중.",
      "why_it_matters": "Delta: 추론 Token/LTV <0.15. 지정학合规 DD 필수.",
      "actionable_insight": "투자자: Agent ROI 계산기. 창업가: Token降本 + EU AI Act 체크리스트.",
      "impact_score": 91,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://www.sequoiacap.com/article/ai-act-two/",
      "image_url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468850+00:00",
      "created_at": "2026-06-08T02:00:41.468850+00:00",
      "tags": [
        "#Sequoia",
        "#AIActTwo",
        "#ROI"
      ],
      "target_audience": [
        "투자자",
        "창업가"
      ],
      "audience_segments": [
        "investor",
        "founder"
      ]
    },
    {
      "id": "9084209b-5dd6-5a94-b9ca-3ffac67f2496",
      "title": "DeepSeek-R1: 600만 달러로 o1급 추론 능력 재현",
      "summary": "DeepSeek가 순수 GRPO 강화학습(SFT 없음)으로 o1급 추론 모델을 단 600만 달러에 학습했다.",
      "why_it_matters": "Delta: AIME 2024에서 79.8%(o1: 83%). OpenAI 추정 비용의 약 1/10. MIT 라이선스 오픈 가중치가 '수동 CoT 필수'라는 통념을 깨뜨렸다.",
      "actionable_insight": "학생: DeepSeek-R1-Distill-Qwen-7B를 로컬에서 GSM8K로 실행하라. 연구자: GRPO vs PPO vs DPO 수렴 속도를 벤치마크하라.",
      "impact_score": 94,
      "golden_section": "research",
      "section_label": "연구 레이더",
      "original_url": "https://arxiv.org/abs/2501.12948",
      "image_url": "https://arxiv.org/html/2501.12948v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468793+00:00",
      "created_at": "2026-06-08T02:00:41.468793+00:00",
      "tags": [
        "#오픈소스",
        "#GRPO",
        "#DeepSeek"
      ],
      "target_audience": [
        "학생"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "ea77c58c-636c-5f5f-9a65-c2b0da803533",
      "title": "Claude 3.5 Sonnet: 코딩 성능이 GPT-4o를 앞서다",
      "summary": "Claude 3.5 Sonnet이 SWE-bench에서 49% 통과율로 GPT-4o의 38%를 앞섰다. 현재 가장 강력한 코드 모델이다.",
      "why_it_matters": "Delta: HumanEval 정확도 92%. Artifacts로 React 컴포넌트를 실시간 렌더링한다. 200K 컨텍스트에서 환각률이 약 30% 낮아졌다.",
      "actionable_insight": "구직자: 이력서에 Claude API 통합 경험을 강조하라. 창업가: Artifacts로 하루 안에 투자자용 인터랙티브 데모를 완성하라.",
      "impact_score": 93,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://www.anthropic.com/news/claude-3-5-sonnet",
      "image_url": "https://cdn.sanity.io/images/4zrzovbb/website/cf2c754458e9102b7334731fb18a965bfeb7ad08-2200x1894.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468786+00:00",
      "created_at": "2026-06-08T02:00:41.468786+00:00",
      "tags": [
        "#Claude",
        "#코드모델",
        "#Anthropic"
      ],
      "target_audience": [
        "구직자",
        "미디어/대중"
      ],
      "audience_segments": [
        "job_seeker",
        "media"
      ]
    },
    {
      "id": "5ea24778-b8e8-5235-a568-ff76b1bb3450",
      "title": "Stanford HAI AI Index 2024: 글로벌 AI 투자 1000억 달러 돌파",
      "summary": "스탠포드 HAI 연례 보고서가 훈련 연산, 특허, 민간 투자 급증을 보여준다.",
      "why_it_matters": "Delta: AI Index가 Test-Time Compute와 지정학적 연산 분포를 포함. 미국 민간 AI 투자는 중국의 약 12배.",
      "actionable_insight": "연구자: AI Index 국가별 벤치마크 인용. 학생: FLOPs vs TCO 차이 학습.",
      "impact_score": 92,
      "golden_section": "research",
      "section_label": "연구 레이더",
      "original_url": "https://hai.stanford.edu/ai-index/2024-ai-index-report",
      "image_url": "https://arxiv.org/html/2405.01223v2/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468825+00:00",
      "created_at": "2026-06-08T02:00:41.468825+00:00",
      "tags": [
        "#StanfordHAI",
        "#AIIndex",
        "#연산"
      ],
      "target_audience": [
        "정부/규제",
        "미디어/대중"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "7f613295-5159-5e54-9d1a-2b483fd775b4",
      "title": "Google Gemini 2.0: 네이티브 멀티모달 Agent가 프로덕션에 진입하다",
      "summary": "Gemini 2.0 Flash가 네이티브 Tool Use와 200ms 미만 지연의 실시간 멀티모달 상호작용을 제공한다.",
      "why_it_matters": "Delta: 텍스트 LLM + 플러그인에서 Search, Maps, Code Execution이 내장된 네이티브 Agent 아키텍처로 전환했다. 멀티모달 토큰 비용이 50% 절감됐다.",
      "actionable_insight": "창업가: Gemini 2.0으로 검색-추론-실행 Agent 루프를 구축하라. 학생: Google AI Studio 무료 티어로 멀티모달 데모를 프로토타이핑하라.",
      "impact_score": 90,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://blog.google/technology/ai/google-gemini-ai/",
      "image_url": "https://arxiv.org/html/2403.05530v2/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468789+00:00",
      "created_at": "2026-06-08T02:00:41.468789+00:00",
      "tags": [
        "#Gemini",
        "#멀티모달",
        "#Agent"
      ],
      "target_audience": [
        "학생"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "5b2185b5-0803-5e8a-9fda-d73340d0906b",
      "title": "Cursor Agent: 코드 자동완성에서 자율 프로그래머로",
      "summary": "Cursor Agent가 계획, 코딩, 터미널 실행, 버그 수정을 자율 수행한다. CRUD API에서 인간 개입이 50회 이상에서 3회로 줄었다.",
      "why_it_matters": "Delta: 목표 → 태스크 분해 → 코드 → 테스트 → 반복의 완전한 루프. SWE-bench Verified 49.2%.",
      "actionable_insight": "창업가: 2시간 안에 MVP를 출시하라. 구직자: README에 'AI-Native · Cursor Agent'를 표기하라.",
      "impact_score": 91,
      "golden_section": "application",
      "section_label": "응용 사례",
      "original_url": "https://cursor.com/changelog",
      "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468804+00:00",
      "created_at": "2026-06-08T02:00:41.468804+00:00",
      "tags": [
        "#Cursor",
        "#AI코딩",
        "#Agent"
      ],
      "target_audience": [
        "창업가"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "5905d0e8-3c11-58e5-b692-9ad1b75fd8a2",
      "title": "Test-Time Compute Scaling: 추론 시점 연산이 세 번째 성장 곡선",
      "summary": "ICLR 2025 패러다임: 추론 시 연산 증가는 실효 10배 파라미터와 동등하다. 소형 모델 + 긴 CoT가 대형 모델을 이긴다.",
      "why_it_matters": "Delta: Scaling Law가 학습에서 추론 연산으로 확장됐다. o1의 성공이 TTC scaling의 엔지니어링 증거이다.",
      "actionable_insight": "연구자: 벤치마크에서 TTC scaling 곡선을 그려라. 창업가: 소형 모델 + 긴 CoT vs 대형 모델 API 비용 트레이드오프를 평가하라.",
      "impact_score": 91,
      "golden_section": "research",
      "section_label": "연구 레이더",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2409.12931v1/x1.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468800+00:00",
      "created_at": "2026-06-08T02:00:41.468800+00:00",
      "tags": [
        "#TestTimeCompute",
        "#ScalingLaw",
        "#CoT"
      ],
      "target_audience": [
        "정부/규제"
      ],
      "audience_segments": [
        "government"
      ]
    },
    {
      "id": "620f3e29-f3e4-5301-a7dd-daca2a611a72",
      "title": "OpenAI Responses API: Prompt에서 Workflow 공학으로",
      "summary": "OpenAI 엔지니어링 블로그가 Responses API 공개 — 네이티브 멀티턴 Tool Call.",
      "why_it_matters": "Delta: 내장 Retrieval로 Agent MVP 2주→2일.",
      "actionable_insight": "창업가: 48시간 데모 Agent. 학생: Tool Use + RAG 포트폴리오.",
      "impact_score": 89,
      "golden_section": "application",
      "section_label": "응용 사례",
      "original_url": "https://openai.com/index/new-tools-for-building-agents/",
      "image_url": "https://cdn.openai.com/chatgpt/share-og.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468839+00:00",
      "created_at": "2026-06-08T02:00:41.468839+00:00",
      "tags": [
        "#OpenAI",
        "#ResponsesAPI",
        "#Agent"
      ],
      "target_audience": [
        "학생"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "7065b2a4-b1cc-5be3-8505-bf0e7d5b5950",
      "title": "Berkeley BAIR: Embodied Agent가 시뮬레이션에서 실제 로봇으로",
      "summary": "BAIR가 LLM 계획과 MuJoCo/Isaac 시뮬을 연결하는 Agent 스택을 공개했다.",
      "why_it_matters": "Delta: GRPO형 RL로 로봇 정책 미세조정 샘플 효율 3배.",
      "actionable_insight": "연구자: BAIR 오픈 Agent 베이스라인 재현. 창업가: 물류/점검 Embodied Agent MVP 평가.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "연구 레이더",
      "original_url": "https://bair.berkeley.edu/blog/",
      "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468829+00:00",
      "created_at": "2026-06-08T02:00:41.468829+00:00",
      "tags": [
        "#Berkeley",
        "#EmbodiedAI",
        "#Agent"
      ],
      "target_audience": [
        "연구자",
        "창업가"
      ],
      "audience_segments": [
        "researcher",
        "founder"
      ]
    },
    {
      "id": "ff35eee0-f517-5389-a5ba-34b13146ece4",
      "title": "ICLR 2025 결과: Test-Time Compute가 최우수 논문을 지배하다",
      "summary": "Outstanding 논문이 Test-Time Compute Scaling을 중심으로 한다. 추론 시 연산 증가는 실효 10배 파라미터 확장과 동등하다.",
      "why_it_matters": "Delta: 추론 시 소형 모델 + 긴 CoT가 10배 큰 모델을 이긴다. o1이 이 패러다임을 프로덕션에서 검증했다.",
      "actionable_insight": "연구자: Outstanding Paper 베이스라인을 재현하라. 학생: OpenReview 공개 리뷰를 통해 최상위 실험 설계를 학습하라.",
      "impact_score": 90,
      "golden_section": "competition",
      "section_label": "대회·랭킹",
      "original_url": "https://iclr.cc/",
      "image_url": "https://arxiv.org/html/2408.03314v1/x4.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468818+00:00",
      "created_at": "2026-06-08T02:00:41.468818+00:00",
      "tags": [
        "#ICLR2025",
        "#TestTimeCompute",
        "#탑티어학회"
      ],
      "target_audience": [
        "연구자"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "dd17e3e5-36d2-520c-af48-6ba1107752e9",
      "title": "EU AI Act 시행: 고위험 AI 컴플라이언스와 ROI",
      "summary": "EU AI 법안 실행 — 고위험 시스템 적합성 평가 의무.",
      "why_it_matters": "Delta: 지정학合规 강제. 2026 Q4까지 EU 대표·QMS 문서화.",
      "actionable_insight": "규제기관: Annex III 고위험 목록. 창업가: EU 시장 진입 ROI 모델.",
      "impact_score": 90,
      "golden_section": "work",
      "section_label": "일자리 영향",
      "original_url": "https://artificialintelligenceact.eu/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468857+00:00",
      "created_at": "2026-06-08T02:00:41.468857+00:00",
      "tags": [
        "#EUAIAct",
        "#컴플라이언스",
        "#지정학"
      ],
      "target_audience": [
        "구직자",
        "정부/규제"
      ],
      "audience_segments": [
        "job_seeker",
        "government"
      ]
    },
    {
      "id": "5619b903-9fa5-5b52-8c9d-68232c900d63",
      "title": "a16z AI Market Map 2025: Agent 인프라 40% 점유",
      "summary": "a16z AI 산업 지도 업데이트 — Agent 오케스트레이션·추론·Evals 40%.",
      "why_it_matters": "Delta: ROI 검증 창 12~18개월. Agent 레이어 자본 집중.",
      "actionable_insight": "투자자: 4층 커버리지 매트릭스. 창업가: Agent Infra 듀얼 모트.",
      "impact_score": 88,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://a16z.com/ai-market-map/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468853+00:00",
      "created_at": "2026-06-08T02:00:41.468853+00:00",
      "tags": [
        "#a16z",
        "#MarketMap",
        "#AgentInfra"
      ],
      "target_audience": [
        "투자자"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "022280b3-4780-5e49-b8fe-348d1c2aaf02",
      "title": "Mamba: 선형 복잡도 시퀀스 모델링이 Transformer에 도전하다",
      "summary": "Mamba의 선택적 SSM이 O(n) 추론을 제공한다. 긴 시퀀스에서 Transformer 대비 5배 빠르다.",
      "why_it_matters": "Delta: 100만 토큰 컨텍스트까지 선형 확장. DNA·오디오 태스크에서 1/4 파라미터로 GPT-3 수준 품질을 달성했다.",
      "actionable_insight": "연구자: arXiv:2312.11805를 재현하고 Mamba vs Transformer 지연 시간을 벤치마크하라. 학생: SSM vs Attention은 2025 시스템 면접의 핵심 주제다.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "연구 레이더",
      "original_url": "https://arxiv.org/abs/2312.11805",
      "image_url": "https://arxiv.org/html/2408.03314v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468797+00:00",
      "created_at": "2026-06-08T02:00:41.468797+00:00",
      "tags": [
        "#Mamba",
        "#SSM",
        "#효율적추론"
      ],
      "target_audience": [
        "연구자"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "64b9bb4d-aa0f-5cab-8ead-f4444988119e",
      "title": "Anthropic 안전 헌법: Constitutional AI가 정렬 기준 재정의",
      "summary": "Anthropic이 Core Views on AI Safety 업데이트 — Constitutional AI 원칙 내재화.",
      "why_it_matters": "Delta: RLHF를 넘어 헌법형 다중 제약. RFP에 모델 카드 + 레드팀 필수.",
      "actionable_insight": "규제기관: Constitutional AI 공시 의무화. 미디어: 정렬 기술과 마케팅 구분.",
      "impact_score": 86,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://www.anthropic.com/news/core-views-on-ai-safety",
      "image_url": "https://arxiv.org/html/2409.12931v1/x3.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468843+00:00",
      "created_at": "2026-06-08T02:00:41.468843+00:00",
      "tags": [
        "#Anthropic",
        "#AI안전",
        "#ConstitutionalAI"
      ],
      "target_audience": [
        "정부/규제",
        "미디어/대중"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "fbaba309-9651-5cb5-aac6-b83c3c89091d",
      "title": "NVIDIA NIM: 추론 마이크로서비스로 LLM TCO 40% 절감",
      "summary": "NVIDIA Technical Blog가 NIM을 공개 — TensorRT-LLM 최적화 + 컨테이너 SLA.",
      "why_it_matters": "Delta: GPU 구매에서 추론 SLA 구매로. INT4/FP8 + 사전 컴파일 엔진으로 Token降本.",
      "actionable_insight": "구직자: NIM + vLLM 이력서 추가. 창업가: 추론 비용 ARR 12% 이내.",
      "impact_score": 85,
      "golden_section": "application",
      "section_label": "응용 사례",
      "original_url": "https://developer.nvidia.com/blog/nvidia-nim-offers-optimized-inference-microservices-for-ai-models/",
      "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468836+00:00",
      "created_at": "2026-06-08T02:00:41.468836+00:00",
      "tags": [
        "#NVIDIA",
        "#NIM",
        "#Token비용"
      ],
      "target_audience": [
        "구직자"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "3b3c82a9-e3fa-5663-879d-c3925ebb0f44",
      "title": "Vercel AI SDK 3.0: Generative UI가 Agent를 브라우저로",
      "summary": "Vercel 개발자 블로그 — Streaming UI + Edge 추론, Vercel/Supabase 원클릭 배포.",
      "why_it_matters": "Delta: 채팅框→Generative UI. Edge 캐시로 Token降本.",
      "actionable_insight": "창업가: 24시간 SaaS Agent. 구직자: Generative UI 경험 차별화.",
      "impact_score": 84,
      "golden_section": "application",
      "section_label": "응용 사례",
      "original_url": "https://vercel.com/blog/ai-sdk-3-generative-ui",
      "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468846+00:00",
      "created_at": "2026-06-08T02:00:41.468846+00:00",
      "tags": [
        "#Vercel",
        "#AISDK",
        "#GenerativeUI"
      ],
      "target_audience": [
        "창업가",
        "학생"
      ],
      "audience_segments": [
        "founder",
        "student"
      ]
    },
    {
      "id": "2632d4c9-ff62-593a-af80-ab922cdd66f9",
      "title": "WIRED × MIT TR: 2025 Agent 시대 대중 인식 격차",
      "summary": "WIRED와 MIT Technology Review: Agent 능력 곡선이 대중 이해보다 18개월 앞서 있다.",
      "why_it_matters": "Delta: 미디어 내러티브가 Agent 대체 범위로 전환. WEF 2025 기술平權 핵심.",
      "actionable_insight": "미디어: 능력 데모+한계 공개. 학생: AI 리터러시 포트폴리오.",
      "impact_score": 83,
      "golden_section": "headline",
      "section_label": "헤드라인",
      "original_url": "https://www.wired.com/tag/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468864+00:00",
      "created_at": "2026-06-08T02:00:41.468864+00:00",
      "tags": [
        "#WIRED",
        "#MITTechReview",
        "#Agent시대"
      ],
      "target_audience": [
        "미디어/대중"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6ab6c04b-dccf-5c6d-a049-1d816d8eea13",
      "title": "Hugging Face Open R1: 커뮤니티가 DeepSeek-R1을 오픈소스로 재현하다",
      "summary": "Open R1이 100% 오픈 툴체인으로 GRPO 파이프라인 전체를 재현한다. 8×H100에서 48시간 만에 7B 추론 모델을 학습한다.",
      "why_it_matters": "Delta: 추론 능력이 블랙박스 API에서 재현 가능한 엔지니어링으로 전환됐다. 누구나 포크해 수직 도메인에 맞게 미세조정할 수 있다.",
      "actionable_insight": "학생: huggingface/open-r1을 포크해 Colab에서 SFT를 실행하라. 창업가: 도메인 특화 모델을 학습해 API 비용을 80% 절감하라.",
      "impact_score": 87,
      "golden_section": "application",
      "section_label": "응용 사례",
      "original_url": "https://huggingface.co/blog/open-r1",
      "image_url": "https://raw.githubusercontent.com/huggingface/open-r1/main/assets/plan-of-attack.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468807+00:00",
      "created_at": "2026-06-08T02:00:41.468807+00:00",
      "tags": [
        "#HuggingFace",
        "#OpenR1",
        "#오픈소스"
      ],
      "target_audience": [
        "미디어/대중"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6d56cfdf-f83d-5090-a0a6-9bcf0bb4f6d4",
      "title": "NIST AI RMF 1.0: 미국 연방 AI 위험 관리 글로벌 기준",
      "summary": "NIST AI Risk Management Framework 1.0 공식판 — Map-Measure-Manage-Govern.",
      "why_it_matters": "Delta: 사후 감사→설계即合规. EU AI Act과跨大西洋 듀얼 트랙.",
      "actionable_insight": "규제기관: RMF를 공공 조달에 포함. 투자자: DD에 RMF 성숙도 요구.",
      "impact_score": 87,
      "golden_section": "work",
      "section_label": "일자리 영향",
      "original_url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "image_url": "https://arxiv.org/html/2305.18290v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468860+00:00",
      "created_at": "2026-06-08T02:00:41.468860+00:00",
      "tags": [
        "#NIST",
        "#AIRMF",
        "#위험관리"
      ],
      "target_audience": [
        "정부/규제",
        "투자자"
      ],
      "audience_segments": [
        "government",
        "investor"
      ]
    },
    {
      "id": "42a5831a-7035-500c-a90a-b5484b979ae5",
      "title": "arXiv: Multi-Agent Scaling Law이 협업 추론의 변곡점 공개",
      "summary": "4~8 Agent 팀이 초선형 정확도 향상과 선형 Token 비용을 보인다.",
      "why_it_matters": "Delta: Multi-Agent Test-Time Compute. LangGraph/CrewAI 오케스트레이션이 새 병목.",
      "actionable_insight": "연구자: OpenReview 재현 추적. 창업가: 4-Agent 오케스트레이션으로 Token 30% 절감.",
      "impact_score": 87,
      "golden_section": "research",
      "section_label": "연구 레이더",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2408.03314v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468832+00:00",
      "created_at": "2026-06-08T02:00:41.468832+00:00",
      "tags": [
        "#arXiv",
        "#MultiAgent",
        "#ScalingLaw"
      ],
      "target_audience": [
        "창업가"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "490445b8-6847-5aa2-b146-269b4b9d392a",
      "title": "NeurIPS 2024: MoE + RLHF 융합이 Spotlight의 30%를 차지하다",
      "summary": "Mixture-of-Experts + RLHF 융합이 Spotlight 논문의 30%를 차지한다. 효율이 5배 향상됐다.",
      "why_it_matters": "Delta: MoE가 주제별 라우팅에서 추론 유형별 라우팅으로 진화했다. DeepSeek-V3 671B가 '전문가 팀 온디맨드'를 입증했다.",
      "actionable_insight": "연구자: Switch Transformer vs DeepSeek-MoE 라우팅을 비교하라. 창업가: vLLM MoE 지원으로 배포 비용을 60% 절감하라.",
      "impact_score": 86,
      "golden_section": "competition",
      "section_label": "대회·랭킹",
      "original_url": "https://neurips.cc/Conferences/2024",
      "image_url": "https://arxiv.org/html/2412.19437v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468822+00:00",
      "created_at": "2026-06-08T02:00:41.468822+00:00",
      "tags": [
        "#NeurIPS2024",
        "#MoE",
        "#RLHF"
      ],
      "target_audience": [
        "투자자"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "3b7274db-6092-59ae-ba12-064e88623ba6",
      "title": "MIT Tech Review: AI가 화이트칼라 업무 워크플로의 40%를 재편하다",
      "summary": "LLM Agent가 문서 작성, 코드 리뷰, 데이터 분석 등 지식 업무의 40%에 침투했다. 침투율은 12%에서 상승했다.",
      "why_it_matters": "Delta: 개인 생산성 향상에서 팀 워크플로 재설계로 전환됐다. Prompt Engineering과 Agent Orchestration이 기본 스킬이 됐다.",
      "actionable_insight": "구직자: LangGraph Multi-Agent 데모를 GitHub에 공개하라. 학생: AI 시스템 과목 vs 순수 ML 이론 — 취업 경쟁력 35% 격차.",
      "impact_score": 82,
      "golden_section": "work",
      "section_label": "일자리 영향",
      "original_url": "https://www.technologyreview.com/topic/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468811+00:00",
      "created_at": "2026-06-08T02:00:41.468811+00:00",
      "tags": [
        "#AI취업",
        "#워크플로",
        "#Agent"
      ],
      "target_audience": [
        "구직자"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "fe9d3314-8b86-5b2a-a2ef-bb01d9020e0c",
      "title": "NVIDIA 보고서: 기업 추론 연산 수요, 3년 내 10배 성장",
      "summary": "2024–2027년 기업 LLM 추론 연산이 10배 성장한다. Agent 멀티턴 루프가 최대 동력이다.",
      "why_it_matters": "Delta: Agent 루프가 토큰 소비를 ×100 증가시킨다. H200 + TensorRT-LLM이 단위 비용을 3배 절감하지만, 총 지출은 여전히 5배 증가한다.",
      "actionable_insight": "창업가: vLLM + 양자화로 추론 비용을 ARR의 15% 이내로 관리하라. 구직자: TensorRT-LLM과 INT4/FP8 양자화를 학습하라.",
      "impact_score": 79,
      "golden_section": "work",
      "section_label": "일자리 영향",
      "original_url": "https://blogs.nvidia.com/blog/what-is-generative-ai/",
      "image_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468815+00:00",
      "created_at": "2026-06-08T02:00:41.468815+00:00",
      "tags": [
        "#NVIDIA",
        "#추론",
        "#비용최적화"
      ],
      "target_audience": [
        "투자자"
      ],
      "audience_segments": [
        "investor"
      ]
    }
  ],
  "fr": [
    {
      "id": "eb9b9a44-3d24-515a-a536-b62b21f3a796",
      "title": "OpenAI o1 : l'IA commence à raisonner comme un scientifique, étape par étape",
      "summary": "o1 dépasse le niveau doctoral sur MATH et Codeforces — un passage des réponses instantanées au raisonnement approfondi.",
      "why_it_matters": "Delta : o1 s'appuie sur une Chain-of-Thought pilotée par du RL plutôt que sur la génération en un seul passage de GPT-4o. La précision sur AIME bondit de 13 % à 83 % ; sur Codeforces, il atteint le 89e percentile humain.",
      "actionable_insight": "Entrepreneurs : auditez vos workflows de décision complexes et priorisez l'intégration de l'API o1. Chercheurs : étudiez la voie de distillation RL d'OpenAI pour le transfert vers les petits modèles.",
      "impact_score": 96,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://openai.com/index/learning-to-reason-with-llms/",
      "image_url": "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468922+00:00",
      "created_at": "2026-06-08T02:00:41.468922+00:00",
      "tags": [
        "#LLM",
        "#Raisonnement",
        "#OpenAI"
      ],
      "target_audience": [
        "Chercheurs"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "ba5d534c-3d0d-5961-8c26-084492155ec7",
      "title": "Sequoia « AI Act Two » : de la course aux modèles au ROI applicatif",
      "summary": "Sequoia Capital : focus post-2025 sur workflows d'agents à ROI mesurable.",
      "why_it_matters": "Delta : coût token / LTV <0,15 ; compliance géopolitique obligatoire en DD.",
      "actionable_insight": "Investisseurs : calculateurs ROI agents. Entrepreneurs : roadmap Token + EU AI Act.",
      "impact_score": 91,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://www.sequoiacap.com/article/ai-act-two/",
      "image_url": "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468992+00:00",
      "created_at": "2026-06-08T02:00:41.468992+00:00",
      "tags": [
        "#Sequoia",
        "#AIActTwo",
        "#ROI"
      ],
      "target_audience": [
        "Investisseurs",
        "Entrepreneurs"
      ],
      "audience_segments": [
        "investor",
        "founder"
      ]
    },
    {
      "id": "9084209b-5dd6-5a94-b9ca-3ffac67f2496",
      "title": "DeepSeek-R1 : reproduire un raisonnement de niveau o1 pour 6 millions de dollars",
      "summary": "DeepSeek entraîne un modèle de raisonnement de classe o1 avec du GRPO pur (zéro SFT) pour seulement 6 millions de dollars.",
      "why_it_matters": "Delta : 79,8 % sur AIME 2024 (o1 : 83 %) à environ 1/10 du coût estimé d'OpenAI. Des poids ouverts sous licence MIT brisent le consensus selon lequel une CoT manuelle serait indispensable.",
      "actionable_insight": "Étudiants : exécutez DeepSeek-R1-Distill-Qwen-7B en local sur GSM8K. Chercheurs : comparez la convergence du GRPO face au PPO et au DPO.",
      "impact_score": 94,
      "golden_section": "research",
      "section_label": "Radar Recherche",
      "original_url": "https://arxiv.org/abs/2501.12948",
      "image_url": "https://arxiv.org/html/2501.12948v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468934+00:00",
      "created_at": "2026-06-08T02:00:41.468934+00:00",
      "tags": [
        "#OpenSource",
        "#GRPO",
        "#DeepSeek"
      ],
      "target_audience": [
        "Étudiants"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "ea77c58c-636c-5f5f-9a65-c2b0da803533",
      "title": "Claude 3.5 Sonnet : des performances de code qui dépassent GPT-4o",
      "summary": "Claude 3.5 Sonnet domine SWE-bench à 49 % contre 38 % pour GPT-4o — le modèle de code le plus performant aujourd'hui.",
      "why_it_matters": "Delta : 92 % de précision sur HumanEval ; Artifacts rend des composants React en direct. Taux d'hallucination réduit d'environ 30 % sur un contexte de 200K.",
      "actionable_insight": "Demandeurs d'emploi : mettez en avant votre expérience d'intégration de l'API Claude sur votre CV. Entrepreneurs : livrez une démo interactive Artifacts aux investisseurs en une journée.",
      "impact_score": 93,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://www.anthropic.com/news/claude-3-5-sonnet",
      "image_url": "https://cdn.sanity.io/images/4zrzovbb/website/cf2c754458e9102b7334731fb18a965bfeb7ad08-2200x1894.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468927+00:00",
      "created_at": "2026-06-08T02:00:41.468927+00:00",
      "tags": [
        "#Claude",
        "#ModèleDeCode",
        "#Anthropic"
      ],
      "target_audience": [
        "Demandeurs d'emploi",
        "Médias / Public"
      ],
      "audience_segments": [
        "job_seeker",
        "media"
      ]
    },
    {
      "id": "5ea24778-b8e8-5235-a568-ff76b1bb3450",
      "title": "Stanford HAI AI Index 2024 : les dépenses IA mondiales dépassent 100 Md$",
      "summary": "Le rapport annuel Stanford HAI montre une hausse du calcul d'entraînement, des brevets et de l'investissement privé.",
      "why_it_matters": "Delta : l'AI Index intègre Test-Time Compute et la distribution géopolitique du calcul. Les États-Unis investissent ~12× plus que la Chine.",
      "actionable_insight": "Chercheurs : citez les baselines de l'AI Index. Étudiants : étudiez FLOPs vs TCO.",
      "impact_score": 92,
      "golden_section": "research",
      "section_label": "Radar Recherche",
      "original_url": "https://hai.stanford.edu/ai-index/2024-ai-index-report",
      "image_url": "https://arxiv.org/html/2405.01223v2/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468966+00:00",
      "created_at": "2026-06-08T02:00:41.468966+00:00",
      "tags": [
        "#StanfordHAI",
        "#AIIndex",
        "#Calcul"
      ],
      "target_audience": [
        "Gouvernement / Régulateurs",
        "Médias / Public"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "7f613295-5159-5e54-9d1a-2b483fd775b4",
      "title": "Google Gemini 2.0 : des agents multimodaux natifs en production",
      "summary": "Gemini 2.0 Flash déploie un Tool Use natif et une interaction multimodale en temps réel avec une latence inférieure à 200 ms.",
      "why_it_matters": "Delta : passage du LLM texte + plugins à une architecture Agent native intégrant Search, Maps et Code Execution. Coût des tokens multimodaux réduit de 50 %.",
      "actionable_insight": "Entrepreneurs : construisez des boucles Agent recherche-raisonnement-action sur Gemini 2.0. Étudiants : prototypage de démos multimodales via le niveau gratuit de Google AI Studio.",
      "impact_score": 90,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://blog.google/technology/ai/google-gemini-ai/",
      "image_url": "https://arxiv.org/html/2403.05530v2/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468930+00:00",
      "created_at": "2026-06-08T02:00:41.468930+00:00",
      "tags": [
        "#Gemini",
        "#Multimodal",
        "#Agent"
      ],
      "target_audience": [
        "Étudiants"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "5b2185b5-0803-5e8a-9fda-d73340d0906b",
      "title": "Cursor Agent : de l'autocomplétion de code au programmeur autonome",
      "summary": "Cursor Agent planifie, code, exécute des terminaux et corrige les bugs — les interventions humaines passent de 50+ à 3 pour une API CRUD.",
      "why_it_matters": "Delta : boucle complète objectif → décomposition → code → tests → itération. 49,2 % sur SWE-bench Verified.",
      "actionable_insight": "Entrepreneurs : livrez un MVP en 2 heures. Demandeurs d'emploi : taguez votre README « AI-Native · Cursor Agent ».",
      "impact_score": 91,
      "golden_section": "application",
      "section_label": "Cas d'Application",
      "original_url": "https://cursor.com/changelog",
      "image_url": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468945+00:00",
      "created_at": "2026-06-08T02:00:41.468945+00:00",
      "tags": [
        "#Cursor",
        "#ProgrammationIA",
        "#Agent"
      ],
      "target_audience": [
        "Entrepreneurs"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "5905d0e8-3c11-58e5-b692-9ad1b75fd8a2",
      "title": "Test-Time Compute Scaling : le calcul d'inférence comme troisième courbe de croissance",
      "summary": "Paradigme ICLR 2025 : plus de calcul à l'inférence équivaut à 10× de paramètres effectifs. Petit modèle + longue CoT bat les grands modèles.",
      "why_it_matters": "Delta : les Scaling Laws s'étendent de l'entraînement au calcul d'inférence. Le succès d'o1 est la preuve d'ingénierie du TTC scaling.",
      "actionable_insight": "Chercheurs : tracez des courbes de TTC scaling sur vos benchmarks. Entrepreneurs : évaluez le compromis coût entre petit modèle + longue CoT et API de grands modèles.",
      "impact_score": 91,
      "golden_section": "research",
      "section_label": "Radar Recherche",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2409.12931v1/x1.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468941+00:00",
      "created_at": "2026-06-08T02:00:41.468941+00:00",
      "tags": [
        "#TestTimeCompute",
        "#ScalingLaw",
        "#CoT"
      ],
      "target_audience": [
        "Gouvernement / Régulateurs"
      ],
      "audience_segments": [
        "government"
      ]
    },
    {
      "id": "620f3e29-f3e4-5301-a7dd-daca2a611a72",
      "title": "OpenAI Responses API : du prompt à l'ingénierie de workflows",
      "summary": "Le blog ingénierie OpenAI lance Responses API — tool calls multi-tours natifs.",
      "why_it_matters": "Delta : MVPs agents de 2 semaines à 2 jours avec retrieval intégré.",
      "actionable_insight": "Entrepreneurs : MVP démo en 48 h. Étudiants : projet Tool Use + RAG.",
      "impact_score": 89,
      "golden_section": "application",
      "section_label": "Cas d'Application",
      "original_url": "https://openai.com/index/new-tools-for-building-agents/",
      "image_url": "https://cdn.openai.com/chatgpt/share-og.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468981+00:00",
      "created_at": "2026-06-08T02:00:41.468981+00:00",
      "tags": [
        "#OpenAI",
        "#ResponsesAPI",
        "#Agent"
      ],
      "target_audience": [
        "Étudiants"
      ],
      "audience_segments": [
        "student"
      ]
    },
    {
      "id": "7065b2a4-b1cc-5be3-8505-bf0e7d5b5950",
      "title": "Berkeley BAIR : les agents embodied passent de la simulation aux robots",
      "summary": "BAIR publie une pile d'agents multimodaux — Sim-to-Real +40 %.",
      "why_it_matters": "Delta : RL style GRPO — efficacité d'échantillonnage ×3 en robotique.",
      "actionable_insight": "Chercheurs : reproduisez les baselines BAIR. Entrepreneurs : évaluez les MVPs d'agents embodied.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "Radar Recherche",
      "original_url": "https://bair.berkeley.edu/blog/",
      "image_url": "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468970+00:00",
      "created_at": "2026-06-08T02:00:41.468970+00:00",
      "tags": [
        "#Berkeley",
        "#EmbodiedAI",
        "#Agent"
      ],
      "target_audience": [
        "Chercheurs",
        "Entrepreneurs"
      ],
      "audience_segments": [
        "researcher",
        "founder"
      ]
    },
    {
      "id": "ff35eee0-f517-5389-a5ba-34b13146ece4",
      "title": "Résultats ICLR 2025 : le Test-Time Compute domine les meilleurs articles",
      "summary": "Les articles distingués portent sur le Test-Time Compute Scaling — le calcul d'inférence équivaut à une expansion de paramètres ×10.",
      "why_it_matters": "Delta : petit modèle + longue CoT à l'inférence bat des modèles 10× plus grands. o1 valide ce paradigme en production.",
      "actionable_insight": "Chercheurs : reproduisez les baselines des Outstanding Papers. Étudiants : étudiez les critiques publiques d'OpenReview pour maîtriser la conception expérimentale de premier plan.",
      "impact_score": 90,
      "golden_section": "competition",
      "section_label": "Compétitions",
      "original_url": "https://iclr.cc/",
      "image_url": "https://arxiv.org/html/2408.03314v1/x4.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468959+00:00",
      "created_at": "2026-06-08T02:00:41.468959+00:00",
      "tags": [
        "#ICLR2025",
        "#TestTimeCompute",
        "#ConférenceTop"
      ],
      "target_audience": [
        "Chercheurs"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "dd17e3e5-36d2-520c-af48-6ba1107752e9",
      "title": "EU AI Act en vigueur : conformité haut risque et ROI",
      "summary": "L'Acte entre en application — évaluation de conformité pour systèmes à haut risque.",
      "why_it_matters": "Delta : compliance géopolitique contraignante ; représentants UE et QMS avant T4 2026.",
      "actionable_insight": "Régulateurs : catalogues Annexe III. Entrepreneurs : ROI d'entrée sur le marché UE.",
      "impact_score": 90,
      "golden_section": "work",
      "section_label": "Impact Emploi",
      "original_url": "https://artificialintelligenceact.eu/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468999+00:00",
      "created_at": "2026-06-08T02:00:41.468999+00:00",
      "tags": [
        "#EUAIAct",
        "#Conformité",
        "#Géopolitique"
      ],
      "target_audience": [
        "Demandeurs d'emploi",
        "Gouvernement / Régulateurs"
      ],
      "audience_segments": [
        "job_seeker",
        "government"
      ]
    },
    {
      "id": "5619b903-9fa5-5b52-8c9d-68232c900d63",
      "title": "a16z AI Market Map 2025 : l'infra agents = 40 % du paysage",
      "summary": "a16z met à jour sa carte — orchestration, inférence et evals = 40 %.",
      "why_it_matters": "Delta : fenêtre ROI 12–18 mois ; capital intense sur la couche agent.",
      "actionable_insight": "Investisseurs : matrice modèle/infra/agent/app. Entrepreneurs : moat open + commercial.",
      "impact_score": 88,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://a16z.com/ai-market-map/",
      "image_url": "https://arxiv.org/html/2305.18290v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468995+00:00",
      "created_at": "2026-06-08T02:00:41.468995+00:00",
      "tags": [
        "#a16z",
        "#MarketMap",
        "#AgentInfra"
      ],
      "target_audience": [
        "Investisseurs"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "022280b3-4780-5e49-b8fe-348d1c2aaf02",
      "title": "Mamba : la modélisation séquentielle à complexité linéaire défie les Transformers",
      "summary": "Le SSM sélectif de Mamba offre une inférence en O(n) — 5× plus rapide que les Transformers sur de longues séquences.",
      "why_it_matters": "Delta : mise à l'échelle linéaire jusqu'à 1 million de tokens de contexte. Qualité GPT-3 sur les tâches ADN/audio avec 1/4 des paramètres.",
      "actionable_insight": "Chercheurs : reproduisez arXiv:2312.11805 et comparez la latence Mamba vs Transformer. Étudiants : SSM vs Attention est un sujet phare des entretiens systèmes en 2025.",
      "impact_score": 88,
      "golden_section": "research",
      "section_label": "Radar Recherche",
      "original_url": "https://arxiv.org/abs/2312.11805",
      "image_url": "https://arxiv.org/html/2408.03314v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468938+00:00",
      "created_at": "2026-06-08T02:00:41.468938+00:00",
      "tags": [
        "#Mamba",
        "#SSM",
        "#InférenceEfficace"
      ],
      "target_audience": [
        "Chercheurs"
      ],
      "audience_segments": [
        "researcher"
      ]
    },
    {
      "id": "64b9bb4d-aa0f-5cab-8ead-f4444988119e",
      "title": "Constitution de sécurité Anthropic : Constitutional AI redéfinit l'alignement",
      "summary": "Anthropic met à jour Core Views on AI Safety — principes dans model cards et politiques API.",
      "why_it_matters": "Delta : au-delà du RLHF — cadres constitutionnels ; RFP exigent model cards + red-team.",
      "actionable_insight": "Régulateurs : exigez la divulgation Constitutional AI. Médias : distinguez ingénierie et marketing.",
      "impact_score": 86,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://www.anthropic.com/news/core-views-on-ai-safety",
      "image_url": "https://arxiv.org/html/2409.12931v1/x3.png",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468984+00:00",
      "created_at": "2026-06-08T02:00:41.468984+00:00",
      "tags": [
        "#Anthropic",
        "#SécuritéIA",
        "#ConstitutionalAI"
      ],
      "target_audience": [
        "Gouvernement / Régulateurs",
        "Médias / Public"
      ],
      "audience_segments": [
        "government",
        "media"
      ]
    },
    {
      "id": "fbaba309-9651-5cb5-aac6-b83c3c89091d",
      "title": "NVIDIA NIM : microservices d'inférence — TCO −40 %",
      "summary": "Le blog technique NVIDIA lance NIM — moteurs TensorRT-LLM avec SLA conteneurisés.",
      "why_it_matters": "Delta : acheter des SLAs d'inférence plutôt que des GPU ; INT4/FP8 + moteurs précompilés.",
      "actionable_insight": "Demandeurs d'emploi : NIM + vLLM au CV. Entrepreneurs : inférence ≤12 % de l'ARR.",
      "impact_score": 85,
      "golden_section": "application",
      "section_label": "Cas d'Application",
      "original_url": "https://developer.nvidia.com/blog/nvidia-nim-offers-optimized-inference-microservices-for-ai-models/",
      "image_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468977+00:00",
      "created_at": "2026-06-08T02:00:41.468977+00:00",
      "tags": [
        "#NVIDIA",
        "#NIM",
        "#CoûtToken"
      ],
      "target_audience": [
        "Demandeurs d'emploi"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "3b3c82a9-e3fa-5663-879d-c3925ebb0f44",
      "title": "Vercel AI SDK 3.0 : Generative UI amène les agents au navigateur",
      "summary": "Blog dev Vercel — composants UI streaming + inférence edge sur Vercel/Supabase.",
      "why_it_matters": "Delta : des chat boxes à Generative UI ; économie de tokens via cache edge.",
      "actionable_insight": "Entrepreneurs : agent SaaS en 24 h. Demandeurs d'emploi : Generative UI différenciant.",
      "impact_score": 84,
      "golden_section": "application",
      "section_label": "Cas d'Application",
      "original_url": "https://vercel.com/blog/ai-sdk-3-generative-ui",
      "image_url": "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468988+00:00",
      "created_at": "2026-06-08T02:00:41.468988+00:00",
      "tags": [
        "#Vercel",
        "#AISDK",
        "#GenerativeUI"
      ],
      "target_audience": [
        "Entrepreneurs",
        "Étudiants"
      ],
      "audience_segments": [
        "founder",
        "student"
      ]
    },
    {
      "id": "2632d4c9-ff62-593a-af80-ab922cdd66f9",
      "title": "WIRED × MIT TR : fossé de compréhension publique à l'ère Agent 2025",
      "summary": "WIRED et MIT TR : les capacités agent devancent de ~18 mois la compréhension publique.",
      "why_it_matters": "Delta : récit média vers « combien de chaînes décisionnelles un agent remplace » ; équité tech WEF.",
      "actionable_insight": "Médias : démo + limites. Étudiants : portfolio de littératie IA.",
      "impact_score": 83,
      "golden_section": "headline",
      "section_label": "À la Une",
      "original_url": "https://www.wired.com/tag/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.469006+00:00",
      "created_at": "2026-06-08T02:00:41.469006+00:00",
      "tags": [
        "#WIRED",
        "#MITTechReview",
        "#ÈreAgent"
      ],
      "target_audience": [
        "Médias / Public"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6ab6c04b-dccf-5c6d-a049-1d816d8eea13",
      "title": "Hugging Face Open R1 : la communauté reproduit DeepSeek-R1 en open source",
      "summary": "Open R1 reproduit le pipeline GRPO complet avec des outils 100 % ouverts — modèle de raisonnement 7B en 48 h sur 8×H100.",
      "why_it_matters": "Delta : le raisonnement passe d'une API boîte noire à une ingénierie reproductible. Chacun peut forker et affiner pour des domaines verticaux.",
      "actionable_insight": "Étudiants : forkez huggingface/open-r1 et exécutez du SFT sur Colab. Entrepreneurs : entraînez des modèles spécialisés et réduisez les coûts d'API de 80 %.",
      "impact_score": 87,
      "golden_section": "application",
      "section_label": "Cas d'Application",
      "original_url": "https://huggingface.co/blog/open-r1",
      "image_url": "https://raw.githubusercontent.com/huggingface/open-r1/main/assets/plan-of-attack.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468949+00:00",
      "created_at": "2026-06-08T02:00:41.468949+00:00",
      "tags": [
        "#HuggingFace",
        "#OpenR1",
        "#OpenSource"
      ],
      "target_audience": [
        "Médias / Public"
      ],
      "audience_segments": [
        "media"
      ]
    },
    {
      "id": "6d56cfdf-f83d-5090-a0a6-9bcf0bb4f6d4",
      "title": "NIST AI RMF 1.0 : référence fédérale mondiale de gestion des risques IA",
      "summary": "NIST publie AI RMF 1.0 — Map-Measure-Manage-Govern comme standard de facto.",
      "why_it_matters": "Delta : compliance by design ; double voie transatlantique avec EU AI Act.",
      "actionable_insight": "Régulateurs : intégrez RMF aux achats publics. Investisseurs : score RMF en DD.",
      "impact_score": 87,
      "golden_section": "work",
      "section_label": "Impact Emploi",
      "original_url": "https://www.nist.gov/itl/ai-risk-management-framework",
      "image_url": "https://arxiv.org/html/2305.18290v1/x2.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.469003+00:00",
      "created_at": "2026-06-08T02:00:41.469003+00:00",
      "tags": [
        "#NIST",
        "#AIRMF",
        "#Risque"
      ],
      "target_audience": [
        "Gouvernement / Régulateurs",
        "Investisseurs"
      ],
      "audience_segments": [
        "government",
        "investor"
      ]
    },
    {
      "id": "42a5831a-7035-500c-a90a-b5484b979ae5",
      "title": "arXiv : lois d'échelle multi-agents — point d'inflexion collaboratif",
      "summary": "Des équipes de 4–8 agents gagnent en super-linéaire avec un coût token linéaire.",
      "why_it_matters": "Delta : Test-Time Compute multi-agent ; LangGraph/CrewAI devient le goulot.",
      "actionable_insight": "Chercheurs : suivez les reproductions OpenReview. Entrepreneurs : 4 agents réduisent ~30 % de tokens.",
      "impact_score": 87,
      "golden_section": "research",
      "section_label": "Radar Recherche",
      "original_url": "https://arxiv.org/abs/2408.03314",
      "image_url": "https://arxiv.org/html/2408.03314v1/x1.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468974+00:00",
      "created_at": "2026-06-08T02:00:41.468974+00:00",
      "tags": [
        "#arXiv",
        "#MultiAgent",
        "#ScalingLaw"
      ],
      "target_audience": [
        "Entrepreneurs"
      ],
      "audience_segments": [
        "founder"
      ]
    },
    {
      "id": "490445b8-6847-5aa2-b146-269b4b9d392a",
      "title": "NeurIPS 2024 : la fusion MoE + RLHF capte 30 % des Spotlights",
      "summary": "La fusion Mixture-of-Experts + RLHF représente 30 % des articles Spotlight — gains d'efficacité de 5×.",
      "why_it_matters": "Delta : MoE évolue du routage par thème au routage par type de raisonnement. DeepSeek-V3 671B prouve des « équipes d'experts à la demande ».",
      "actionable_insight": "Chercheurs : comparez le routage Switch Transformer vs DeepSeek-MoE. Entrepreneurs : le support MoE dans vLLM réduit les coûts de déploiement de 60 %.",
      "impact_score": 86,
      "golden_section": "competition",
      "section_label": "Compétitions",
      "original_url": "https://neurips.cc/Conferences/2024",
      "image_url": "https://arxiv.org/html/2412.19437v1/x3.png",
      "image_style": "chart",
      "published_at": "2026-06-08T02:00:41.468963+00:00",
      "created_at": "2026-06-08T02:00:41.468963+00:00",
      "tags": [
        "#NeurIPS2024",
        "#MoE",
        "#RLHF"
      ],
      "target_audience": [
        "Investisseurs"
      ],
      "audience_segments": [
        "investor"
      ]
    },
    {
      "id": "3b7274db-6092-59ae-ba12-064e88623ba6",
      "title": "MIT Tech Review : l'IA refond 40 % des workflows des cols blancs",
      "summary": "Les Agents LLM pénètrent désormais 40 % du travail intellectuel — documents, revue de code, analytique — contre 12 % auparavant.",
      "why_it_matters": "Delta : passage de la productivité individuelle à la refonte des workflows d'équipe. Prompt Engineering et Agent Orchestration deviennent des compétences de base.",
      "actionable_insight": "Demandeurs d'emploi : publiez une démo Multi-Agent LangGraph sur GitHub. Étudiants : cours de systèmes IA vs théorie ML pure — écart d'employabilité de 35 %.",
      "impact_score": 82,
      "golden_section": "work",
      "section_label": "Impact Emploi",
      "original_url": "https://www.technologyreview.com/topic/artificial-intelligence/",
      "image_url": "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468952+00:00",
      "created_at": "2026-06-08T02:00:41.468952+00:00",
      "tags": [
        "#EmploiIA",
        "#Workflow",
        "#Agent"
      ],
      "target_audience": [
        "Demandeurs d'emploi"
      ],
      "audience_segments": [
        "job_seeker"
      ]
    },
    {
      "id": "fe9d3314-8b86-5b2a-a2ef-bb01d9020e0c",
      "title": "Rapport NVIDIA : la demande d'inférence entreprise sera multipliée par 10 en 3 ans",
      "summary": "Le calcul d'inférence LLM en entreprise croît de 10× entre 2024 et 2027 — les boucles multi-tours des Agents en sont le principal moteur.",
      "why_it_matters": "Delta : les boucles Agent multiplient la consommation de tokens par 100. H200 + TensorRT-LLM réduit le coût unitaire par 3, mais la dépense totale augmente encore de 5×.",
      "actionable_insight": "Entrepreneurs : plafonnez l'inférence à 15 % de l'ARR via vLLM + quantification. Demandeurs d'emploi : maîtrisez TensorRT-LLM et la quantification INT4/FP8.",
      "impact_score": 79,
      "golden_section": "work",
      "section_label": "Impact Emploi",
      "original_url": "https://blogs.nvidia.com/blog/what-is-generative-ai/",
      "image_url": "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=1600&auto=format&fit=crop&q=95",
      "image_style": "hero",
      "published_at": "2026-06-08T02:00:41.468956+00:00",
      "created_at": "2026-06-08T02:00:41.468956+00:00",
      "tags": [
        "#NVIDIA",
        "#Inférence",
        "#OptimisationDesCoûts"
      ],
      "target_audience": [
        "Investisseurs"
      ],
      "audience_segments": [
        "investor"
      ]
    }
  ]
} as Record<Locale, MockArticleRecord[]>;

export function getLocalMockArticles(lang: Locale, persona: Persona): Article[] {
  const pool = MOCK_ARTICLES_BY_LOCALE[lang] ?? MOCK_ARTICLES_BY_LOCALE.zh;
  const filtered =
    persona === "all"
      ? pool
      : pool.filter((article) => article.audience_segments.includes(persona));
  return filtered.map(({ audience_segments: _segments, ...article }) => article);
}
