class Message

  include ActiveModel::Model
  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :firstname, :lastname, :email, :content

  validates :firstname,
    presence: true

  validates :lastname,
    presence: true

  validates :email,
    presence: true

  validates :content,
    presence: true

end
