package com.example.sangwon.service;

import com.example.sangwon.Model.Message;
import com.example.sangwon.Model.User;
import com.example.sangwon.repository.MessageRepository;
import com.example.sangwon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Service
public class MessageService {

    @Autowired
    private MessageRepository messageRepository;

    @Autowired
    private UserRepository userRepository;

    public Message sendNewMessage(Message message, String username) {
        String date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
        User user = userRepository.findByUsername(username);
        User receiverUser = userRepository.findByUsername(message.getReceiver());
        message.setSenderid(user.getId());
        message.setReceiverid(receiverUser.getId());

        message.setDate(date);
        message.setChecked(false);
        message.setSender(username);
        message.setSenderUser(user);
        message.setReceiverUser(receiverUser);

        return messageRepository.save(message);
    }

    public List<Message> findAllSentMessages(String username) {
        User user = userRepository.findByUsername(username);

        return user.getSentMessages();
    }

    public List<Message> findAllReceivedMessages(String username) {
        User user = userRepository.findByUsername(username);

        return user.getReceivedMessages();
    }

}
