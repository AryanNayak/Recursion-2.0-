from django.urls import path, include   
from . import views













urlpatterns = [
    path('', views.apiOverview, name="api-overview"),
    # path('subject-detail/user_id=<str:user>/subject_id=<int:id>',
    #      views.subjectDetail, name="subject-detail"),
    # path('post-list/username=<str:username>/',
    #      views.postList, name="post-list"),

    # path('user-recommend/user name=<str:username>/', views.recommendUsers, name="recommendUsers"),
    # path('user-login/username=<str:username>/password=<str:password>/',         # >/password=<str:password>'
    #      views.userLogin, name="user-login"),

    # # # path('subject-detail/<str:pk>/', views.subjectDetail, name="subject-detail"),
    # path('post-insert/',
    #      views.postInsert, name="post-insert"),
    # path('user-register/', views.userRegistration, name="user-registration"),
    # path('user-follow/', views.userFollow, name="user-follow"),

    # # path('subject-update/user=<str:user>/subject_id=<int:id>',
    # #      views.subjectUpdate, name="subject-update"),
    # # path('subject-delete/subjectId=<str:subjectId>/',
    # #      views.subjectDelete, name="subject-delete"),
]
