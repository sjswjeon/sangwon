package com.example.sangwon.controller;

import com.example.sangwon.Model.Message;
import com.example.sangwon.repository.MessageRepository;
import com.example.sangwon.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/message")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @Autowired
    private MessageRepository messageRepository;

    @GetMapping("/list")
    public String list(Model model, Authentication authentication, @PageableDefault(size = 11, sort = "date", direction = Sort.Direction.DESC) Pageable pageable) {
        String authenticationName = authentication.getName();
        Page<Message> allReceivedMessages = messageRepository.findAllByReceiver(authenticationName, pageable);
        Page<Message> allSentMessages = messageRepository.findAllBySender(authenticationName, pageable);

        int receivedStartPage = Math.max(1, allReceivedMessages.getPageable().getPageNumber() - 4);
        int receivedEndPage = Math.min(allReceivedMessages.getTotalPages(), allReceivedMessages.getPageable().getPageNumber() + 4);
        model.addAttribute("receivedStartPage", receivedStartPage);
        model.addAttribute("receivedEndPage", receivedEndPage);

        int sentStartPage = Math.max(1, allReceivedMessages.getPageable().getPageNumber() - 4);
        int sentEndPage = Math.min(allReceivedMessages.getTotalPages(), allReceivedMessages.getPageable().getPageNumber() + 4);
        model.addAttribute("sentStartPage", sentStartPage);
        model.addAttribute("sentEndPage", sentEndPage);

        model.addAttribute("sentMessages", allSentMessages);
        model.addAttribute("receivedMessages", allReceivedMessages);

        return "/message/message";
    }

    @PostMapping("/new")
    public String sendNewMessage(Message message, Authentication authentication) {
        String authenticationName = authentication.getName();

        messageService.sendNewMessage(message, authenticationName);

        return "redirect:/message/list";
    }

    @GetMapping("/read")
    public String read(Model model, Authentication authentication, @RequestParam Long id, @PageableDefault(size = 7, sort = "date", direction = Sort.Direction.DESC) Pageable pageable) {
        Message message = messageRepository.findById(id).orElse(null);
        model.addAttribute("message", message);

        String authenticationName = authentication.getName();
//        List<Message> allSentMessages = messageService.findAllSentMessages(authenticationName);
//        List<Message> allReceivedMessages = messageService.findAllReceivedMessages(authenticationName);

        Page<Message> allReceivedMessages = messageRepository.findAllByReceiver(authenticationName, pageable);
        Page<Message> allSentMessages = messageRepository.findAllBySender(authenticationName, pageable);

        model.addAttribute("sentMessages", allSentMessages);
        model.addAttribute("receivedMessages", allReceivedMessages);
        return "/message/message-read";
    }
}
