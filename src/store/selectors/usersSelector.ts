import { AppStateType } from './../reduxStore';

export const getUsersSelector = (state: AppStateType) => state.usersPage.users
export const getTotalUserCountSelector = (state: AppStateType) => state.usersPage.totalUsersCount
export const getPageSizeSelector = (state: AppStateType) => state.usersPage.pageSize
export const getIsLoadSelector = (state: AppStateType) => state.usersPage.isLoad
export const getCurrentPageSelector = (state: AppStateType) => state.usersPage.currentPage