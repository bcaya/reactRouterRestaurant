class Menu < ApplicationRecord
  validates_uniqueness_of :name 
end
