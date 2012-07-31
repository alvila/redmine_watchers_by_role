require 'redmine'
require 'redmine_watchers_by_role/hooks'

Redmine::Plugin.register :redmine_watchers_by_role do
  name 'Watcher Sellection by Role'
  author 'Milan Stastny of ALVILA SYSTEMS'
  description 'Allows issue creator to select multiple watchers by role assigment'
  version '0.0.1'
  author_url 'http://www.alvila.com'
end

