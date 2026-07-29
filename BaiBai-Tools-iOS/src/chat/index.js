// 聊天优化功能的公共出口(由原 chatOptimizations.js 拆分而来)
export { applyFastChatListScrollOptimization, observeChatManagementPopupCleanup, patchFastChatBackupsFetch, patchFastChatSearchFetch } from './chatList.js';
export { applyChatDeleteEditFlowOptimization, isChatDeleteEditFlowSupported, isWelcomeRecentChatDirectOpenCompatibilityMode } from './deleteEditFlow.js';
export { applyMessageEditBottomActions } from './editBottomActions.js';
export { applyMobileAutoKeyboardSuppression, applyMobileMessageEditScrollGuard } from './mobileKeyboard.js';
export { applyChatOptimizationCompatibilityIndicators, applyReduceLoadedFloors, bindChatOptimizationSettings } from './settingsBind.js';
export { configureChatOptimizations } from './state.js';
export { applyMessageTripleClickEdit } from './tripleClickEdit.js';
export { calculateVisibleMessageTextStats, getLongChatDomRenderSnapshot } from './util.js';
export { applyWelcomeRecentChatDirectOpenOptimization } from './welcomeRecent.js';
