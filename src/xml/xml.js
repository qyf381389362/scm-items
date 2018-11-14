const XML = {
  '系统需求': `
  <SoftwareRequirementProcess>
    <Objectives>
      <Objective id= "SROb-01">开发软件系统需求</Objective>
    </Objectives>
    <Activities>
      <SRP id="SRP-03" name="开发系统需求（条目）">
        <InputData>
        </InputData>
        <OutputData>
          <SR id="" name=""></SR>	
        </OutputData>		
      </SRP>
    </Activities>	
  </SoftwareRequirementProcess>`,

  '软件等级': '',

  '软件合格审定计划': `<ThePlanforSoftwareAspectsofCertification>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="运行环境要求">
        <Part id="PA-1" name="硬件环境"></Part>
        <Part id="PA-2" name="软件环境"></Part>
      </Section>
      <Section id="SE-4" name="安全特征"></Section>
      <Section id="SE-5" name="文档概述"></Section>
      <Section id="SE-6" name="与其他文档关系"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="软件概述">
      <Section id="SE-1" name="软件功能概述"></Section>
      <Section id="SE-2" name="软件架构"></Section>
      <Section id="SE-3" name="资源共享"></Section>
      <Section id="SE-4" name="分区"></Section>
      <Section id="SE-5" name="余度和故障容错"></Section>
      <Section id="SE-6" name="定时和调度策略"></Section>
    </Chapter>
    <Chapter id="CH-4" name="审定考虑">
      <Section id="SE-1" name="审定基础"></Section>
      <Section id="SE-2" name="系统安全性评估"></Section>
      <Section id="SE-3" name="软件等级"></Section>
      <Section id="SE-4" name="符合性方法"></Section>
    </Chapter>
    <Chapter id="CH-5" name="软件生命周期">
      <Section id="SE-1" name="软件生命周期概述">
        <Part id="PA-1" name="过程"></Part>
        <Part id="PA-2" name="阶段"></Part>
      </Section>
      <Section id="SE-2" name="项目组织架构和职责"></Section>
      <Section id="SE-3" name="项目立项过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
      <Section id="SE-4" name="软件计划过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
      <Section id="SE-5" name="软件需求过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
      <Section id="SE-6" name="软件设计过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
      <Section id="SE-7" name="软件编码过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
      <Section id="SE-8" name="软件集成过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
      <Section id="SE-9" name="软件总结过程">
        <Part id="PA-1" name="概要"></Part>
        <Part id="PA-2" name="目标"></Part>
        <Part id="PA-3" name="活动"></Part>
        <Part id="PA-4" name="输入"></Part>
        <Part id="PA-5" name="输出"></Part>
        <Part id="PA-6" name="迁移准则"></Part>
      </Section>
    </Chapter>
    <Chapter id="CH-6" name="软件生命周期数据">
      <Section id="SE-1" name="文档配置项"></Section>
      <Section id="SE-2" name="呈报给审定机构的软件生命周期数据"></Section>
    </Chapter>
    <Chapter id="CH-7" name="其他考虑">
      <Section id="SE-1" name="工具及鉴定要求">
        <Part id="PA-1" name="软件开发工具及鉴定要求"></Part>
        <Part id="PA-2" name="软件验证工具及鉴定要求"></Part>
        <Part id="PA-3" name="管理和支持类工具及鉴定要求"></Part>
      </Section>
      <Section id="SE-2" name="符合性的替代方法"></Section>
      <Section id="SE-3" name="以前开发的软件"></Section>
      <Section id="SE-4" name="可选项软件"></Section>
      <Section id="SE-5" name="用户可修改软件"></Section>
      <Section id="SE-6" name="COTS软件"></Section>
      <Section id="SE-7" name="外场可加载软件"></Section>
      <Section id="SE-8" name="多版本非相似软件"></Section>
      <Section id="SE-9" name="产品服务历史"></Section>
    </Chapter>
    <Chapter id="CH-8" name="软件研制管理">
      <Section id="SE-1" name="项目进度"></Section>
      <Section id="SE-2" name="软件规模估算"></Section>
      <Section id="SE-3" name="度量分析"></Section>
      <Section id="SE-4" name="跟踪与监控"></Section>
      <Section id="SE-5" name="风险管理">
        <Part id="PA-1" name="风险参数"></Part>
        <Part id="PA-2" name="风险管理策略"></Part>
        <Part id="PA-3" name="风险管理规程"></Part>
      </Section>
    </Chapter>
    <Chapter id="CH-9" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </ThePlanforSoftwareAspectsofCertification>`,

  '软件开发计划': `
  <SoftwareDevelopmentPlan>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
      <Section id="SE-4" name="与其他计划关系"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="软件开发管理"></Chapter>
    <Chapter id="CH-4" name="软件开发标准"></Chapter>
    <Chapter id="CH-5" name="软件开发过程">
      <Section id="SE-1" name="概要"></Section>
      <Section id="SE-2" name="软件需求过程">
        <Part id="PA-1" name="目标"></Part>
        <Part id="PA-2" name="活动"></Part>
        <Part id="PA-3" name="输入"></Part>
        <Part id="PA-4" name="输出"></Part>
        <Part id="PA-5" name="迁移准则"></Part>
      </Section>
      <Section id="SE-3" name="设计过程">
        <Part id="PA-1" name="目标"></Part>
        <Part id="PA-2" name="活动"></Part>
        <Part id="PA-3" name="输入"></Part>
        <Part id="PA-4" name="输出"></Part>
        <Part id="PA-5" name="迁移准则"></Part>
      </Section>
      <Section id="SE-4" name="软件编码过程">
        <Part id="PA-1" name="目标"></Part>
        <Part id="PA-2" name="活动"></Part>
        <Part id="PA-3" name="输入"></Part>
        <Part id="PA-4" name="输出"></Part>
        <Part id="PA-5" name="迁移准则"></Part>
      </Section>
      <Section id="SE-5" name="软件集成过程">
        <Part id="PA-1" name="目标"></Part>
        <Part id="PA-2" name="活动"></Part>
        <Part id="PA-3" name="输入"></Part>
        <Part id="PA-4" name="输出"></Part>
        <Part id="PA-5" name="迁移准则"></Part>
      </Section>
    </Chapter>
    <Chapter id="CH-6" name="软件开发活动">
      <Section id="SE-1" name="编程语言"></Section>
      <Section id="SE-2" name="软件开发工具及鉴定要求"></Section>
      <Section id="SE-3" name="管理和支持类工具及鉴定要求"></Section>
      <Section id="SE-4" name="硬件环境"></Section>
      <Section id="SE-5" name="软件环境"></Section>
    </Chapter>
    <Chapter id="CH-7" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareDevelopmentPlan>`,

  '软件验证计划': `
  <SoftwareVerificationPlan>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
      <Section id="SE-4" name="与其他计划关系"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="组织和职责"></Chapter>
    <Chapter id="CH-4" name="软件验证活动">
      <Section id="SE-1" name="概要"></Section>
      <Section id="SE-2" name="核查">
        <Part id="PA-1" name="迁移准则"></Part>
        <Part id="PA-2" name="软件计划和软件标准的核查要点"></Part>
        <Part id="PA-3" name="软件高层需求的核查要点"></Part>
        <Part id="PA-4" name="软件低层需求的核查要点"></Part>
        <Part id="PA-5" name="软件架构的核查要点"></Part>
        <Part id="PA-6" name="源代码的核查要点"></Part>
        <Part id="PA-7" name="集成输出的核查要点"></Part>
        <Part id="PA-8" name="软件测试用例、测试规程的核查要点"></Part>
        <Part id="PA-9" name="软件测试结果核查要点"></Part>
      </Section>
      <Section id="SE-3" name="评审">
        <Part id="PA-1" name="迁移准则"></Part>
        <Part id="PA-2" name="软件计划和软件标准的评审要点"></Part>
        <Part id="PA-3" name="软件高层需求的评审要点"></Part>
        <Part id="PA-4" name="软件低层需求的评审要点"></Part>
        <Part id="PA-5" name="软件架构的评审要点"></Part>
        <Part id="PA-6" name="源代码的评审要点"></Part>
        <Part id="PA-7" name="集成输出的评审要点"></Part>
        <Part id="PA-8" name="软件测试用例、测试规程的评审要点"></Part>
        <Part id="PA-9" name="软件测试结果评审要点"></Part>
      </Section>
      <Section id="SE-4" name="测试">
        <Part id="PA-1" name="迁移准则"></Part>
        <Part id="PA-2" name="测试用例设计方法"></Part>
        <Part id="PA-3" name="测试规程设计方法"></Part>
        <Part id="PA-4" name="测试执行与测试结果的记录"></Part>
        <Part id="PA-5" name="可追踪性"></Part>
      </Section>
      <Section id="SE-5" name="分析">
        <Part id="PA-1" name="迁移准则"></Part>
        <Part id="PA-2" name="需求覆盖分析"></Part>
        <Part id="PA-3" name="源代码的结构覆盖分析"></Part>
        <Part id="PA-4" name="源代码静态规则分析"></Part>
        <Part id="PA-5" name="数据耦合"></Part>
        <Part id="PA-6" name="控制耦合"></Part>
        <Part id="PA-7" name="源代码与目标代码的追踪分析"></Part>
      </Section>
    </Chapter>
    <Chapter id="CH-5" name="软件验证环境及其鉴定要求">
      <Section id="SE-1" name="宿主机模拟仿真环境"></Section>
      <Section id="SE-2" name="宿主机测试环境"></Section>
      <Section id="SE-3" name="目标机真实测试环境"></Section>
      <Section id="SE-4" name="测试环境的审定信用"></Section>
      <Section id="SE-5" name="软件验证工具及鉴定要求"></Section>
      <Section id="SE-6" name="管理和支持类工具及鉴定要求"></Section>
    </Chapter>
    <Chapter id="CH-6" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareVerificationPlan>`,

  '软件配置管理计划': `
  <SoftwareConfigurationManagementPlan>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
      <Section id="SE-4" name="与其他计划关系"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="组织和职责"></Chapter>
    <Chapter id="CH-4" name="软件配置管理活动">
      <Section id="SE-1" name="配置标识">
        <Part id="PA-1" name="文档配置标识"></Part>
        <Part id="PA-2" name="数据元配置标识"></Part>
      </Section>
      <Section id="SE-2" name="基线和可追踪性">
        <Part id="PA-1" name="基线建立的方法"></Part>
        <Part id="PA-2" name="基线的种类及组成"></Part>
        <Part id="PA-3" name="基线建立的时机"></Part>
        <Part id="PA-4" name="基线的保护"></Part>
        <Part id="PA-5" name="配置项与基线的追踪性"></Part>
      </Section>
      <Section id="SE-3" name="问题报告">
        <Part id="PA-1" name="问题报告的内容"></Part>
        <Part id="PA-2" name="问题报告的创建"></Part>
        <Part id="PA-3" name="问题报告的处理流程"></Part>
        <Part id="PA-4" name="与变更控制活动的关系"></Part>
      </Section>
      <Section id="SE-4" name="变更控制及评审">
        <Part id="PA-1" name="变更请求的内容"></Part>
        <Part id="PA-2" name="变更请求的提出"></Part>
        <Part id="PA-3" name="变更请求的处理流程"></Part>
        <Part id="PA-4" name="变更影响分析"></Part>
        <Part id="PA-5" name="保持完整性的方法"></Part>
      </Section>
      <Section id="SE-5" name="配置状态记实">
        <Part id="PA-1" name="配置管理状态报告的数据"></Part>
        <Part id="PA-2" name="配置管理状态数据的存储"></Part>
        <Part id="PA-3" name="配置管理状态数据的检索"></Part>
        <Part id="PA-4" name="配置管理状态数据的可用性"></Part>
      </Section>
      <Section id="SE-6" name="归档、检索和发布"></Section>
      <Section id="SE-7" name="软件加载控制"></Section>
      <Section id="SE-8" name="软件生命周期环境控制"></Section>
    </Chapter>
    <Chapter id="CH-5" name="软件配置管理过程的迁移准则"></Chapter>
    <Chapter id="CH-6" name="软件配置管理环境"></Chapter>
    <Chapter id="CH-7" name="软件配置管理数据">
      <Section id="SE-1" name="软件配置管理记录"></Section>
      <Section id="SE-2" name="软件配置索引"></Section>
      <Section id="SE-3" name="软件生命周期环境配置索引"></Section>
    </Chapter>
    <Chapter id="CH-8" name="对供货单位的控制"></Chapter>
    <Chapter id="CH-9" name="进度表"></Chapter>
    <Chapter id="CH-10" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareConfigurationManagementPlan>`,

  '软件质量保证计划': `
  <SoftwareQualityAssurancePlan>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
      <Section id="SE-4" name="与其他计划关系"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="组织和职责"></Chapter>
    <Chapter id="CH-4" name="标准、条例和约定"></Chapter>
    <Chapter id="CH-5" name="活动审计">
      <Section id="SE-1" name="软件过程的审计"></Section>
      <Section id="SE-2" name="软件符合性评审"></Section>
      <Section id="SE-3" name="活动审计的迁移准则"></Section>
    </Chapter>
    <Chapter id="CH-6" name="工作产品审计">
      <Section id="SE-1" name="文档配置项的审计"></Section>
      <Section id="SE-2" name="数据元配置项的审计"></Section>
      <Section id="SE-3" name="工作产品审计的迁移准则"></Section>
    </Chapter>
    <Chapter id="CH-7" name="不符合问题的解决"></Chapter>
    <Chapter id="CH-8" name="工具、技术和方法"></Chapter>
    <Chapter id="CH-9" name="对供货单位的控制"></Chapter>
    <Chapter id="CH-10" name="记录的收集、维护和保存"></Chapter>
    <Chapter id="CH-11" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareQualityAssurancePlan>`,

  '软件需求标准': `
  <SoftwareRequirementStandards>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="软件需求的数据特性">
      <Section id="SE-1" name="软件需求特征要求"></Section>
      <Section id="SE-2" name="软件需求总体要求"></Section>
    </Chapter>
    <Chapter id="CH-4" name="软件需求的开发方法">
      <Section id="SE-1" name="需求的结构化分析方法">
        <Part id="PA-1" name="数据流图"></Part>
        <Part id="PA-2" name="数据流图"></Part>
      </Section>
      <Section id="SE-2" name="需求的追踪方法"></Section>
    </Chapter>
    <Chapter id="CH-5" name="软件需求的表述规则"></Chapter>
    <Chapter id="CH-6" name="派生需求处理"></Chapter>
    <Chapter id="CH-7" name="软件需求工具"></Chapter>
    <Chapter id="CH-8" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareRequirementStandards>`,

  '软件设计标准': `
  <SoftwareDesignStandards>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="软件设计方法和活动">
      <Section id="SE-1" name="模块结构图">
        <Part id="PA-1" name="模块结构图的定义"></Part>
        <Part id="PA-2" name="模块结构图的特征"></Part>
      </Section>
      <Section id="SE-2" name="程序流程图"></Section>
      <Section id="SE-3" name="软件设计活动">
        <Part id="PA-1" name="软件分析"></Part>
        <Part id="PA-2" name="软件设计追踪"></Part>
      </Section>
    </Chapter>
    <Chapter id="CH-4" name="命名约定及特征要求">
      <Section id="SE-1" name="命名约定"></Section>
      <Section id="SE-2" name="特征要求"></Section>
    </Chapter>
    <Chapter id="CH-5" name="影响条件"></Chapter>
    <Chapter id="CH-6" name="工具使用约束"></Chapter>
    <Chapter id="CH-7" name="设计约束"></Chapter>
    <Chapter id="CH-8" name="复杂性约束"></Chapter>
    <Chapter id="CH-9" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareDesignStandards>`,

  '软件编码标准': `
  <SoftwareCodingStandards>
    <Chapter id="CH-1" name="范围">
      <Section id="SE-1" name="标识"></Section>
      <Section id="SE-2" name="系统概述">
        <Part id="PA-1" name="基本信息"></Part>
        <Part id="PA-2" name="系统架构"></Part>
        <Part id="PA-3" name="接口"></Part>
      </Section>
      <Section id="SE-3" name="文档概述"></Section>
    </Chapter>
    <Chapter id="CH-2" name="参考文档"></Chapter>
    <Chapter id="CH-3" name="软件编程语言"></Chapter>
    <Chapter id="CH-4" name="源代码表达标准">
      <Section id="SE-1" name="代码布局">
        <Part id="PA-1" name="间距"></Part>
        <Part id="PA-2" name="缩排"></Part>
        <Part id="PA-3" name="注释"></Part>
      </Section>
      <Section id="SE-2" name="文件头"></Section>
      <Section id="SE-3" name="函数布局"></Section>
      <Section id="SE-4" name="头文件布局">
        <Part id="PA-1" name="结构"></Part>
        <Part id="PA-2" name="声明次序"></Part>
      </Section>
    </Chapter>
    <Chapter id="CH-5" name="命名约定">
      <Section id="SE-1" name="标识符选用范围"></Section>
      <Section id="SE-2" name="通用原则"></Section>
    </Chapter>
    <Chapter id="CH-6" name="条件和约束"></Chapter>
    <Chapter id="CH-7" name="编码工具的使用约束"></Chapter>
    <Chapter id="CH-8" name="注释">
      <Section id="SE-1" name="术语"></Section>
      <Section id="SE-2" name="缩写词"></Section>
    </Chapter>
  </SoftwareCodingStandards>`,

  '源代码': `
  <SoftwareCodingProcess>
    <DocumentOverview>
      <DocumentIdentity>SSC_1.0</DocumentIdentity>
      <DocumentName> software Source Code document</DocumentName>
      <Purpose>
        describe the source code development process.
      </Purpose>
      <Scope>
        source code with different versions.
      </Scope>
      <Annotation>
        <Abbreviations>
          LLR: low-level requirements
        </Abbreviations>			
        <Reference>
          "Software Development Planning"
          "Software Design Description"
          "Software Code Standards"
        </Reference>
      </Annotation>
    </DocumentOverview>
    
    <Objectives>
      Develop software source code
    </Objectives>

    <Inputs>
      Low-level requirements
      Software architecture
      Software development planning
      Software code standards
    </Inputs>

    <Outputs>
      Source code
      Inadequate or incorrect inputs feedback
      autocode generators description
    </Outputs>

    <Activities>
      <Activity>develop source code</Activity>
      <Activity>inadequate or incorrect feedback</Activity>
      <Activity>……</Activity>
    </Activities>
    
    <ModuleDescription>
      <HardwareLayer>
        <Module>
          <Function>startup code</Function>
          <Name> Startup.asm</Name>
          <Version>1.0</Version>
          <ReleaseDate> 2013/6/3</ReleaseDate>
          <Revision>No</Revision>
        </Module>
      </HardwareLayer>
      <ApplicationLayer>
        <Module>
          <Function>System Timer</Function>
          <Name>systimer.c</Name>
          <Version>1.0</Version>
          <ReleaseDate> 2013/6/3</ReleaseDate>
          <Revision>No</Revision>
        </Module>
        <Module>
          <Function>Serial Interface</Function>
          <Name>serial.c</Name>
          <Version>1.0</Version>
          <ReleaseDate> 2013/6/3</ReleaseDate>
          <Revision>No</Revision>
        </Module>
        <Module>
          <Function>System Definitions</Function>
          <Name>sysdefs.h</Name>
          <Version>1.0</Version>
          <ReleaseDate> 2013/6/3</ReleaseDate>
          <Revision>No</Revision>
        </Module>
      </ApplicationLayer>
      <ProjectSupportFiles>
        <ProjectMakeFile>Project.Mak</ProjectMakeFile>
        <ProjectLinkerCommandFile>ProjLink.Cmd</ProjectLinkerCommandFile>
      </ProjectSupportFiles>
    </ModuleDescription>
    
    <AutocodeGenerator Attribute=" Yes">
      <Constraints></Constraints>
      <Conformance>Yes</Conformance>
      <Description></Description>
    </AutocodeGenerator>

    <IncorrectInputs Attribute="Yes">
      <Reasons></Reasons>
      <Feedback>反馈到具体过程说明</Feedback>
    </IncorrectInputs>

    <CodeTexts>
      source code list
    </CodeTexts>

    <TransitionCriteria>
      All the source codes are verified.
    </TransitionCriteria>

  </SoftwareCodingProcess>`,

  '软件验证结果': `
  <SoftwareVerificationResults>
    <DocumentOverview>
      <DocumentIdentity>SVR_1.0</DocumentIdentity>
      <DocumentName> software verification results  document</DocumentName>
      <Purpose>
        record test results
        analyse test coverage
      </Purpose>
      <Scope>
        Record and anlyze all the test results for software requirements, design, source code executable object code, test cases, and test procedures.
      </Scope>
      <Annotation>
        <Abbreviations>
          SVR: software verification results
          SVP: software verification procedures
        </Abbreviations>			
        <Reference>
          "Software Development Plan"
          "Software Verification Plan"
          "Software Requirements Standards"
          "Software Design Standards"
          "Software Code Standards"
          "Software Requirements Data"
          "Design Description"
          "Source Code"
          "Executable Object Code"
          "Software Verification Cases and Procedures"
        </Reference>
      </Annotation>
    </DocumentOverview>
    
    <Objectives>
      record test results
      analyse test coverage
      analyse test results
    </Objectives>

    <Inputs>
      verification cases
      verification procedures
    </Inputs>

    <Outputs>
      test results
      coverage analysis
      problems reports
    </Outputs>

    <Activities>
      <Activity></Activity>
      <Activity>design the verification cases and procedures for high-level requirements</Activity>
      <Activity>design the verification cases and procedures for low-level requirements</Activity>
      <Activity>design the verification cases and procedures for software architecture</Activity>
      <Activity>design the verification cases and procedures for source code</Activity>
      <Activity>design the verification cases and procedures for integration process</Activity>
      <Activity>design the verification cases and procedures for verification process</Activity>
    </Activities>
    
    <VerificationResults>
      <HLRTestResults>
        <HLRTR ID=" " Name=" ">
          <CorrespondingTestCase>HLRTC_001</CorrespondingTestCase>
          <TestedSoftwareVersion>V1.0</TestedSoftwareVersion>
          <ActualResult></ActualResult>
          <Passed>Yes</Passed>
        </HLRTR>
        <ResultsAnalysis>
          <Compliance>Compliance with system requirements</Compliance>
          <Accuracy>accurate and unambiguous</Accuracy>
          <Consistency>no conflict</Consistency>
          <Conformance>Conformance to standards</Conformance>
          <Compatibility>Compatibility with the target computer</Compatibility>
          <Verifiability>can be verified</Verifiability>
          <Traceability></Traceability>
          <Algorithm>Algorithm accuracy</Algorithm>
        </ResultsAnalysis>
      </HLRTestResults>
      <LLRTestResults>
        <LLRTR ID=" " Name=" ">
          <CorrespondingTestCase>LLRTC_001</CorrespondingTestCase>
          <TestedSoftwareVersion>V1.0</TestedSoftwareVersion>
          <ActualResult></ActualResult>
          <Passed>Yes</Passed>
        </LLRTR>
        <ResultsAnalysis>
          <Compliance>Compliance with high-level requirements</Compliance>
          <Accuracy>accurate and unambiguous</Accuracy>
          <Consistency>no conflict</Consistency>
          <Conformance>Conformance to standards</Conformance>
          <Compatibility>Compatibility with the target computer</Compatibility>
          <Verifiability>can be verified</Verifiability>
          <Traceability></Traceability>
          <Algorithm>Algorithm accuracy</Algorithm>
        </ResultsAnalysis>
      </LLRTestResults>
      <SWArchitetureTestResults>
        <SATR ID=" " Name=" ">
          <CorrespondingTestCase>SATC_001</CorrespondingTestCase>
          <TestedSoftwareVersion>V1.0</TestedSoftwareVersion>
          <ActualResult></ActualResult>
          <Passed>Yes</Passed>
        </SATR>
        <ResultsAnalysis>
          <Accuracy>accurate and unambiguous</Accuracy>
          <Consistency>no conflict</Consistency>
          <Compatibility>Compatibility with the target computer and high-level requirements</Compatibility>
          <Conformance>Conformance to standards</Conformance>				
          <Verifiability>can be verified</Verifiability>
          <Traceability></Traceability>
          <PartitionIntegrity>partitioning breaches are prevented</PartitionIntegrity>
        </ResultsAnalysis>
      </SWArchitetureTestResults>
      <SourceCodeTestResults>
        <SCTR ID=" " Name=" ">
          <CorrespondingTestCase>SCTC_001</CorrespondingTestCase>
          <TestedSoftwareVersion>V1.0</TestedSoftwareVersion>
          <ActualResult></ActualResult>
          <Passed>Yes</Passed>
        </SCTR>
        <ResultsAnalysis>
          <Compliance>Compliance with low-level requirements and software architecture</Compliance>
          <Accuracy>accurate and unambiguous</Accuracy>
          <Consistency>no conflict</Consistency>
          <Conformance>Conformance to standards</Conformance>
          <Compatibility>Compatibility with the target computer</Compatibility>
          <Verifiability>can be verified</Verifiability>
          <Traceability></Traceability>
        </ResultsAnalysis>
      </SourceCodeTestResults>
      <IntegProcTestResults>
        <IPTR ID=" " Name=" ">
          <CorrespondingTestCase>IPTC_001</CorrespondingTestCase>
          <TestedSoftwareVersion>V1.0</TestedSoftwareVersion>
          <ActualResult></ActualResult>
          <Passed>Yes</Passed>
        </IPTR>
        <ResultsAnalysis>
          <Compliance>Compliance with system requirements </Compliance>
          <Accuracy>accurate and unambiguous </Accuracy>
          <Consistency>no conflict</Consistency>
          <Compatibility>Compatibility with the target computer</Compatibility>
          <Verifiability>can be verified</Verifiability>
          <Traceability></Traceability>
        </ResultsAnalysis>
      </IntegProcTestResults>
      <VerifProcTestResults>
        <VPTR ID=" " Name=" ">
          <CorrespondingTestCase>VPTC_001</CorrespondingTestCase>
          <TestedSoftwareVersion>V1.0</TestedSoftwareVersion>
          <ActualResult></ActualResult>
          <Passed>Yes</Passed>
        </VPTR>
        <ResultsAnalysis>
          <TestCasesAnalysis>Test cases are completed</TestCasesAnalysis>
          <TestMehods>Test mehods are correct</TestMehods>
          <TestProcedures>Test Procedures can cause the correct testing</TestProcedures>
          <TestResults>expected results are correct and the difference with actual result is reasonable</TestResults>
        </ResultsAnalysis>
      </VerifProcTestResults>
    </VerificationResults>

    <CoverageAnalysis>
      <RequirementsBased>describe the methods for designing the test cases</RequirementsBased>
      <StructuralCoverage>describe the testing implementation methods</StructuralCoverage>
      <ParameterDataItems>parameter data items are reviewed</ParameterDataItems>
    </CoverageAnalysis>
    
    <ProblemsReprots>
      <RequirementProcess>
      </RequirementProcess>
      <DesignProcess>
      </DesignProcess>	
      <CodingProcess>
      </CodingProcess>
      <IntegrationProcess>
        <CompilerWarnings>No</CompilerWarnings>
        <IncorrectHardwareAddresses>No</IncorrectHardwareAddresses>
        <MemoryOverlaps>No</MemoryOverlaps>
        <MissingSoftwareComponents>No</MissingSoftwareComponents>
      </IntegrationProcess>
      <VerificationProcess>
      </VerificationProcess>
    </ProblemsReprots>

    <TransitionCriteria>
      High-level requirements satisfy system requirements. 
      Software architecture and lowlevel requirements satisfy high-level  requirements. 
      Source Code satisfies the low-level requirements and software architecture.
      The Executable Object Code satisfies the software requirements and has unintended functionality.
      The Executable Object Code is robust.
      Verification means are technically correct and complete for the software level.
    </TransitionCriteria>

  </SoftwareVerificationResults>`,

  '软件生命周期环境配置索引': `
  <EnvironmentConfigurationIndex>
    <DocumentOverview>
      <DocumentIdentity>SECI_1.0</DocumentIdentity>
      <DocumentName> </DocumentName>
      <Purpose>
        
      </Purpose>
      <Scope>
        
      </Scope>
      <Annotation>
        <Abbreviations>
        
        </Abbreviations>			
        <Reference>

        </Reference>
      </Annotation>
    </DocumentOverview>
    
    <Objectives>

    </Objectives>

    <Inputs>

    </Inputs>

    <Outputs>

    </Outputs>

    <Activities>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
    </Activities>


    <TransitionCriteria>
    </TransitionCriteria>

  </EnvironmentConfigurationIndex>`,

  '软件配置管理索引': `
  <SoftwareConfigurationIndexDocument>
    <DocumentOverview>
      <DocumentIdentity>SECI_1.0</DocumentIdentity>
      <DocumentName> </DocumentName>
      <Purpose>
        
      </Purpose>
      <Scope>
        
      </Scope>
      <Annotation>
        <Abbreviations>
        
        </Abbreviations>			
        <Reference>

        </Reference>
      </Annotation>
    </DocumentOverview>
    
    <Objectives>

    </Objectives>

    <Inputs>

    </Inputs>

    <Outputs>

    </Outputs>

    <Activities>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
    </Activities>


    <TransitionCriteria>
    </TransitionCriteria>

  </SoftwareConfigurationIndexDocument>`,

  '软件配置管理记录': `
  <SoftwareConfigurationManagementRecords>
    <DocumentOverview>
      <DocumentIdentity>SCMR_1.0</DocumentIdentity>
      <DocumentName> </DocumentName>
      <Purpose>
        
      </Purpose>
      <Scope>
        
      </Scope>
      <Annotation>
        <Abbreviations>
        
        </Abbreviations>			
        <Reference>

        </Reference>
      </Annotation>
    </DocumentOverview>
    
    <Objectives>

    </Objectives>

    <Inputs>

    </Inputs>

    <Outputs>

    </Outputs>

    <Activities>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
    </Activities>


    <TransitionCriteria>
    </TransitionCriteria>

  </SoftwareConfigurationManagementRecords>`,

  '软件质量保证记录': `
  <SoftwareQualityAssuranceRecords>
    <DocumentOverview>
      <DocumentIdentity>SQAR_1.0</DocumentIdentity>
      <DocumentName> </DocumentName>
      <Purpose>
        
      </Purpose>
      <Scope>
        
      </Scope>
      <Annotation>
        <Abbreviations>
        
        </Abbreviations>			
        <Reference>

        </Reference>
      </Annotation>
    </DocumentOverview>
    
    <Objectives>

    </Objectives>

    <Inputs>

    </Inputs>

    <Outputs>

    </Outputs>

    <Activities>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
      <Activity></Activity>
    </Activities>


    <TransitionCriteria>
    </TransitionCriteria>

  </SoftwareQualityAssuranceRecords>`,

  '软件高层需求结构': `
  <SoftwareRequirementProcess>
    <brief>依据软件计划和软件标准，开发软件高层需求（包括派生高层需求），并对软件高层需求进行软件验证、配置管理、
    质量保证和合格审定等。软件高层需求包括：功能需求、性能需求、接口需求、安全需求</brief>
    <Objectives>
      <Objective id= "SROb-01">开发软件高层需求</Objective>
      <Objective id= "SROb-02">定义派生高层需求，并提供给系统过程，包括系统安全评估过程</Objective>
    </Objectives>
    <Activities>
      <SRP id="SRP-01" name="软件计划过程进入"> 
        <InputData>
          <Data id="D-03" name="软件开发计划"></Data>
          <Data id="D-07" name="软件需求标准"></Data>
        </InputData>		
      </SRP>
      <SRP id="SRP-02" name="高层需求结构"> 
        <InputData>
          <SR id="" name="" encoding=""></SR>
        </InputData>
        <OutputData></OutputData>		
      </SRP>
    </Activities>	
  </SoftwareRequirementProcess>`,

  '软件高层需求(条目)': `
  <SoftwareRequirementProcess>
    <brief>依据软件计划和软件标准，开发软件高层需求（包括派生高层需求），并对软件高层需求进行软件验证、配置管理、
    质量保证和合格审定等。软件高层需求包括：功能需求、性能需求、接口需求、安全需求</brief>
    <Objectives>
      <Objective id= "SROb-01">开发软件高层需求</Objective>
      <Objective id= "SROb-02">定义派生高层需求，并提供给系统过程，包括系统安全评估过程</Objective>
    </Objectives>
    <Activities>
      <SRP id="SRP-01" name="软件计划过程进入"> 
        <InputData>
          <Data id="D-03" name="软件开发计划"></Data>
          <Data id="D-07" name="软件需求标准"></Data>
        </InputData>		
      </SRP>

      <SRP id="SRP-03" name="开发高层需求（条目）">
        <InputData>
          <SR id="" name="" encoding=""></SR>
        </InputData>
        <OutputData>
          <HLR id="" name="" encoding=""></HLR>			
        </OutputData>		
      </SRP>
      <SRP id="SRP-04" name="开发派生高层需求（条目）">
        <InputData>
          
        </InputData>
        <OutputData>
          <Data id="D-10-2" name="派生高层需求（条目）"></Data>
        </OutputData>
      </SRP>
      <SRP id="SRP-06" name="向系统生命周期提交派生高层需求">
        <InputData>
          <Data id="D-10-2" name="派生高层需求（条目）"></Data>
        </InputData>
        <OutputData>
        </OutputData>
      </SRP>
    </Activities>	
  </SoftwareRequirementProcess>`,

  '高层需求评审报告': `
  <SoftwareRequirementProcess>
    <Activities>
      <SR id="SR-07" name="评审高层需求数据">
        <InputData>
            <Data id="D-01" name="系统需求"></Data>
          <Data id="D-04" name="软件验证计划"></Data>
          <Data id="D-09" name="软件需求标准"></Data>
          <Data id="D-10-1" name="高层需求结构"></Data>
          <Data id="D-10-2" name="高层需求（条目）"></Data>
          <Data id="D-22-1" name="高层需求与系统需求的追踪数据"></Data>
          <Data id="D-23-4" name="评审检查单"></Data>
        </InputData>
        <OutputData>
          <Data id="D-23-5" name="评审记录"></Data>
          <Data id="D-18-1" name="问题报告"></Data>
        </OutputData>
      </SR>
    </Activities>	
  </SoftwareRequirementProcess>`,

  '高层需求核查记录': `
  <SoftwareRequirementProcess>
    <Activities>
      <SR id="SR-06" name="核查高层需求数据">
        <InputData>
            <Data id="D-01" name="系统需求">
              <SR id="" name="" encoding=""></SR>
            </Data>
          <Data id="D-04" name="软件验证计划"></Data>
          <Data id="D-09" name="软件需求标准"></Data>
          <Data id="D-10-1" name="高层需求结构"></Data>
          <Data id="D-10-2" name="高层需求（条目）">
            <HLR id="" name="" encoding=""></HLR>
          </Data>
          <Data id="D-22-1" name="高层需求与系统需求的追踪数据">
            <SR_HLR name="" encoding=""></SR_HLR>
          </Data>
          <Data id="D-22-2" name="高层需求与系统需求的验证数据">
            <Data id="" name="验证检查单"></Data>
          </Data>
          <Data id="D-23-2" name="核查检查单"></Data>
        </InputData>
        <OutputData>
          <Data id="D-23-3" name="核查记录"></Data>
          <Data id="D-18-1" name="问题报告"></Data>
        </OutputData>
      </SR>
    </Activities>
  </SoftwareRequirementProcess>`,

  '核查检查单': `
  <CheckList>
    <Question id="01">
      Have the High-level Requirements been developed?
      <result type="Yes"></result>
      <!-- 
      <result type="No">Reasons</result> 
      <result type="NA"></result>
      -->
    </Question>
    <Question id="02">
      Are derived high-level requirements indicated to the system safety assessment process?
      <result type="Yes"></result>
      <!-- 
      <result type="No">Reasons</result> 
      <result type="NA"></result>
      -->
    </Question>
  </CheckList>`,

  '评审检查单': `
  <CheckList>
    <Question id="01">
      Have the High-level Requirements been developed?
      <result type="Yes"></result>
      <!-- 
      <result type="No">Reasons</result> 
      <result type="NA"></result>
      -->
    </Question>
    <Question id="02">
      Are derived high-level requirements indicated to the system safety assessment process?
      <result type="Yes"></result>
      <!-- 
      <result type="No">Reasons</result> 
      <result type="NA"></result>
      -->
    </Question>
  </CheckList>`,

  '审查检查单': `
  <CheckList>
    <Question id="01">
      Have the High-level Requirements been developed?
      <result type="Yes"></result>
      <!-- 
      <result type="No">Reasons</result> 
      <result type="NA"></result>
      -->
    </Question>
    <Question id="02">
      Are derived high-level requirements indicated to the system safety assessment process?
      <result type="Yes"></result>
      <!-- 
      <result type="No">Reasons</result> 
      <result type="NA"></result>
      -->
    </Question>
  </CheckList>`,

  '低层需求': `
  <SoftwareDesignProcess>
    <brief>依据软件开发计划、软件设计标准和软件高层需求，开发软件架构和软件低层需求（包括派生低层需求），
    并对软件架构和软件低层需求进行软件验证、配置管理、质量保证和合格审定等。</brief>
    <Objectives>
      <Objective id= "SDOb-02">开发低层需求</Objective>
      <Objective id= "SDOb-03">定义派生低层需求，并提供给系统过程，包括系统安全评估过程</Objective>
    </Objectives>
    <Activities>
      <SDP id="SD-01" name="软件计划过程进入">
        <InputData>
          <Data id="D-03" name="软件开发计划"></Data>
          <Data id="D-08" name="软件设计标准"></Data>
        </InputData>
        <OutputData>			
        </OutputData>
      </SDP>
      <SDP id="SD-02" name="开发低层需求(条目)">
        <InputData>
          <HLR id="" name="" encoding=""></HLR>	
        </InputData>
        <OutputData>
          <LLR id="" name="" encoding=""></LLR>>				
        </OutputData>
      </SDP>
      <SDP id="SD-03" name="开发开发派生低层需求(条目)">
        <InputData>
        </InputData>
        <OutputData>
          <Data id="D-11-4" name="派生低层需求(条目)"></Data>
        </OutputData>
      </SDP>
      <SDP id="SD-07" name="向系统生命周期提交派生的低层需求">
        <InputData>
          <Data id="D-11-4" name="低层需求(条目)"></Data>
        </InputData>
        <OutputData>
        </OutputData>
      </SDP>
    </Activities>
  </SoftwareDesignProcess>`,

  '软件架构': `
  <SoftwareDesignProcess>
    <brief>依据软件开发计划、软件设计标准和软件高层需求，开发软件架构和软件低层需求（包括派生低层需求），
    并对软件架构和软件低层需求进行软件验证、配置管理、质量保证和合格审定等。</brief>
    <Objectives>
      <Objective id= "SDOb-01">开发软件架构</Objective>
    </Objectives>
    <Activities>
      <SDP id="SD-01" name="软件计划过程进入">
        <InputData>
          <Data id="D-03" name="软件开发计划"></Data>
          <Data id="D-08" name="软件设计标准"></Data>
        </InputData>
        <OutputData>			
        </OutputData>
      </SDP>
      
      <SDP id="SD-04" name="开发软件架构">
        <InputData>
          <Data id="D-10-1" name="软件高层需求结构"></Data>
          <HLR id="" name="add" encoding=""></HLR>
        </InputData>
        <OutputData>
          <SS id="D-11-1" name="软件架构">
            <Data></Data>
          </SS>
        </OutputData>		
      </SDP>
      
    </Activities>
  </SoftwareDesignProcess>`,

  '低层需求核查记录': `
  <SoftwareDesignProcess>
    <Activities>
      <SD id="SD-04" name="核查软件设计说明">
        <InputData>
          <Data id="D-04" name="软件验证计划"></Data>
          <Data id="D-08" name="软件设计标准"></Data>
          <Data id="D-10-1" name="软件高层需求结构"></Data>
          <Data id="D-10-1" name="软件高层需求(条目)">
            <HLR id="" name="" encoding=""></HLR>
          </Data>
          <Data id="D-11-1" name="软件架构">
            <SS id="D-11-1" name="软件架构">
            </SS>
          </Data>
          <Data id="D-11-2" name="软件低层需求(条目)">
            <LLR id="" name="" encoding=""></LLR>
          </Data>
          <Data id="D-22-2" name="低层需求与高层需求的追踪数据">
            <HLR_LLR name="" encoding=""></HLR_LLR>
          </Data>
          <Data id="D-23-2" name="核查检查单"></Data>
        </InputData>
        <OutputData>
          <Data id="D-23-3" name="核查记录"></Data>
          <Data id="D-18-1" name="问题报告"></Data>
        </OutputData>		
      </SD>
    </Activities>
  </SoftwareDesignProcess>`,

  '低层需求评审报告': `
  <SoftwareDesignProcess>
    <Activities>
      <SD id="SD-05" name="评审软件设计说明">
        <InputData>
          <Data id="D-04" name="软件验证计划"></Data>
          <Data id="D-08" name="软件设计标准"></Data>
          <Data id="D-10-1" name="软件高层需求结构"></Data>
          <Data id="D-10-1" name="软件高层需求(条目)">
            <HLR id="" name="" encoding=""></HLR>
          </Data>
          <Data id="D-11-1" name="软件架构">
            <SS id="D-11-1" name="软件架构">
            </SS>
          </Data>
          <Data id="D-11-2" name="软件低层需求条目）">
            <LLR id="" name="" encoding=""></LLR>
          </Data>
          <Data id="D-22-2" name="低层需求与高层需求的追踪结果">
            <HLR_LLR name="" encoding=""></HLR_LLR>
          </Data>
          <Data id="D-23-4" name="评审检查单"></Data>
        </InputData>
        <OutputData>
          <Data id="D-23-5" name="评审记录"></Data>
          <Data id="D-18-1" name="问题报告"></Data>
        </OutputData>		
      </SD>
    </Activities>	
  </SoftwareDesignProcess>`,

  '软件编码核查记录': `
  <SoftwareCodingProcess>
    <Activities>
      <SC id="SC-03" name="核查源代码">
        <InputData>
          <Data id="D-03" name="软件验证计划"></Data>
          <Data id="D-09" name="软件编码标准"></Data>
          <Data id="D-11-1" name="软件架构">
          </Data>
          <Data id="D-11-2" name="低层需求（条目）">
            <LLR id="" name="" encoding=""></LLR>
          </Data>
          <Data id="D-12" name="源代码">
            <SC id="" name="" encoding=""></SC>
          </Data>
          <Data id="D-37" name="源代码与低层需求的追踪数据">
            <Data id="D-22-3" name="源代码与低层需求的追踪数据">
            </Data>
          </Data>
          <Data id="D-23-2" name="核查检查单"></Data>
        </InputData>
        <OutputData>
          <Data id="D-11-2" name="核查记录"></Data>
          <Data id="D-17" name="问题报告"></Data>
        </OutputData>
      </SC>
    </Activities>
  </SoftwareCodingProcess>`,

  '软件编码评审报告': `
  <SoftwareCodingProcess>
    <Activities>
      <SC id="SC-03" name="评审源代码">
        <InputData>
          <Data id="D-03" name="软件验证计划"></Data>
          <Data id="D-09" name="软件编码标准"></Data>
          <Data id="D-11-1" name="软件架构">
          </Data>
          <Data id="D-11-2" name="低层需求(条目)">
            <LLR id="" name="" encoding=""></LLR>
          </Data>
          <Data id="D-12" name="源代码">
            <SC id="" name="" encoding=""></SC>
          </Data>
          <Data id="D-37" name="源代码与低层需求的追踪数据">
            <Data id="D-22-3" name="源代码与低层需求的追踪数据">
            </Data>
          </Data>
          <Data id="D-23-4" name="评审检查单"></Data>
        </InputData>
        <OutputData>
          <Data id="D-11-4" name="评审记录"></Data>
          <Data id="D-17" name="问题报告"></Data>
        </OutputData>
      </SC>
    </Activities>
  </SoftwareCodingProcess>`,

}

export default XML;