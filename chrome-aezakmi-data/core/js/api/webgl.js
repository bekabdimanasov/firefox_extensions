chrome.runtime.sendMessage({method: "current_profile"}, function (response) {

        
    var scriptCode = '(' + function (WebGLInject) {
    let response = JSON.parse(webglResponseStr);        
    const canvasNoise = response.canvasNoise; 
    const webglNoise = response.webglNoise; 
    const IS_WEBGL2 = true;
    const webglNoiseR = response.webglNoiseR;
    const webglNoiseG = response.webglNoiseG;
    const webglNoiseB = response.webglNoiseB;
    const webglNoiseA = response.webglNoiseA;
    const webglNoiseString1 = response.webglNoiseString1;
    const webglNoiseString2 = response.webglNoiseString2;


    const seed = response.seed;
    
    const unmaskedvendorwebgl = response.unmaskedVendorWebgl;
    const unmaskedrendererwebgl = response.unmaskedRendererWebgl;
    const webglrenderer = response.webglRenderer;
    const webglvendor = response.webglVendor;
    const shadinglanguageversion = response.shadinglanguageversion;
    const glversion = response.glVersion;
    const aliasedlinewidthrange = response.aliasedLineWidthRange;
    const aliasedpointsizerange = response.aliasedPointSizeRange;
    const alphabits = response.alphaBits;
    const bluebits = response.blueBits;
    const greenbits = response.greenBits;
    const redbits = response.redBits;
    const maxdrawbufferswebgl = response.maxDrawBuffers;
    const stencilbits = response.stencilBits;
    const depthbits = response.depthBits;
    const maxtexturemaxanisotropyext = response.maxTextureMaxAnisotropyExt;
    const maxvertexattribs = response.maxVertexattribs;
    const maxcombinedtextureimageunits = response.maxCombinedTextureImageUnits;
    const maxcubemaptexturesize = response.maxCubeMapTextureSize;
    const maxrenderbuffersize = response.maxRenderBufferSize;
    const maxtexturesize = response.maxTextureSize;
    const maxfragmentuniformvectors = response.maxFragmentUniformVectors;
    const maxvertexuniformvectors = response.maxVertexuniformvectors;
    const maxtextureimageunits = response.maxTextureImageUnits;
    const maxvaryingvectors = response.maxVaryingVectors;
    const maxvertextextureimageunits = response.maxVertexTextureImageUnits;
    const maxviewportdims = response.maxViewportDims;

    
    const maxvertexuniformcomponents = response.maxVertexUniformComponents;
    const maxvertexuniformblocks = response.maxVertexUniformBlocks;
    const maxvertexoutputcomponents = response.maxVertexOutputComponents;
    const maxvaryingcomponents = response.maxVaryingComponents;
    const maxtransformfeedbackinterleavedcomponents = response.maxTransformFeedbackInterleavedComponents;
    const maxtransformfeedbackseparateattribs = response.maxTransformFeedbackSeparateAttribs;
    const maxtransformfeedbackseparatecomponents = response.maxTransformFeedbackSeparateComponents;
    const maxfragmentuniformcomponents = response.maxFragmentUniformComponents;
    const maxfragmentuniformblocks = response.maxFragmentUniformBlocks;
    const maxfragmentinputcomponents = response.maxFragmentInputComponents;
    const minprogramtexeloffset = response.minProgramTexelOffset;
    const maxprogramtexeloffset = response.maxProgramTexelOffset;
    const maxdrawbuffers = response.maxDrawBuffers;
    const maxcolorattachments = response.maxColorAttachments;
    const maxsamples = response.maxSamples;
    const max3dtexturesize = response.max3dTextureSize;
    const maxarraytexturelayers = response.maxArrayTextureLayers;
    const maxtexturelodbias = response.maxTextureLodBias;
    const maxuniformbufferbindings = response.maxUniformBufferBindings;
    const maxuniformblocksize = response.maxUniformBlockSize;
    const uniformbufferoffsetalignment = response.uniformBufferOffsetAlignment;
    const maxcombineduniformblocks = response.maxCombinedUniformBlocks;
    const maxcombinedvertexuniformcomponents = response.maxCombinedVertexUniformComponents;
    const maxcombinedfragmentuniformcomponents = response.maxCombinedFragmentUniformComponents;
    const webglSupportExtentions = response.webglFloatPrecision;
   
   var originalToDataURL = HTMLCanvasElement.prototype.toDataURL;
   var originalToBlob = HTMLCanvasElement.prototype.toBlob;
   var originalMozGetAsFile = HTMLCanvasElement.prototype.mozGetAsFile;
   var originalGetContext = HTMLCanvasElement.prototype.getContext;
   var originalGetImageData = CanvasRenderingContext2D.prototype.getImageData;
   var originalReadPixels = WebGLRenderingContext.prototype.readPixels;
   var originalReadPixelsTwo = WebGL2RenderingContext.prototype.readPixels;
   var originalGetParam =  WebGL2RenderingContext.prototype.getParam;


   const TimeoutDelay = 2 * 1000;

   let allowInjection = true;
   let storageElems;
   let notificationTimeoutID;

   
   // if (window.frameElement != null && window.frameElement.sandbox != null) {
   //     allowInjection = false;
   //     for (let i = 0; i < window.frameElement.sandbox.length; i++) {
   //         const val = window.frameElement.sandbox[i];
   //         if (val == 'allow-scripts') {
   //             allowInjection = true;
   //         }
   //     }
   // }

   // if (allowInjection) {
   //     const docId = true;
   //     let data = {};
   //     data.r = webglNoiseR;
       
   //     data.g = webglNoiseG;
   //     data.b = webglNoiseB;
   //     data.a = webglNoiseA;
   //     overrideMethods(docId, data);
   // }

   // function overrideMethods(docId, data) {
   //     const script = document.createElement('script');
   //     script.id = webglNoiseString1;
   //     script.type = "text/javascript";
   //     if (allowInjection) {
   //         var newChild = document.createTextNode(`const canvasNoise = '${canvasNoise}'; \n ` + 'try{(' + overrideDefaultMethods + ')(' + data.r + ',' + data.g + ',' + data.b + ',' + data.a + ',"' + script.id + '", "' + '");} catch (e) {console.error(e);}');
   //         script.appendChild(newChild);
   //         var node = (document.documentElement || document.head || document.body);
   //         if (typeof node[docId] === 'undefined') {
   //             node.insertBefore(script, node.firstChild);
   //             node[docId] = webglNoiseString2;
   //         }
   //     }
   // }

   // function getRandomString() {
   //     var text = "";
   //     var charset = "abcdefghijklmnopqrstuvwxyz";
   //     for (var i = 0; i < 5; i++)
   //         text += charset.charAt(Math.floor(Math.random() * charset.length));
   //     return text;
   // }


   // function overrideDefaultMethods(r, g, b, a, scriptId) {
   //     var scriptNode = document.getElementById(scriptId);

   //     function overrideCanvasProto(root) {
   //         function overrideCanvasInternal(name, old) {
   //             root.prototype[name] = old;
   //             Object.defineProperty(root.prototype, name,
   //                 {
   //                     value: function () {
   //                         var width = this.width;
   //                         var height = this.height;
   //                         var context = this.getContext("2d");

   //                         if (!context) {
   //                           var can = document.createElement('canvas');
   //                           var imageData = can.getContext('2d').getImageData(0, 0, width, height);
   //                         } else {
   //                           var imageData = context.getImageData(0, 0, width, height);  
   //                         }
                          
   //                         for (var i = 0; i < height; i++) {
   //                             for (var j = 0; j < width; j++) {
   //                                 var index = ((i * (width * 4)) + (j * 4));
   //                                 imageData.data[index + 0] = imageData.data[index + 0] + r;
   //                                 imageData.data[index + 1] = imageData.data[index + 1] + g;
   //                                 imageData.data[index + 2] = imageData.data[index + 2] + b;
   //                                 imageData.data[index + 3] = imageData.data[index + 3] + a;
   //                             }
   //                         }
   //                         if (!context) {
   //                           can.getContext('2d').putImageData(imageData, 0, 0);
   //                           return old.apply(can, arguments);
   //                         } else {
   //                           context.putImageData(imageData, 0, 0);
   //                           return old.apply(this, arguments);
   //                         }

   //                     }
   //                 }
   //             );
   //         }

   //         overrideCanvasInternal("toDataURL", root.prototype.toDataURL);
   //         overrideCanvasInternal("toBlob", root.prototype.toBlob);
           
   //     }

   //     function overrideCanvaRendProto(root) {
   //         const name = "getImageData";
   //         const getImageData = root.prototype.getImageData;

   //         root.prototype[name] = getImageData;

   //         Object.defineProperty(root.prototype, "getImageData",
   //             {
   //                 value: function () {
   //                     var imageData = getImageData.apply(this, arguments);
   //                     var height = imageData.height;
   //                     var width = imageData.width;
                       
   //                     for (var i = 0; i < height; i++) {
   //                         for (var j = 0; j < width; j++) {
   //                             var index = ((i * (width * 4)) + (j * 4));
   //                             imageData.data[index + 0] = imageData.data[index + 0] + r;
   //                             imageData.data[index + 1] = imageData.data[index + 1] + g;
   //                             imageData.data[index + 2] = imageData.data[index + 2] + b;
   //                             imageData.data[index + 3] = imageData.data[index + 3] + a;
   //                         }
   //                     }
   //                     return imageData;
   //                 }
   //             }
   //         );
   //     }

   //     function inject(element) {
   //         if (element.tagName.toUpperCase() === "IFRAME" && element.contentWindow) {
   //             try {
   //                 var hasAccess = element.contentWindow.HTMLCanvasElement;
   //             } catch (e) {
                   
   //                 return;
   //             }
   //             overrideCanvasProto(element.contentWindow.HTMLCanvasElement);
   //             overrideCanvaRendProto(element.contentWindow.CanvasRenderingContext2D);
   //             overrideDocumentProto(element.contentWindow.Document);
   //         }
   //     }

   //     function overrideDocumentProto(root) {
   //         function doOverrideDocumentProto(old, name) {
   //             root.prototype[name] = old;
   //             Object.defineProperty(root.prototype, name,
   //                 {
   //                     value: function () {
   //                         var element = old.apply(this, arguments);
                           
   //                         if (element == null) {
   //                             return null;
   //                         }
   //                         if (Object.prototype.toString.call(element) === '[object HTMLCollection]' ||
   //                             Object.prototype.toString.call(element) === '[object NodeList]') {
   //                             for (var i = 0; i < element.length; ++i) {
   //                                 var el = element[i];
                                   
   //                                 inject(el);
   //                             }
   //                         } else {
                               
   //                             inject(element);
   //                         }
   //                         return element;
   //                     }
   //                 }
   //             );
   //         }

   //         doOverrideDocumentProto(root.prototype.createElement, "createElement");
   //         doOverrideDocumentProto(root.prototype.createElementNS, "createElementNS");
   //         doOverrideDocumentProto(root.prototype.getElementById, "getElementById");
   //         doOverrideDocumentProto(root.prototype.getElementsByName, "getElementsByName");
   //         doOverrideDocumentProto(root.prototype.getElementsByClassName, "getElementsByClassName");
   //         doOverrideDocumentProto(root.prototype.getElementsByTagName, "getElementsByTagName");
   //         doOverrideDocumentProto(root.prototype.getElementsByTagNameNS, "getElementsByTagNameNS");
   //     }

    // if (canvasNoise == 1) {
       // overrideCanvasProto(HTMLCanvasElement);
       // overrideCanvaRendProto(CanvasRenderingContext2D);
       // overrideDocumentProto(Document);
       // scriptNode.parentNode.removeChild(scriptNode);      
    // }
    // else {
    // }
   // }

    function randomBoolean() {
        return randomNumber(0, 2) ? true : false;
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
   
   function fakeImageData(image) {
       Math.seedrandom(seed);

       
       
       for (var i = 0; i < image.data.length; i++) {
           image.data[i] += (randomBoolean() ? 1 : -1);
       }

       return image;
   }

   var extensions = {
       'OES_texture_float': {},
       'OES_texture_half_float': {
           'HALF_FLOAT_OES': 36193
       },
       'WEBGL_lose_context': {
           loseContext,
           restoreContext
       },
       'OES_standard_derivatives': {
           'FRAGMENT_SHADER_DERIVATIVE_HINT_OES': 35723
       },
       'OES_vertex_array_object': {
           'VERTEX_ARRAY_BINDING_OES': 34229
       },
       'WEBGL_debug_renderer_info': {
           'UNMASKED_VENDOR_WEBGL': 37445,
           'UNMASKED_RENDERER_WEBGL': 37446
       },
       'WEBGL_debug_shaders': {},
       'WEBGL_depth_texture': {
           'UNSIGNED_INT_24_8_WEBGL': 34042
       },
       'OES_element_index_uint': {},
       'EXT_texture_filter_anisotropic': {
           'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
           'TEXTURE_MAX_ANISOTROPY_EXT': 34046
       },
       'EXT_frag_depth': {},
       'WEBGL_draw_buffers': {
           'MAX_DRAW_BUFFERS_WEBGL': 34852,
           'MAX_COLOR_ATTACHMENTS_WEBGL': 36063,
           'DRAW_BUFFER9_WEBGL': 34862,
           'DRAW_BUFFER8_WEBGL': 34861,
           'DRAW_BUFFER7_WEBGL': 34860,
           'DRAW_BUFFER6_WEBGL': 34859,
           'DRAW_BUFFER5_WEBGL': 34858,
           'DRAW_BUFFER4_WEBGL': 34857,
           'DRAW_BUFFER3_WEBGL': 34856,
           'DRAW_BUFFER2_WEBGL': 34855,
           'DRAW_BUFFER15_WEBGL': 34868,
           'DRAW_BUFFER14_WEBGL': 34867,
           'DRAW_BUFFER13_WEBGL': 34866,
           'DRAW_BUFFER12_WEBGL': 34865,
           'DRAW_BUFFER11_WEBGL': 34864,
           'DRAW_BUFFER10_WEBGL': 34863,
           'DRAW_BUFFER1_WEBGL': 34854,
           'DRAW_BUFFER0_WEBGL': 34853,
           'COLOR_ATTACHMENT9_WEBGL': 36073,
           'COLOR_ATTACHMENT8_WEBGL': 36072,
           'COLOR_ATTACHMENT7_WEBGL': 36071,
           'COLOR_ATTACHMENT6_WEBGL': 36070,
           'COLOR_ATTACHMENT5_WEBGL': 36069,
           'COLOR_ATTACHMENT4_WEBGL': 36068,
           'COLOR_ATTACHMENT3_WEBGL': 36067,
           'COLOR_ATTACHMENT2_WEBGL': 36066,
           'COLOR_ATTACHMENT15_WEBGL': 36079,
           'COLOR_ATTACHMENT14_WEBGL': 36078,
           'COLOR_ATTACHMENT13_WEBGL': 36077,
           'COLOR_ATTACHMENT12_WEBGL': 36076,
           'COLOR_ATTACHMENT11_WEBGL': 36075,
           'COLOR_ATTACHMENT10_WEBGL': 36074,
           'COLOR_ATTACHMENT1_WEBGL': 36065,
           'COLOR_ATTACHMENT0_WEBGL': 36064,
           drawBuffersWEBGL
       },
       'ANGLE_instanced_arrays': {
           'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE': 35070
       },
       'OES_texture_float_linear': {},
       'OES_texture_half_float_linear': {},
       'EXT_blend_minmax': {},
       'EXT_shader_texture_lod': {},
       'WEBGL_compressed_texture_atc': null,
       'WEBGL_compressed_texture_pvrtc': {
           'COMPRESSED_RGB_PVRTC_4BPPV1_IMG': 35840,
           'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG': 35842,
           'COMPRESSED_RGB_PVRTC_2BPPV1_IMG': 35841,
           'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG': 35843
       },
       'EXT_color_buffer_half_float': {},
       'WEBGL_color_buffer_float': {
           'RGBA32F_EXT': 34836,
           'RGB32F_EXT': 34837,
           'FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT': 33297,
           'UNSIGNED_NORMALIZED_EXT': 35863
       },
       'EXT_sRGB': {
           'SRGB_EXT': 35904,
           'SRGB_ALPHA_EXT': 35906,
           'SRGB8_ALPHA8_EXT': 35907,
           'FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT': 33296
       },
       'WEBGL_compressed_texture_etc1': {
           'COMPRESSED_RGB_ETC1_WEBGL': 36196
       },
       'WEBGL_compressed_texture_astc': {
           'COMPRESSED_RGB_ATC_WEBGL': 35986,
           'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL': 35986,
           'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL': 34798
       },
       'WEBGL_compressed_texture_etc': {
           'COMPRESSED_R11_EAC': 37488,
           'COMPRESSED_SIGNED_R11_EAC': 37489,
           'COMPRESSED_RG11_EAC': 37490,
           'COMPRESSED_SIGNED_RG11_EAC': 37491,
           'COMPRESSED_RGB8_ETC2': 37492,
           'COMPRESSED_RGBA8_ETC2_EAC': 37493,
           'COMPRESSED_SRGB8_ETC2': 37494,
           'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC': 37495,
           'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2': 37496,
           'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2': 37497
       },
       'WEBGL_compressed_texture_s3tc': {
           'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
           'TEXTURE_MAX_ANISOTROPY_EXT': 34046
       },
       'WEBGL_compressed_texture_s3tc_srgb': {},
   };


   
   function fakePixelData(pixels) {
       Math.seedrandom(seed);

       
       
       for (var i = 0; i < pixels.length; i++) {
           pixels[i] += (randomBoolean() ? 1 : -1);
       }

       return pixels;
   }

   
   function loseContext() {
   };

   function restoreContext() {
   };

   function drawBuffersWEBGL() {
   };

   var extensions = {
       'OES_texture_float': {},
       'OES_texture_half_float': {
           'HALF_FLOAT_OES': 36193
       },
       'WEBGL_lose_context': {
           loseContext,
           restoreContext
       },
       'OES_standard_derivatives': {
           'FRAGMENT_SHADER_DERIVATIVE_HINT_OES': 35723
       },
       'OES_vertex_array_object': {
           'VERTEX_ARRAY_BINDING_OES': 34229
       },
       'WEBGL_debug_renderer_info': {
           'UNMASKED_VENDOR_WEBGL': 37445,
           'UNMASKED_RENDERER_WEBGL': 37446
       },
       'WEBGL_debug_shaders': {},
       'WEBGL_depth_texture': {
           'UNSIGNED_INT_24_8_WEBGL': 34042
       },
       'OES_element_index_uint': {},
       'EXT_texture_filter_anisotropic': {
           'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
           'TEXTURE_MAX_ANISOTROPY_EXT': 34046
       },
       'EXT_frag_depth': {},
       'WEBGL_draw_buffers': {
           'MAX_DRAW_BUFFERS_WEBGL': 34852,
           'MAX_COLOR_ATTACHMENTS_WEBGL': 36063,
           'DRAW_BUFFER9_WEBGL': 34862,
           'DRAW_BUFFER8_WEBGL': 34861,
           'DRAW_BUFFER7_WEBGL': 34860,
           'DRAW_BUFFER6_WEBGL': 34859,
           'DRAW_BUFFER5_WEBGL': 34858,
           'DRAW_BUFFER4_WEBGL': 34857,
           'DRAW_BUFFER3_WEBGL': 34856,
           'DRAW_BUFFER2_WEBGL': 34855,
           'DRAW_BUFFER15_WEBGL': 34868,
           'DRAW_BUFFER14_WEBGL': 34867,
           'DRAW_BUFFER13_WEBGL': 34866,
           'DRAW_BUFFER12_WEBGL': 34865,
           'DRAW_BUFFER11_WEBGL': 34864,
           'DRAW_BUFFER10_WEBGL': 34863,
           'DRAW_BUFFER1_WEBGL': 34854,
           'DRAW_BUFFER0_WEBGL': 34853,
           'COLOR_ATTACHMENT9_WEBGL': 36073,
           'COLOR_ATTACHMENT8_WEBGL': 36072,
           'COLOR_ATTACHMENT7_WEBGL': 36071,
           'COLOR_ATTACHMENT6_WEBGL': 36070,
           'COLOR_ATTACHMENT5_WEBGL': 36069,
           'COLOR_ATTACHMENT4_WEBGL': 36068,
           'COLOR_ATTACHMENT3_WEBGL': 36067,
           'COLOR_ATTACHMENT2_WEBGL': 36066,
           'COLOR_ATTACHMENT15_WEBGL': 36079,
           'COLOR_ATTACHMENT14_WEBGL': 36078,
           'COLOR_ATTACHMENT13_WEBGL': 36077,
           'COLOR_ATTACHMENT12_WEBGL': 36076,
           'COLOR_ATTACHMENT11_WEBGL': 36075,
           'COLOR_ATTACHMENT10_WEBGL': 36074,
           'COLOR_ATTACHMENT1_WEBGL': 36065,
           'COLOR_ATTACHMENT0_WEBGL': 36064,
           drawBuffersWEBGL
       },
       'ANGLE_instanced_arrays': {
           'VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE': 35070
       },
       'OES_texture_float_linear': {},
       'OES_texture_half_float_linear': {},
       'EXT_blend_minmax': {},
       'EXT_shader_texture_lod': {},
       'WEBGL_compressed_texture_atc': null,
       'WEBGL_compressed_texture_pvrtc': {
           'COMPRESSED_RGB_PVRTC_4BPPV1_IMG': 35840,
           'COMPRESSED_RGBA_PVRTC_4BPPV1_IMG': 35842,
           'COMPRESSED_RGB_PVRTC_2BPPV1_IMG': 35841,
           'COMPRESSED_RGBA_PVRTC_2BPPV1_IMG': 35843
       },
       'EXT_color_buffer_half_float': {},
       'WEBGL_color_buffer_float': {
           'RGBA32F_EXT': 34836,
           'RGB32F_EXT': 34837,
           'FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT': 33297,
           'UNSIGNED_NORMALIZED_EXT': 35863
       },
       'EXT_sRGB': {
           'SRGB_EXT': 35904,
           'SRGB_ALPHA_EXT': 35906,
           'SRGB8_ALPHA8_EXT': 35907,
           'FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT': 33296
       },
       'WEBGL_compressed_texture_etc1': {
           'COMPRESSED_RGB_ETC1_WEBGL': 36196
       },
       'WEBGL_compressed_texture_astc': {
           'COMPRESSED_RGB_ATC_WEBGL': 35986,
           'COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL': 35986,
           'COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL': 34798
       },
       'WEBGL_compressed_texture_etc': {
           'COMPRESSED_R11_EAC': 37488,
           'COMPRESSED_SIGNED_R11_EAC': 37489,
           'COMPRESSED_RG11_EAC': 37490,
           'COMPRESSED_SIGNED_RG11_EAC': 37491,
           'COMPRESSED_RGB8_ETC2': 37492,
           'COMPRESSED_RGBA8_ETC2_EAC': 37493,
           'COMPRESSED_SRGB8_ETC2': 37494,
           'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC': 37495,
           'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2': 37496,
           'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2': 37497
       },
       'WEBGL_compressed_texture_s3tc': {
           'MAX_TEXTURE_MAX_ANISOTROPY_EXT': 34047,
           'TEXTURE_MAX_ANISOTROPY_EXT': 34046
       },
       'WEBGL_compressed_texture_s3tc_srgb': {},
   };


    var enabledExtensionsVar = webglSupportExtentions.slice(1, -1);
    
    if (enabledExtensionsVar.indexOf(',') > -1)
    {
        var enabledExtensionsArray = enabledExtensionsVar.split(',');
    };
    
    if (enabledExtensionsVar.indexOf(', ') > -1)
    {
        var enabledExtensionsArray = enabledExtensionsVar.split(', ');
    };

    const enabledExtensions = enabledExtensionsArray;

   let _extensions = {}
   enabledExtensions.forEach(function (v) {
       _extensions[v] = extensions[v];
   })


   
   function fakeCanvas(canvas) {
       
       var ctx = HTMLCanvasElement.prototype.getContext.call(canvas, "2d") ||
           HTMLCanvasElement.prototype.getContext.call(canvas, "webgl") ||
           HTMLCanvasElement.prototype.getContext.call(canvas, "experimental-webgl") ||
           HTMLCanvasElement.prototype.getContext.call(canvas, "webgl2") ||
           HTMLCanvasElement.prototype.getContext.call(canvas, "experimental-webgl2");

       var image;

       
       if (ctx instanceof CanvasRenderingContext2D) {
           image = originalGetImageData.call(ctx, 0, 0, canvas.width, canvas.height);
       } else if (ctx instanceof WebGLRenderingContext || ctx instanceof WebGL2RenderingContext) {
           image = new ImageData(canvas.width, canvas.height);
           originalReadPixels.call(ctx, 0, 0, canvas.width, canvas.height, ctx.RGBA, ctx.UNSIGNED_BYTE, image.data);
       } else if (ctx instanceof ImageBitmapRenderingContext) {
           
           
       }

       
       var fakeImage = fakeImageData(image);

       
       var fakeCanvas = canvas.cloneNode(true);

       
       var fakeCtx = fakeCanvas.getContext("2d");

       
       fakeCtx.putImageData(fakeImage, 0, 0);

       return fakeCanvas;
   }


// if (webglNoise == 1) {   
//    CanvasRenderingContext2D.prototype.getImageData = function (sx, sy, sw, sh) {
       

//        var image = originalGetImageData.call(this, sx, sy, sw, sh);

//        return fakeImageData(image);
//    };
// }

if (webglNoise == 1) {
   WebGLRenderingContext.prototype.readPixels = function (x, y, width, height, format, type, pixels) {
       

       originalReadPixels.call(this, x, y, width, height, format, type, pixels);

       fakePixelData(pixels);
   };
}

if (IS_WEBGL2 && webglNoise == 1) {
       WebGL2RenderingContext.prototype.readPixels = function (x, y, width, height, format, type, pixels) {
           

           originalReadPixelsTwo.call(this, x, y, width, height, format, type, pixels);

           fakePixelData(pixels);
       };
}
if (IS_WEBGL2) {
       WebGL2RenderingContext.prototype.getParameter = function () {
           var name = arguments[0];
                      
       if (name == 37445) {
           
           return unmaskedvendorwebgl;
       } else if (name == 37446) {
           
           return unmaskedrendererwebgl;
       } else if (name == 7937) {
           
           return webglrenderer;
       } else if (name == 7936) {
           
           return webglvendor;
       } else if (name == 35724) {
           
           return shadinglanguageversion;
       } else if (name == 7938) {
           
           return glversion;
       } else if (name == 33901) {
           
           return new Float32Array (aliasedpointsizerange.replace("[", "").replace("]", "").split(","));
       } else if (name == 33902) {
           
           return new Float32Array (aliasedlinewidthrange.replace("[", "").replace("]", "").split(","));
       } else if (name == 3413) {

           return Number(alphabits);
       } else if (name == 3412) {
           
           return Number(bluebits);
       } else if (name == 3411) {
           
           return Number(greenbits);
       } else if (name == 3410) {
           
           return Number(redbits);
       } else if (name == 34852) {

           return Number(maxdrawbufferswebgl);
       } else if (name == 3415) {
           
           return Number(stencilbits);
       } else if (name == 3414) {
           
           return Number(depthbits);
       } else if (name == 34047) {

           return Number(maxtexturemaxanisotropyext);
       } else if (name == 34921) {
           
           return Number(maxvertexattribs);
       } else if (name == 35661) {
           
           return Number(maxcombinedtextureimageunits);
       } else if (name == 34076) {
           
           return Number(maxcubemaptexturesize);
       } else if (name == 34024) {
           
           return Number(maxrenderbuffersize);
       } else if (name == 3379) {
           
           return Number(maxtexturesize);
       } else if (name == 36349) {
           
           return Number(maxfragmentuniformvectors);
       } else if (name == 36347) {
           
           return Number(maxvertexuniformvectors);
       } else if (name == 34930) {
           
           return Number(maxtextureimageunits);
       } else if (name == 36348) {
           
           return Number(maxvaryingvectors);
       } else if (name == 35660) {
           
           return Number(maxvertextextureimageunits);
       } else if (name == 3386) {
           
           return new Int32Array (maxviewportdims.replace("[", "").replace("]", "").split(","));
       } else if (name == 35658) {
               
           return maxvertexuniformcomponents;

           } else if (name == 35371) {
               
               return maxvertexuniformblocks;
           } else if (name == 37154) {
               
               return maxvertexoutputcomponents;
           } else if (name == 35659) {
               
               return maxvaryingcomponents;
           } else if (name == 35978) {
               
               return maxtransformfeedbackinterleavedcomponents;
           } else if (name == 35979) {
               
               return maxtransformfeedbackseparateattribs;
           } else if (name == 35968) {
               
               return maxtransformfeedbackseparatecomponents;
           } else if (name == 35657) {
               
               return maxfragmentuniformcomponents;
           } else if (name == 35373) {
               
               return maxfragmentuniformblocks;
           } else if (name == 37157) {
               
               return maxfragmentinputcomponents;
           } else if (name == 35076) {
               
               return minprogramtexeloffset;
           } else if (name == 35077) {
               
               return maxprogramtexeloffset;
           } else if (name == 34852) {
               
               return maxdrawbuffers;
           } else if (name == 36063) {
               
               return maxcolorattachments;
           } else if (name == 36183) {
               
               return maxsamples;
           } else if (name == 32883) {
               
               return max3dtexturesize;
           } else if (name == 35071) {
               
               return maxarraytexturelayers;
           } else if (name == 34045) {
               
               return maxtexturelodbias;
           } else if (name == 35375) {
               
               return maxuniformbufferbindings;
           } else if (name == 35376) {
               
               return maxuniformblocksize;
           } else if (name == 35380) {
               
               return uniformbufferoffsetalignment;
           } else if (name == 35374) {
               
               return maxcombineduniformblocks;
           } else if (name == 35377) {
               
               return maxcombinedvertexuniformcomponents;
           } else if (name == 35379) {
               
               return maxcombinedfragmentuniformcomponents;
           }
       }

       
       WebGL2RenderingContext.prototype.getSupportedExtensions = function () {
           try {
               
               var availableExtensions = Object.keys(_extensions);
               
               return availableExtensions;
           } catch (a) {
               
               return Object.keys(extensions);
           }
       }

   } else {
       
       
       HTMLCanvasElement.prototype.getContext = function (type, attrs) {

           if ((type == 'webgl2') && (!IS_WEBGL2)) {
               return null;

           }

           return originalGetContext.call(this, type, attrs);
       };

   }


   WebGLRenderingContext.prototype.getParameter = function () {
       var name = arguments[0];
       
       if (name == 37445) {
           
           return unmaskedvendorwebgl;
       } else if (name == 37446) {
           
           return unmaskedrendererwebgl;
       } else if (name == 7937) {
           
           return webglrenderer;
       } else if (name == 7936) {
           
           return webglvendor;
       } else if (name == 35724) {
           
           return shadinglanguageversion;
       } else if (name == 7938) {
           
           return glversion;
       } else if (name == 33901) {
           
           return new Float32Array (aliasedpointsizerange.replace("[", "").replace("]", "").split(","));
       } else if (name == 33902) {
           
           return new Float32Array (aliasedlinewidthrange.replace("[", "").replace("]", "").split(","));
       } else if (name == 3413) {

           return Number(alphabits);
       } else if (name == 3412) {
           
           return Number(bluebits);
       } else if (name == 3411) {
           
           return Number(greenbits);
       } else if (name == 3410) {
           
           return Number(redbits);
       } else if (name == 34852) {

           return Number(maxdrawbufferswebgl);
       } else if (name == 3415) {
           
           return Number(stencilbits);
       } else if (name == 3414) {
           
           return Number(depthbits);
       } else if (name == 34047) {

           return Number(maxtexturemaxanisotropyext);
       } else if (name == 34921) {
           
           return Number(maxvertexattribs);
       } else if (name == 35661) {
           
           return Number(maxcombinedtextureimageunits);
       } else if (name == 34076) {
           
           return Number(maxcubemaptexturesize);
       } else if (name == 34024) {
           
           return Number(maxrenderbuffersize);
       } else if (name == 3379) {
           
           return Number(maxtexturesize);
       } else if (name == 36349) {
           
           return Number(maxfragmentuniformvectors);
       } else if (name == 36347) {
           
           return Number(maxvertexuniformvectors);
       } else if (name == 34930) {
           
           return Number(maxtextureimageunits);
       } else if (name == 36348) {
           
           return Number(maxvaryingvectors);
       } else if (name == 35660) {
           
           return Number(maxvertextextureimageunits);
       } else if (name == 3386) {
           
           return new Int32Array (maxviewportdims.replace("[", "").replace("]", "").split(","));
       }
   }


   HTMLCanvasElement.prototype.toBlob = function (callback, mimeType, qualityArgument) {
       

       var fake = fakeCanvas(this);

       originalToBlob.call(fake, callback, mimeType, qualityArgument);
   };

   HTMLCanvasElement.prototype.mozGetAsFile = function (name, type) {
       

       var fake = fakeCanvas(this);

       return originalMozGetAsFile.call(fake, name, type);
   };

   WebGLRenderingContext.prototype.getSupportedExtensions = function () {
       try {
           
           var availableExtensions = Object.keys(_extensions);
           
           return availableExtensions;
       } catch (a) {
           
           return Object.keys(extensions);
       }
   }
console.log("webgl")
    } + ')();';

    var seed=(function(origin){
    var canvas=document.createElement('canvas');
    var ctx=canvas.getContext('2d');
    ctx.textBaseline="top";
    ctx.font="16px 'Arial'";
    ctx.textBaseline="alphabetic";
    ctx.fillStyle="#068";
    ctx.fillText(origin,3,18);
    ctx.fillStyle="#f61";
    ctx.fillRect(125,1,62,30);
    ctx.fillStyle="rgba(101,202,0,0.75)";
    ctx.fillText(origin,5,17);
    return(canvas.toDataURL());
  })(origin)+(new Date().toDateString());

  console.log(origin);
  console.log(seed);

if (JSON.parse(response) === null) {
  return;
} else {

    var script = document.createElement('script');
    script.setAttribute("data-seed",seed?seed:'');
    script.textContent = `var webglResponseStr = '${response}'; \n ` + scriptCode;
    (document.head || document.documentElement).appendChild(script);
    script.remove();


    var inject=function(filePath,seed){
    var script=document.createElement('script');
    script.setAttribute("data-seed",seed?seed:'');
    script.src=chrome.extension.getURL(filePath);
    script.onload = function(){
      this.remove();
    };
      (document.head||document.documentElement).appendChild(script);
    }

    inject("js/lib/seedrandom.js", seed);
}
});