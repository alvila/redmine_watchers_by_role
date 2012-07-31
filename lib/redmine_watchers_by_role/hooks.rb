module RedmineWatchersByRole
  class Hooks < Redmine::Hook::ViewListener
    render_on :view_issues_form_details_bottom, :partial => 'watchers/multiselect_role'
  end
end
