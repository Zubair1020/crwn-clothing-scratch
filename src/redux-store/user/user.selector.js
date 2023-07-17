export const selectCurrentUserId = ({ user }) => user.currentUser.id;

export const selectCurrentUserDetails = ({ user }) => user.currentUser.details;

export const selectCurrentUserLoading = ({ user }) => user.isLoading;

export const selectCurrentUserError = ({ user }) => user.error;
