var fluid_1_4=fluid_1_4||{};(function($,fluid){fluid.defaults("fluid.uiOptions.fullPreview",{gradeNames:["fluid.uiOptions.inline"],container:"{fullPreview}.container",uiOptionsTransform:{config:{"!*.uiOptionsLoader.*.uiOptions.*.preview.*.enhancer.options":"outerPreviewEnhancerOptions"}},derivedDefaults:{templateLoader:{options:{templates:{uiOptions:"%prefix/FullPreviewUIOptions.html"}}}}});fluid.uiOptions.inline.makeCreator("fluid.uiOptions.fullPreview",function(options){var enhancerOptions=fluid.get(fluid,"staticEnvironment.uiEnhancer.options.originalUserOptions");options.outerPreviewEnhancerOptions=enhancerOptions;return options})})(jQuery,fluid_1_4);