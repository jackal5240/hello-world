# X2B FrontEnd API 更新日誌

## ver 1.0
  - 新增 API
    - example 範例API
    - exampleCopy 複製用範例

## ver 1.1
  - 新增 API
    - get-fc-warning 取得一個金融證照預警物件資料

## ver 1.2
  - 更改 API名稱 get-fc-warning 為 getFcWarning
  - 新增 API
    - getCourseList 取得課程列表
    - getCourseCatalogList 取得課程目錄列表

## ver 1.3
  - Add training blueprint student APIs.
    - get-student-blueprint 取得學生訓練藍圖
    - get-student-index-list 取得學生指標列表
    - get-student-index-course-list 取得學生指標課程列表

## ver 1.4
  - Add training blueprint admin APIs.

## ver 1.5
  - Fixed part of training blueprint admin APIs.  
   - 改成駝峰式命名
   - 把圖片加入
   - 修改傳入參數說明的位置

## ver 1.6
  - Fixed other part of training blueprint admin APIs.  
   - 改成駝峰式命名
   - 把圖片加入
   - 修改傳入參數說明的位置

## ver 1.7
  - Adjust training blueprint student APIs.  
   - 改成駝峰式命名
   - 把圖片加入
   - 修改傳入參數說明的位置

## ver 1.8
  - 加入金融證照預警的 CRUD API
  - 加入 AJAX URL 與 IMAGE 欄位
  - 加入共用 API 的示意圖

## ver 1.9
  - Adjust training blueprint admin APIs.
   - Add parameter for getIndexCourseList.

## ver 1.10
  - Adjust training blueprint admin APIs.
   - Remove addOrgJobTitleCourse.
   - Add addOrEditOrgJobTitleCourse.

## ver 1.11
  - Adjust training blueprint student APIs.
   - Remove parameter of getStudentBlueprint.

## ver 1.12
  - Adjust training blueprint student APIs.
   - Remove parameter "userId" of getStudentIndexList.

## ver 1.13
  - ancestorOrgList  ---> orgList
  - OrgJobTitleList ---> orgJobTitleList

## ver 1.14
  - getChildIOrgList ---> getChildOrgList  

## ver 1.15
  - 新增金融預警學生端 API
    - getStuFcwList 取得我的待修時數
    - getStuFcwCourseList 取得預警規則課程明細
    - getStuFcwCourseOrder 取得預警規則課程班次
    - saveStuFcwCourseEnroll 預警規則課程 班次報名

## ver 1.16
  - Added return value "pageSplit" in getJobTitleList

## ver 1.17
  - Added return value "childOrgCount" in getChildOrgList

## ver 1.18
  - Adjust API getCourseCatalogList
    - Add parameter childCount (子目錄數量)

## ver 1.19
  - Adjust training blueprint admin APIs.
   - Remove parameter "jobTitleId" from getJobTitleList and addOrgJobTitle.

## ver 1.20
  - 新增金融預警學生端 API
    - getStuFcwTrainDueDate 取得年度受訓到期日
  - 新增示意圖

## ver 1.21
  - Changed url in getChildOrgList and getAncestorOrgList.

## ver 1.22
  - add note for the parameter of API (getCourseCatalogList)

## ver 1.23
  - Change api to list and rename

## ver 1.24
  - Add training Cost APIs.
    - doSaveClassCosts 儲存班次成本設定

## ver 1.25
  - add api for finance warning - admin side
    - getCourses, addCourses, deleteCourse, updateCompleteTime, getFcWarningList, updateFcWarningSetting
  - add image to indicate the event binding points
  - add ajax url

## ver 1.26
  - 訓練藍圖 and 部門選擇器 ---> Deleted cmd and cx in url.

## ver 1.27
  - Fixed Api : getIndexCourseList

## ver 1.28
  - indexIdArray 改為 indexArray

## ver 1.29
  - Adjust training blueprint admin API.
    - Adjust names of response members of getIndexCourseList to be consistent with getIndexList and addOrEditOrgJobTitleCourse.

## ver 1.30
  - add api for finance warning - admin side
  - refactor names of parameter

## ver 1.31
  - 新增 Api getCourseListByIds (由指定的編號取得課程列表)
  
## ver 1.32
  - 更改指標英文 (原index 改為 ability)
  - getStudentIndexList 改為 getStudentBlueprintDetail, 並增加回傳"部門職稱"
  
## ver 1.33
  - getStudentBlueprintDetail增加回傳"部門名稱"
  
## ver 1.34
  - 刪除addOrEditOrgJobTitleCourse，新增addOrgJobTitleCourse與editOrgJobTitleCourse。
  
## ver 1.35
  - getStudentAbilityCourseList新增參數orgJobTitleId，回應新增allRecord與completeCourseNum。
  
## ver 1.36
  - 新增getStudentOrgJobTitleCourseList API。
  
## ver 1.37
  - getStudentBlueprintDetail回應刪除orgTitle新增orgJobTitleName。

## ver 1.38
  - API addOrgJobTitleCourse、editOrgJobTitleCourse 更新參數說明
  
## ver 1.39
  - update 金融預警學生端 API
  
  ## ver 1.40
  - addOrgJobTitleCourse,  editOrgJobTitleCourse的傳入參數orgJopbTitileId省略
