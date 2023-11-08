class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello")) {
      this.actionProvider.greet();
    }

    if (lowercase.includes("adoptar") || lowercase.includes("como adoptar")) {
      this.actionProvider.handleAdoptarQuiz();
    }

    if (lowercase.includes("denunciar") || lowercase.includes("como denuncio")) {
      this.actionProvider.handleDenunciarQuiz();
    }

    if (lowercase.includes("donar") || lowercase.includes("como donar")) {
      this.actionProvider.handleDonarQuiz();
    }
  }
}

export default MessageParser;
