source "https://rubygems.org"

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem "rails", "~> 7.0" # Update to latest stable version
gem "font-awesome-sass", "~> 6.0"
gem "pg"
gem "puma", "~> 5.0"
gem "sass-rails", "~> 6.0"
gem "uglifier", ">= 4.0.0" # Ensure compatibility with newer versions
gem "webpacker", "~> 5.4"
gem "coffee-rails", "~> 5.0"
gem "jbuilder", "~> 2.11"
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "capybara", "~> 3.35"
  gem "selenium-webdriver", "~> 4.0"
end

group :development do
  gem "web-console", ">= 4.0"
  gem "sqlite3", "~> 1.5"
  gem "listen", ">= 3.3", "< 4.0"
  gem "spring", "~> 4.0"
  gem "spring-watcher-listen", "~> 2.1"
end
