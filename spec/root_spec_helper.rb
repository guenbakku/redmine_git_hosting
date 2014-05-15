require 'database_cleaner'
require 'factory_girl_rails'
require 'rake'
require 'rubygems'
require 'simplecov'
require 'simplecov-rcov'

## Configure SimpleCov
SimpleCov.formatter = SimpleCov::Formatter::MultiFormatter[
  SimpleCov::Formatter::HTMLFormatter,
  SimpleCov::Formatter::RcovFormatter,
]

SimpleCov.start 'rails' do
  add_group 'Redmine Git Hosting', 'plugins/redmine_git_hosting'
end

## Load Redmine App
require File.expand_path(File.dirname(__FILE__) + '/../test/test_helper')

## Load FactoryGirls factories
Dir[Rails.root.join("plugins/*/spec/factories/**/*.rb")].each {|f| require f}

## Configure RSpec
RSpec.configure do |config|
  config.include FactoryGirl::Syntax::Methods
  config.color = true
  config.fail_fast = true

  config.expect_with :rspec do |c|
    c.syntax = :expect
  end

  config.before(:suite) do
    DatabaseCleaner.clean_with(:truncation)
  end

  config.before(:each) do
    DatabaseCleaner.strategy = :transaction
  end

  config.before(:each) do
    DatabaseCleaner.start
  end

  config.after(:each) do
    DatabaseCleaner.clean
  end

end